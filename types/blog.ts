import { string } from "zod";
import { Setting } from "./setting";

export type BlogProps = Setting & {
  posts?: PostType[];
  error?: string;
};

export type PostProps = Setting & {
  post: PostType;
  error?: string;
  post_id: string;
};

export type PostType = {
  title: string;
  publication_date: string;
  preview: string;
  main_photo: string;
  id: string;
  content: string;
  gallery: PostGalleryType[];
};

export type PostGalleryType = {
  directus_files_id: {
    id: string;
    width: number;
    height: number;
  };
};
