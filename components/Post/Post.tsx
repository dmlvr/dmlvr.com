import { PostProps } from "@/types";
import Head from "next/head";
import React, { useEffect } from "react";
import styles from "./Post.module.scss";
import { formatDateString } from "@/utils";
import OnlyRuLang from "../OnlyRuLang/OnlyRuLang";
import PostGallery from "../Gallery/PostGallery";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-scss.min.js";
import usePersonalData from "@/hooks/usePersonalData";

function Post(props: PostProps) {
  const { post, ruLang } = props;
  const date = formatDateString(post?.publication_date);
  const personalData = usePersonalData(ruLang);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{`${post?.title} | ${personalData.name}, ${personalData.jobTitle}`}</title>
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
