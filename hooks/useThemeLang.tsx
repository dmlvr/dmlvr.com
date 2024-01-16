import { useEffect } from "react";

type Props = {
  darkTheme: boolean;
  themeHandler: (value?: boolean) => void;
  cookiesDarkTheme: boolean | null;
  ruLangHandler: (value?: boolean) => void;
  cookiesRuLang: boolean;
}

const useThemeAndLang = ({
  ruLangHandler,
  cookiesRuLang,
  cookiesDarkTheme,
  themeHandler,
  darkTheme

}: Props) => {

  useEffect(() => {
    ruLangHandler(cookiesRuLang);
    if (cookiesDarkTheme === null || cookiesDarkTheme === undefined) {
      const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      console.log(isDarkTheme);

      themeHandler(isDarkTheme);
    } else if (darkTheme !== cookiesDarkTheme) {
      themeHandler(cookiesDarkTheme);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkTheme]);

}

export default useThemeAndLang;