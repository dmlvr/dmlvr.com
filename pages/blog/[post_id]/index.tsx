import { GetServerSideProps, NextApiRequest } from "next";
import getSetting from "@/utils/getSetting";
import { PostType, PostProps } from "@/types";
import { getClient } from "@/utils";
import { readItem, readItems } from "@directus/sdk";
import Post from "@/components/Post/Post";

export default function Page(props: PostProps) {
  const { darkTheme, ruLang, error, post, post_id } = props;

  console.log(post);

  if (error) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <Post darkTheme={darkTheme} ruLang={ruLang} post={post} post_id={post_id} />
  );
}

export const getServerSideProps: GetServerSideProps<{
  cookiesDarkTheme: boolean | null;
  cookiesRuLang: boolean;
  error?: string;
  post?: any;
}> = async ({ params, req }) => {
  const setting = getSetting(req as NextApiRequest);

  const post_id = params?.post_id as string;

  const { client, isClient } = getClient();

  if (!isClient || !post_id) {
    return {
      props: {
        ...setting,
        error: "Ошибка доступа, свяжитесь с администратором.",
      },
    };
  }

  try {
    const post = (await client.request(
      readItem("Posts" as any, post_id, {
        fields: ["title", "publication_date", "content", "main_photo"],
      })
    )) as PostType[];

    return {
      props: {
        ...setting,
        post,
        post_id,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        ...setting,
        error: "Ошибка с запросом данных.",
      },
    };
  }
};
