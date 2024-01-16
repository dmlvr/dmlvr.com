export type PagesProps = {
  darkTheme: boolean;
  themeHandler: (value?: boolean) => void;
  cookiesDarkTheme: boolean | null;
  ruLangHandler: (value?: boolean) => void;
  cookiesRuLang: boolean;
  ruLang: boolean;
}

export type ComponentProps = {
  darkTheme: boolean
  ruLang: boolean
}