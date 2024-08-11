import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { getSetting } from "@/utils";
import { Setting } from "@/types";
import Contacts from "@/components/Contacts/Contacts";
import { createCsrfToken } from "@/utils/csrf";

export default function ContactsPage(props: Setting & { csrfToken: string }) {
  return <Contacts {...props} />;
}

export const getServerSideProps: GetServerSideProps<{
  cookiesDarkTheme: boolean | null;
  cookiesRuLang: boolean;
}> = async ({ req, res }) => {
  const setting = getSetting(req as NextApiRequest);
  const csrfToken = createCsrfToken(
    req as NextApiRequest,
    res as NextApiResponse
  );

  return {
    props: {
      ...setting,
      csrfToken,
    },
  };
};
