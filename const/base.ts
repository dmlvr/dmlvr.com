export const DIRECTUS_API_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_API_URL ?? "https://dmlvr.com/directus";
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "https://dmlvr.com";
export const YM_COUNTER = process.env.NEXT_PUBLIC_YM_COUNTER
  ? Number(process.env.NEXT_PUBLIC_YM_COUNTER)
  : false;
