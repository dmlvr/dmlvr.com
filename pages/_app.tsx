import Header from '@/components/Header/Header'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Cookies from 'js-cookie';
import YM from '@/hooks/YM';
import Head from 'next/head';
import { texts } from '@/const';

export default function App({ Component, pageProps }: AppProps) {
    const [darkTheme, setDarkTheme] = useState(false);
    const [ruLang, setRuLang] = useState(true);
    
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

    const lang = ruLang ? 'ru' : 'en';

  return (
    <>
      <Head>
        <title>{`${texts[lang].name}, ${texts[lang].jobTitle}`}</title>
        <meta name="description" content={`${texts[lang].name}, ${texts[lang].jobTitle} | ${texts[lang].stack}`} />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <YM />
      <Header darkTheme={darkTheme} themeHandler={themeHandler} ruLang={ruLang} ruLangHandler={ruLangHandler} />
      <Component darkTheme={darkTheme} themeHandler={themeHandler} ruLang={ruLang} ruLangHandler={ruLangHandler} {...pageProps} />
    </>
  )
}