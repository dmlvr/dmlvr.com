import { GetServerSideProps, NextApiRequest } from "next";
import cookie from "cookie";
import Main from "@/components/Main/Main";
import { getSetting } from "@/utils/getSetting";
import { Setting } from "@/types";

export default function Home(props: Setting) {
  return <Main {...props} />;
}

export const getServerSideProps: GetServerSideProps<{
  cookiesDarkTheme: boolean | null;
  cookiesRuLang: boolean;
}> = async ({ req }) => {
  const setting = getSetting(req as NextApiRequest);

  return {
    props: {
      ...setting,
    },
  };
};
