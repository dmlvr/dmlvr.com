import { socialList } from "@/const";
import usePersonalData from "@/hooks/usePersonalData";
import { MainProps } from "@/types";
import { getYears } from "@/utils/getYears";
import { useEffect, useRef, useState } from "react";
import ym from "react-yandex-metrika";

const useMain = ({ setting, cvs }: MainProps) => {
  const { ruLang, darkTheme } = setting;
  const [showCVs, setShowCVs] = useState(false);
  const btnRef = useRef<HTMLDivElement | null>(null);

  const texts = {
    hello: ruLang ? "Привет, меня зовут" : "Hello, I am",
    description: ruLang ? (
      <>
        JavaScript разработчик. Более {getYears(new Date(2020, 10, 1))}-х лет
        опыта <br />
        коммерческой разработки.
      </>
    ) : (
      <>
        JavaScript Developer {getYears(new Date(2020, 10, 1))}+ years of
        expirience <br />
        in web application development.
      </>
    ),
    btn: ruLang ? "Резюме" : "Explore CV",
  };

  const getCV = () => {
    ym("reachGoal", "getCV");
    setShowCVs(false);
  };

  const personalData = usePersonalData(ruLang);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showCVs &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setShowCVs(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCVs]);

  return {
    texts,
    socialList,
    personalData,
    showCVs,
    setShowCVs,
    getCV,
    btnRef,
    cvs,
    darkTheme,
  };
};

export default useMain;
