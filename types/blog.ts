import { Setting } from "./setting"

export type BlogProps = Setting & {
  posts?: Post[]; // массив постов
  error?: string; // строка ошибки
}

export type Post = {
  title: string,
  status: string,
  content: string,
  publication_date: string
}