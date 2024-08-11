import { GetServerSideProps, NextApiRequest } from "next";
import { getSetting } from "@/utils";
import { Setting } from "@/types";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function PortfolioPage(props: Setting) {
  return <Portfolio {...props} />;
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
