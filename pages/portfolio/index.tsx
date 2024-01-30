import { GetServerSideProps, NextApiRequest } from 'next';
import getSetting from '@/utils/getSetting';
import { Props } from '@/types/types';
import Portfolio from '@/components/Portfolio/Portfolio';

export default function PortfolioPage({ 
  ruLang,
  darkTheme
 }: Props) {

  return (
    <Portfolio ruLang={ruLang} darkTheme={darkTheme} />
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