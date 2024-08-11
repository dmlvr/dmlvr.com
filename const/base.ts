export const DIRECTUS_API_URL =
  process.env.DIRECTUS_API_URL ?? "http://localhost:3462";
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "http://localhost:3000";
export const YM_COUNTER = process.env.NEXT_PUBLIC_YM_COUNTER
  ? Number(process.env.NEXT_PUBLIC_YM_COUNTER)
  : false;
