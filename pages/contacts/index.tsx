import { GetServerSideProps, NextApiRequest } from 'next';
import getSetting from '@/utils/getSetting';
import { Props } from '@/types/types';
import Contacts from '@/components/Contacts/Contacts';

export default function ContactsPage({ 
  ruLang,
  darkTheme, 
 }: Props) {

  return (
    <Contacts ruLang={ruLang} darkTheme={darkTheme} />
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