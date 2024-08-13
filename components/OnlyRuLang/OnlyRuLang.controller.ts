import { useEffect, useState } from "react";

export default function useOnlyRuLang() {
  const [isShowMsg, setIsShowMsg] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("isShowMsg");

    if (!storedData) {
      setIsShowMsg(true);
      return;
    }

    const parsedData = JSON.parse(storedData);
    const expirationDate = new Date(parsedData.expirationDate);

    if (new Date() >= expirationDate) {
      setIsShowMsg(true);
      localStorage.removeItem("isShowMsg");
    }
  }, []);

  const clickHandler = () => {
    setIsShowMsg(false);

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 15);

    localStorage.setItem(
      "isShowMsg",
      JSON.stringify({
        value: false,
        expirationDate: expirationDate.toISOString(),
      })
    );
  };

  return { clickHandler, isShowMsg };
}
