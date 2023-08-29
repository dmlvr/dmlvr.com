import Header from '@/components/Header'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Cookies from 'js-cookie';

export default function App({ Component, pageProps }: AppProps) {
  const [darkTheme, setDarkTheme] = useState(false);
  const themeHandler = (value?: boolean) => {
    const newTheme = value !== undefined ? value : !darkTheme;
    setDarkTheme(newTheme);
    Cookies.set('dark-theme', newTheme.toString());
  }

  return (
    <>
      <Header darkTheme={darkTheme} themeHandler={themeHandler} />
      <Component darkTheme={darkTheme} themeHandler={themeHandler} {...pageProps} />
    </>
  )
}