import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const gif = "/_app/immutable/assets/123.T8MiM4Af.gif";
const logo22 = "/_app/immutable/assets/logo22.EGLxqhKW.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1dq6ppu_START -->${$$result.title = `<title>WebDev</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1dq6ppu_END -->`, ""} <div>${each(data.cart, ({ id, quantity }) => {
    return `<div>${escape(id)} - ${escape(quantity)}</div>`;
  })}</div>  <img alt="The project logo"${add_attribute("src", gif, 0)}> <img alt="The project logo"${add_attribute("src", logo22, 0)}>`;
});
export {
  Page as default
};
