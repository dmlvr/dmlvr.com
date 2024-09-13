import { useContext, useEffect, useState } from "react";
import { Props } from "./types";
import { UserUUIDContext } from "@/context/UserUUID";
import { BASE_PATH } from "@/const";

export default function useLikes({ post }: Props) {
  const { likes: initLikes, id } = post;
  const { userUUID } = useContext(UserUUIDContext) ?? { userUUID: "" };
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState(initLikes ?? []);

  useEffect(() => {
    initLikes && setIsLike(initLikes.includes(userUUID));
  }, [userUUID]);

  const updateLikes = (likes: string[]) => {
    fetch(`${BASE_PATH}/api/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, likes }),
    }).catch((e) => console.log(e));
    return true;
  };

  const likeHandler = () => {
    setIsLike((prev) => {
      if (prev) {
        setLikes((prevLikes) => {
          const newLikes = prevLikes.filter((el) => el !== userUUID);
          updateLikes(newLikes);
          return newLikes;
        });
      } else {
        setLikes((prevLikes) => {
          const newLikes = [...prevLikes, userUUID];
          updateLikes(newLikes);
          return newLikes;
        });
      }

      return !prev;
    });
  };

  return { isLike, likeHandler, likes };
}
