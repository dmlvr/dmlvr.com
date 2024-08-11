import Head from "next/head";
import React from "react";
import styles from "./Blog.module.scss";
import { BlogProps } from "@/types";
import Link from "next/link";
import { formatDateString } from "@/utils";

function Blog(props: BlogProps) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>{`Блог`}</title>
      </Head>
      <main className={styles["main"]}>
        <h1 className={styles["title"]}>Блог</h1>
        {posts && posts.length > 0 && (
          <ul className={styles["posts-list"]}>
            {posts.map((post) => {
              const date = formatDateString(post.publication_date);
              return (
                <li className={styles["post-item"]}>
                  <Link
                    href={`blog/${post.id}`}
                    className={styles["post-link"]}
                  >
                    <div className={styles["post-meta"]}>
                      <p className={styles["post-title"]}>{post.title}</p>
                      {date && (
                        <span className={styles["post-date"]}>{date}</span>
                      )}
                    </div>
                    {post.excerpt && (
                      <div
                        className={styles["post-excerpt"]}
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    )}
                    {post.main_photo && (
                      <div className={styles["image"]}>
                        <img
                          width={300}
                          height={300}
                          src={`http://localhost:3462/assets/${post.main_photo}/image.png`}
                          alt={post.title}
                        />
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}

export default Blog;
