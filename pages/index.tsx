import { GetServerSideProps, NextApiRequest } from "next";
import Main from "@/components/Main/Main";
import { getSetting } from "@/utils/getSetting";
import { MainProps } from "@/types";
import { getClient } from "@/utils";
import { readItems } from "@directus/sdk";
import { CVs } from "@/types/cvs";

export default function Home(props: MainProps) {
  return <Main {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const setting = getSetting(req as NextApiRequest);

  const { client, isClient } = getClient();

  if (!isClient) {
    return {
      notFound: true,
    };
  }

  const cvs = (await client.request(
    readItems("cvs" as any, {
      fields: ["name", "file"],
    })
  )) as CVs[];

  return {
    props: {
      ...setting,
      cvs,
    },
  };
};
