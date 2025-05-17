import React from "react";
import styles from "./NotFound.module.scss";
import { Setting } from "@/types";
import Link from "next/link";
import Head from "next/head";

function NotFound({ darkTheme, ruLang }: Setting) {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <main className={styles["main"]}>
        <h1 className={styles["title"]}>404</h1>
        <p>
          {ruLang
            ? "Страница отсутствует, а может быть никогда не существовала."
            : "Page is missing and may never have existed."}
        </p>
        <Link className={styles["btn"]} href="/">
          {ruLang ? "на главную" : "go home"}
        </Link>
      </main>
    </>
  );
}

export default NotFound;
