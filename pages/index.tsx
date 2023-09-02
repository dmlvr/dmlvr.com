import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import { useEffect } from 'react';
import Main from '@/components/Main';

type Props = {
  darkTheme: boolean;
  themeHandler: (value?: boolean) => void;
  cookiesDarkTheme: boolean | null;
  ruLang: boolean;
  ruLangHandler: (value?: boolean) => void;
  cookiesRuLang: boolean;
}

export default function Home({ 
  darkTheme, 
  themeHandler, 
  cookiesDarkTheme,
  ruLang,
  ruLangHandler,
  cookiesRuLang
 }: Props) {

  useEffect(() => {
    ruLangHandler(cookiesRuLang);
    if (cookiesDarkTheme === null) {
      const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  return (
    <Main darkTheme={darkTheme} ruLang={ruLang} />
  )
}

export const getServerSideProps: GetServerSideProps<{ 
  cookiesDarkTheme: boolean | null,
  cookiesRuLang: boolean
}> = async (context) => {

  const cookies = cookie.parse(context.req.headers.cookie || '');

  let cookiesDarkTheme: boolean | null;
  if (typeof cookies['dark-theme'] === 'undefined') {
    cookiesDarkTheme = null;
  } else {
    cookiesDarkTheme = cookies['dark-theme'] === 'true' ? true : false;
  }

  let cookiesRuLang: boolean;
  if (typeof cookies['ru-lang'] === 'undefined') {
    const langHeader = context.req.headers['accept-language'];
    cookiesRuLang = langHeader && langHeader.startsWith('ru') ? true : false;
  } else {
    cookiesRuLang = cookies['ru-lang'] === 'true' ? true : false; // Исправление здесь
  }

  return { props: { cookiesDarkTheme, cookiesRuLang } };
}