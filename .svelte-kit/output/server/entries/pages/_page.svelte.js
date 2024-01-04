import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
import { l as logo1 } from "../../chunks/logo1.js";
const logo = "/_app/immutable/assets/logo.bwLuQSmC.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1dq6ppu_START -->${$$result.title = `<title>WebDev</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1dq6ppu_END -->`, ""}  <img alt="The project logo"${add_attribute("src", logo, 0)}> <img alt="The project logo"${add_attribute("src", logo1, 0)}> <textarea rows="4" cols="8" readonly>

((̲̅ ̲̅(̲̅SVELTE)( ̲̅((> BoomBox ♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪ 


__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡̡._


</textarea> <h1 data-svelte-h="svelte-qylxdd"><pre><a href="https://wurdle.jessejesse.com/">CO-OP Wurdle</a>  </pre></h1>`;
});
export {
  Page as default
};
