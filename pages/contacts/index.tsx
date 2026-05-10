import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { getSetting } from "@/utils";
import { Setting } from "@/types";
import Contacts from "@/components/Contacts/Contacts";
import { createCsrfToken } from "@/utils/csrf";

export default function ContactsPage(props: Setting & { csrfToken: string; isShowForm: boolean }) {
  return <Contacts {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const setting = getSetting(req as NextApiRequest);
  const csrfToken = createCsrfToken(
    req as NextApiRequest,
    res as NextApiResponse
  );

  const isShowForm = [
    process.env.EMAIL_PORT,
    process.env.EMAIL_SMTP,
    process.env.EMAIL_SENDER,
    process.env.EMAIL_SENDER_PASSWORD,
    process.env.EMAIL_RECIPIENT
  ].every(Boolean);

  return {
    props: {
      ...setting,
      csrfToken,
      isShowForm,
    },
  };
};
