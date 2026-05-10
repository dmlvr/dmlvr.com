import { GetServerSideProps, NextApiRequest } from "next";
import Main from "@/components/Main/Main";
import { getSetting } from "@/utils/getSetting";
import { MainProps } from "@/types";
import { getClient } from "@/utils";
import { readItems } from "@directus/sdk";
import { CV } from "@/types/cvs";

export default function Home(props: MainProps) {
  return <Main {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const setting = getSetting(req as NextApiRequest);

  const { client } = getClient();

  let cvs: CV[] = [];

  try {
    cvs = (await client.request(
      readItems("cvs" as any, {
        fields: ["name", "file"],
      })
    )) as CV[];
  } catch (error) {
    console.error('cv is not found');
  }

  return {
    props: {
      ...setting,
      cvs,
    },
  };
};
