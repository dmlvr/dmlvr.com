import { GetServerSideProps, NextApiRequest } from "next";
import { getSetting } from "@/utils";
import { Setting } from "@/types";
import About from "@/components/About/About";

export default function AboutPage(props: Setting) {
  return <About {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const setting = getSetting(req as NextApiRequest);

  return {
    props: {
      ...setting,
    },
  };
};
