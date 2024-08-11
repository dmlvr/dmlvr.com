import { Setting } from "./setting";

export type BlogProps = Setting & {
  posts?: PostType[];
  error?: string;
};

export type PostProps = Setting & {
  post?: PostType;
  error?: string;
  post_id: string;
};

export type PostType = {
  title: string;
  publication_date: string;
  excerpt: string;
  main_photo: string;
  id: string;
  content: string;
};
