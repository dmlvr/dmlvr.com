import { GetServerSideProps, NextApiRequest } from 'next';
import getSetting from '@/utils/getSetting';
import { PagesProps } from '@/types/types';

export default function Portfolio({ 
  darkTheme, 
  ruLang,
 }: PagesProps) {

  return (
    <p>Portfolio</p>
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