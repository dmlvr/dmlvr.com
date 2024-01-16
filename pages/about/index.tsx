import { GetServerSideProps, NextApiRequest } from 'next';
import useThemeAndLang from '@/hooks/useThemeLang';
import getSetting from '@/utils/getSetting';
import { PagesProps } from '@/types/types';
import About from '@/components/About/About';

export default function AboutPage({ 
  darkTheme, 
  themeHandler, 
  cookiesDarkTheme,
  ruLang,
  ruLangHandler,
  cookiesRuLang
 }: PagesProps) {

  useThemeAndLang({
    ruLangHandler,
    cookiesRuLang,
    cookiesDarkTheme,
    themeHandler,
    darkTheme
  })

  return (
    <About darkTheme={darkTheme} ruLang={ruLang} />
  )
}

export const getServerSideProps: GetServerSideProps<{ 
  cookiesDarkTheme: boolean | null,
  cookiesRuLang: boolean
}> = async ({req}) => {

  const setting = getSetting(req as NextApiRequest);

  return { 
    props: { 
      ...setting
    } 
  };
}