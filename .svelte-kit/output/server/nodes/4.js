import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.uyvfsvRJ.js","_app/immutable/chunks/scheduler.8DbVFZvG.js","_app/immutable/chunks/index.GP9T9H_y.js","_app/immutable/chunks/each.B9WkaVOe.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/singletons.5ThikBkr.js","_app/immutable/chunks/logo1.mMqHU77b.js"];
export const stylesheets = ["_app/immutable/assets/4.zpJKtCAG.css"];
export const fonts = [];
