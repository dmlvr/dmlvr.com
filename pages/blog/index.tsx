import { GetServerSideProps, NextApiRequest } from "next";
import { getSetting } from "@/utils";
import { BlogProps, PostType } from "@/types";
import { getClient } from "@/utils";
import { readItems } from "@directus/sdk";
import Blog from "@/components/Blog/Blog";

export default function Page(props: BlogProps) {
  return <Blog {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const setting = getSetting(req as NextApiRequest);

  const { client, isClient } = getClient();

  if (!isClient) {
    return {
      notFound: true,
    };
  }

  try {
    const posts = (await client.request(
      readItems("Posts" as any, {
        fields: ["id", "title", "publication_date", "preview", "main_photo"],
        filter: {
          status: {
            _eq: "published",
          },
        },
        sort: ["-publication_date"],
      })
    )) as PostType[];

    return {
      props: {
        ...setting,
        posts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        notFound: true,
      },
    };
  }
};
