import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';
import getSetting from '@/utils/getSetting';
import { Props } from '@/types/types';
import Contacts from '@/components/Contacts/Contacts';
import { createCsrfToken } from '@/utils/csrf';

export default function ContactsPage({ 
  ruLang,
  darkTheme, 
  csrfToken
 }: Props & { csrfToken: string }) {

  return (
    <Contacts 
      ruLang={ruLang} 
      darkTheme={darkTheme} 
      csrfToken={csrfToken}
    />
  )
}

export const getServerSideProps: GetServerSideProps<{ 
  cookiesDarkTheme: boolean | null,
  cookiesRuLang: boolean
}> = async ({req, res}) => {

  const setting = getSetting(req as NextApiRequest);
  const csrfToken = createCsrfToken(req as NextApiRequest, res as NextApiResponse);

  return { 
    props: { 
      ...setting,
      csrfToken
    } 
  };
}