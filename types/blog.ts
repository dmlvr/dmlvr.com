import { Setting } from "./setting";

export type BlogProps = Setting & {
  posts?: Post[];
  error?: string;
};

export type Post = {
  title: string;
  publication_date: string;
  excerpt: string;
  main_photo: string;
  id: string;
};
