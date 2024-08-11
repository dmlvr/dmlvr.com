import { PostProps } from "@/types";
import Head from "next/head";
import React from "react";
import styles from "./Post.module.scss";
import { formatDateString } from "@/utils";

function Post(props: PostProps) {
  const { post } = props;

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <main className={styles["main"]}>
        <h1 className={styles["title"]}>{post?.title}</h1>
        {post?.content && (
          <div
            className={styles["post-content"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </main>
    </>
  );
}

export default Post;
