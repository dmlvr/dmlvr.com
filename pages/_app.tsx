import Header from '@/components/Header/Header'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import YM from '@/components/YM';
import Head from 'next/head';
import { useColors } from '@/hooks/useColors';

export default function App({ Component, pageProps }: AppProps) {
    const { cookiesRuLang } = pageProps ?? false;
    const { cookiesDarkTheme } = pageProps ?? null;

    const [darkTheme, setDarkTheme] = useState(cookiesDarkTheme);
    const [ruLang, setRuLang] = useState(cookiesRuLang);

    useEffect(() => {
      const initDarkTheme = cookiesDarkTheme === null 
          ? window && window.matchMedia('(prefers-color-scheme: dark)').matches
          : cookiesDarkTheme;

        setDarkTheme(initDarkTheme);
    }, [cookiesDarkTheme]);
    
    const themeHandler = (value?: boolean) => {
      const newTheme = value !== undefined ? value : !darkTheme;
      setDarkTheme(newTheme);
      Cookies.set('dark-theme', newTheme.toString());
    }

    const ruLangHandler = (value?: boolean) => {
      const newValue = value !== undefined ? value : !ruLang;
      setRuLang(newValue);
      Cookies.set('ru-lang', newValue.toString());
    }

    useColors(darkTheme);

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <YM />
      <Header darkTheme={darkTheme} themeHandler={themeHandler} ruLang={ruLang} ruLangHandler={ruLangHandler} />
      <Component 
        darkTheme={darkTheme} 
        ruLang={ruLang} 
        {...pageProps} 
      />
    </>
  )
}