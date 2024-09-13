import { BASE_PATH } from "@/const";
import React from "react";
import styles from "./Likes.module.scss";
import useLikes from "./Likes.controller";
import cn from "classnames";
import { Props } from "./types";

function Likes(props: Props) {
  const { isLike, likeHandler, likes } = useLikes(props);

  return (
    <button
      className={cn(styles["btn"], { [styles["btn--active"]]: isLike })}
      onClick={likeHandler}
    >
      <svg width={18} height={17}>
        <use xlinkHref={`${BASE_PATH}/img/sprite.svg#like`} />
      </svg>
      <span>{likes.length}</span>
    </button>
  );
}

export default Likes;
