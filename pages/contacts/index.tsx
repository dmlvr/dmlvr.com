import { GetServerSideProps, NextApiRequest } from 'next';
import useThemeAndLang from '@/hooks/useThemeLang';
import getSetting from '@/utils/getSetting';
import { PagesProps } from '@/types/types';

export default function Contacts({ 
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
    <p>Contacts</p>
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