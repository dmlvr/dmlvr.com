import React from "react";
import styles from "./OnlyRuLang.module.scss";
import useOnlyRuLang from "./OnlyRuLang.controller";

function OnlyRuLang() {
  const { clickHandler, isShowMsg } = useOnlyRuLang();
  return (
    <>
      {isShowMsg && (
        <div className={styles["wrapper"]}>
          <h3 className={styles["title"]}>Attention!</h3>
          <p>This section of the site contains materials only in Russian.</p>
          <button onClick={clickHandler} className={styles["btn"]}>
            Accepted
          </button>
        </div>
      )}
    </>
  );
}

export default OnlyRuLang;
