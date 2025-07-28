import { GetServerSideProps } from "next";
import React from "react";

function Page() {
  return <></>;
}

export default Page;

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return {
    notFound: true,
  };
};
