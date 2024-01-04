import * as universal from '../entries/pages/about/_page.ts.js';
import * as server from '../entries/pages/about/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.uN18ufL_.js","_app/immutable/chunks/scheduler.8DbVFZvG.js","_app/immutable/chunks/index.GP9T9H_y.js","_app/immutable/chunks/each.B9WkaVOe.js"];
export const stylesheets = [];
export const fonts = [];
