import Head from "next/head";
import React from "react";
import styles from "./Contacts.module.scss";
import { Setting } from "@/types";
import useContacts from "./Contacts.controller";
import Image from "next/image";
import ym from "react-yandex-metrika";
import Link from "next/link";
import Form from "../Form/Form";

function Contacts({
  ruLang,
  darkTheme,
  csrfToken,
}: Setting & { csrfToken: string }) {
  const { texts, socialList, personalData } = useContacts(ruLang, csrfToken);

  return (
    <>
      <Head>
        <title>{`${texts.title} | ${personalData.name}, ${personalData.jobTitle}`}</title>
      </Head>
      <main className={styles["container"]}>
        <div
          className={`
          ${styles["image"]} 
          ${!darkTheme && styles["image--shadow"]}
        `}
        >
          <Image
            alt={texts.title}
            width={500}
            height={800}
            src={"/img/contacts.jpg"}
          />
        </div>
        <div className={styles["content"]}>
          <h1>{texts.title}</h1>
          <ul className={styles.social}>
            {socialList.map((item) => (
              <li key={item.name}>
                <Link
                  className={`${styles["social__link"]} ${
                    item.adress && styles["social__link--email"]
                  }`}
                  href={item.url}
                  onClick={() => ym("reachGoal", item.name)}
                >
                  <svg width="50" height="50" viewBox="0 0 25 25">
                    <use xlinkHref={`./img/sprite.svg#${item.name}`} />
                  </svg>
                  <span>{item.adress ? item.adress : item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p>{texts.paragraph}</p>
          <Form ruLang={ruLang} csrfToken={csrfToken} darkTheme={darkTheme} />
        </div>
      </main>
    </>
  );
}

export default Contacts;
