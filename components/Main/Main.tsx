import React from "react";
import styles from "./Main.module.scss";
import Image from "next/image";
import Link from "next/link";
import ym from "react-yandex-metrika";
import { MainProps, Setting } from "@/types";
import useMain from "./Main.controller";
import Head from "next/head";
import cn from "classnames";
import { DIRECTUS_API_URL } from "@/const";

function Main(props: MainProps) {
  const {
    texts,
    socialList,
    personalData,
    setShowCVs,
    showCVs,
    getCV,
    btnRef,
    cvs,
    darkTheme,
  } = useMain(props);

  return (
    <>
      <Head>
        <title>{`${personalData.name}, ${personalData.jobTitle}`}</title>
      </Head>
      <main className={styles["main"]}>
        <div
          className={`
          ${styles["image"]} 
          ${!darkTheme && styles["image--shadow"]}
        `}
        >
          <Image
            alt={personalData.name}
            src={`/img/main.png`}
            width={400}
            height={400}
          />
        </div>
        <div className={styles["content"]}>
          <span className={styles["subtitle"]}>{texts.hello}</span>
          <h1 className={styles["title"]}>{personalData.name}</h1>
          <p
            className={styles["techstack"]}
          >{`${personalData.jobTitle} | ${personalData.stack}`}</p>
          <p className={styles["about"]}>{texts.description}</p>
        </div>
        {cvs && cvs.length > 0 && (
          <div className={styles["btn-container"]} ref={btnRef}>
            <button
              className={cn(styles["btn"], { [styles["btn--open"]]: showCVs })}
              onClick={() => setShowCVs((prev) => !prev)}
            >
              <span>{texts.btn}</span>
              <svg width="6" height="9" viewBox="0 0 6 9">
                <use xlinkHref="./img/sprite.svg#polygon" />
              </svg>
            </button>
            <ul
              className={cn(styles["cv-list"], {
                [styles["cv-list--hidden"]]: !showCVs,
              })}
            >
              {cvs.map((el) => (
                <li>
                  <Link
                    href={`${DIRECTUS_API_URL}/assets/${el.file}/${personalData.name}.pdf`}
                    target="_blank"
                    onClick={getCV}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className={styles["socialList"]}>
          {socialList.map((item) => (
            <li key={item.name}>
              <Link href={item.url} onClick={() => ym("reachGoal", item.name)}>
                <span>{item.name}</span>
                <svg width="25" height="25" viewBox="0 0 25 25">
                  <use xlinkHref={`./img/sprite.svg#${item.name}`} />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Main;
