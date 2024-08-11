import { NextApiRequest } from "next";
import cookie from "cookie";

export const getSetting = (req: NextApiRequest) => {
  const cookies = cookie.parse(req.headers.cookie || "");

  let cookiesDarkTheme: boolean | null;
  if (typeof cookies["dark-theme"] === "undefined") {
    cookiesDarkTheme = null;
  } else {
    cookiesDarkTheme = cookies["dark-theme"] === "true" ? true : false;
  }

  let cookiesRuLang: boolean;
  const langHeader = req.headers["accept-language"];
  cookiesRuLang = langHeader && langHeader.startsWith("ru") ? true : false;

  if (cookies["ru-lang"]) {
    cookiesRuLang = cookies["ru-lang"] === "true" ? true : false;
  }

  return {
    cookiesDarkTheme,
    cookiesRuLang,
  };
};
