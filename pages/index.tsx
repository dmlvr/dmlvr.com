import { GetServerSideProps, NextApiRequest } from 'next';
import cookie from 'cookie';
import Main from '@/components/Main/Main';
import getSetting from '@/utils/getSetting';
import { Props } from '@/types/types';

export default function Home({ 
  darkTheme, 
  ruLang,
 }: Props) {

  return (
    <Main darkTheme={darkTheme} ruLang={ruLang} />
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