import { DIRECTUS_API_URL } from '@/const';
import { createDirectus, rest, authentication } from '@directus/sdk';

export function getClient() {
  let isClient = false;

  const STATIC_TOKEN = process.env.DIRECTUS_TOKEN ?? null

  const client = createDirectus(DIRECTUS_API_URL).with(authentication()).with(rest());

  if (STATIC_TOKEN) {
    client.setToken(STATIC_TOKEN);
    isClient = true;
  }

  return { client, isClient };
}
