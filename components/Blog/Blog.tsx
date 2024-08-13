import Head from "next/head";
import React from "react";
import styles from "./Blog.module.scss";
import { BlogProps } from "@/types";
import Link from "next/link";
import { formatDateString } from "@/utils";
import OnlyRuLang from "../OnlyRuLang/OnlyRuLang";
import { DIRECTUS_API_URL } from "@/const";

function Blog(props: BlogProps) {
  const { posts, ruLang } = props;
  return (
    <>
      <Head>
        <title>{`Блог`}</title>
      </Head>
      <main className={styles["main"]}>
        <h1 className={styles["title"]}>Блог</h1>
        {posts && posts.length > 0 ? (
          <ul className={styles["posts-list"]}>
            {posts.map((post) => {
              const date = formatDateString(post.publication_date);
              return (
                <li key={post.id} className={styles["post-item"]}>
                  <Link
                    href={`blog/${post.id}`}
                    className={styles["post-link"]}
                  >
                    <p className={styles["post-title"]}>{post.title}</p>
                    {date && (
                      <span className={styles["post-date"]}>{date}</span>
                    )}
                    {post.preview && (
                      <div
                        className={styles["post-preview"]}
                        dangerouslySetInnerHTML={{ __html: post.preview }}
                      />
                    )}
                    {post.main_photo && (
                      <div className={styles["image"]}>
                        <img
                          width={300}
                          height={300}
                          src={`${DIRECTUS_API_URL}/assets/${post.main_photo}/image.png`}
                          alt={post.title}
                        />
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Тут пока пусто, но совсем скоро тут появяться посты.</p>
        )}
        {!ruLang && <OnlyRuLang />}
      </main>
    </>
  );
}

export default Blog;
