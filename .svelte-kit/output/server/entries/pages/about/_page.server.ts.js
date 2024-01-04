import { kv } from "@vercel/kv";
async function load({ locals }) {
  return {
    cart: await kv.get(locals.user)
  };
}
export {
  load
};
