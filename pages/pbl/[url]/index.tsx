import { GetServerSideProps } from "next";
import React from "react";

export default function Page() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps<{}> = async ({
  params,
}) => {
  if (!params || typeof params.url !== "string") {
    return {
      notFound: true,
    };
  }

  const { url } = params;

  try {
    const decodedUrl = Buffer.from(url, "base64url").toString("utf-8");

    return {
      redirect: {
        destination: decodedUrl,
        permanent: true,
      },
    };
  } catch (err) {
    console.error("Failed to decode base64url:", err);
    return {
      notFound: true,
    };
  }

};
