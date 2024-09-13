import type { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "@/utils";
import { updateItem } from "@directus/sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Метод не разрешен" });
  }

  if (req.method === "POST") {
    const { id, likes } = req.body;

    if (!id || !likes) {
      res.status(403).json({ error: "id and likes is required" });
    }

    const { client, isClient } = getClient();

    if (!isClient) {
      res.status(403).json({ error: "Unautorized" });
    }

    const newLikes = await client.request(
      updateItem("Posts" as any, id, {
        likes,
      })
    );

    if (newLikes) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ success: false });
    }

    try {
    } catch (error) {}
  }
}
