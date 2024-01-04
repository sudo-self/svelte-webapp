import { kv } from "@vercel/kv";

export async function load({ locals }) {
  return {
    cart: await kv.get<{ id: string; quantity: number }[]>(locals.user);
  }
}