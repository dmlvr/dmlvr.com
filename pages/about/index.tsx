import { GetServerSideProps, NextApiRequest } from 'next';
import getSetting from '@/utils/getSetting';
import { PagesProps } from '@/types/types';
import About from '@/components/About/About';

export default function AboutPage({ 
  darkTheme, 
  ruLang,
 }: PagesProps) {

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