import { GetServerSideProps, NextApiRequest } from "next";
import { getSetting, getClient } from "@/utils";
import { PostType, PostProps } from "@/types";
import { readItem } from "@directus/sdk";
import Post from "@/components/Post/Post";

export default function Page(props: PostProps) {
  return <Post {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const setting = getSetting(req as NextApiRequest);
  const post_id = params?.post_id as string;
  const { client, isClient } = getClient();

  if (!isClient || !post_id) {
    return {
      notFound: true,
    };
  }

  try {
    const post = (await client.request(
      readItem("Posts" as any, post_id, {
        fields: [
          "title",
          "publication_date",
          "content",
          "main_photo",
          "preview",
          "gallery.directus_files_id.id",
          "gallery.directus_files_id.width",
          "gallery.directus_files_id.height",
          "likes",
        ],
      })
    )) as PostType[];

    return {
      props: {
        ...setting,
        post: { ...post, id: post_id },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
