import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { BASE_PATH } from "@/const";

type Props = {
  darkTheme: boolean;
  themeHandler: () => void;
  ruLang: boolean;
  ruLangHandler: () => void;
};

function Header({ darkTheme, themeHandler, ruLang, ruLangHandler }: Props) {

  return (
    <header className={styles["header"]}>
      <Link
        className={styles["logo"]}
        href="/"
      >
        <svg width={100} height={46} viewBox="0 0 250 114">
          <use xlinkHref={`${BASE_PATH}/img/sprite.svg#logo`} />
        </svg>
      </Link>
      <nav
        className={`
          ${styles["navigations"]}
        `}
      >
        <button onClick={() => ruLangHandler()} className={styles["langs"]}>
          <span>ру</span>
          <svg
            className={`${styles["lang__svg"]} ${
              ruLang && styles["lang__svg--ru"]
            }`}
            width={36}
            height={20}
          >
            <use
              xlinkHref={`${BASE_PATH}/img/sprite.svg#header-dark-mode-btn`}
            />
          </svg>
          <span>en</span>
        </button>
        <div className={styles["theme"]}>
          <button onClick={() => themeHandler()}>
            <svg width={36} height={20}>
              {darkTheme ? (
                <use
                  xlinkHref={`${BASE_PATH}/img/sprite.svg#header-dark-mode-btn`}
                />
              ) : (
                <use
                  xlinkHref={`${BASE_PATH}/img/sprite.svg#header-light-mode-btn`}
                />
              )}
            </svg>
          </button>
          {darkTheme ? (
            <img
              src={`${BASE_PATH}/img/header-dark-mode-icon.png`}
              alt="dark mode icon"
            />
          ) : (
            <svg width="23" height="24" viewBox="0 0 23 24">
              <use
                xlinkHref={`${BASE_PATH}/img/sprite.svg#header-light-mode-icon`}
              />
            </svg>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
