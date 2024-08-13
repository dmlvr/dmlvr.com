import { PostProps } from "@/types";
import Head from "next/head";
import React from "react";
import styles from "./Post.module.scss";
import { formatDateString } from "@/utils";
import OnlyRuLang from "../OnlyRuLang/OnlyRuLang";
import { Gallery } from "react-grid-gallery";
import PostGallery from "../Gallery/PostGallery";

function Post(props: PostProps) {
  const { post, ruLang } = props;
  const date = formatDateString(post?.publication_date);

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <main className={styles["main"]}>
        <div className={styles["top"]}>
          <h1 className={styles["title"]}>{post?.title}</h1>
          {date && <span>{date}</span>}
        </div>
        {post?.content && (
          <div
            className={styles["post-content"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
        {!post?.content && post?.preview && (
          <div
            className={styles["post-content"]}
            dangerouslySetInnerHTML={{ __html: post.preview }}
          />
        )}
        {post.gallery && post.gallery.length > 0 && (
          <PostGallery gallery={post.gallery} />
        )}
        {!ruLang && <OnlyRuLang />}
      </main>
    </>
  );
}

export default Post;
