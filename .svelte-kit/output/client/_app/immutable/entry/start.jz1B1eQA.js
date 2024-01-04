import{o as Se,t as xe}from"../chunks/scheduler.8DbVFZvG.js";import{S as st,a as it,b as ct,H as q,N as K,r as ne,o as ke,P as Ae,f as Xe,g as Oe,c as de,i as Pe,s as Te,d as B,e as M,h as Ze,j as gt}from"../chunks/singletons.5ThikBkr.js";import{U as lt,N as mt,P as yt,a as vt,b as ft,H as wt,p as bt,u as Et}from"../chunks/parse.RrI1B0B4.js";new URL("sveltekit-internal://");function St(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function xt(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function $e({href:e}){return e.split("#")[0]}const At=["href","pathname","search","toString","toJSON"];function Ot(e,r,i){const s=new URL(e);Object.defineProperty(s,"searchParams",{value:new Proxy(s.searchParams,{get(l,d){if(d==="get"||d==="getAll"||d==="has")return h=>(i(h),l[d](h));r();const v=Reflect.get(l,d);return typeof v=="function"?v.bind(l):v}}),enumerable:!0,configurable:!0});for(const l of At)Object.defineProperty(s,l,{get(){return r(),e[l]},enumerable:!0,configurable:!0});return Pt(s),s}function Pt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json",Rt=".html__data.json";function It(e){return e.endsWith(".html")?e.replace(/\.html$/,Rt):e.replace(/\/$/,"")+$t}function jt(...e){let r=5381;for(const i of e)if(typeof i=="string"){let s=i.length;for(;s;)r=r*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let l=s.length;for(;l;)r=r*33^s[--l]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const ut=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:r?.method||"GET")!=="GET"&&re.delete(Ce(e)),ut(e,r));const re=new Map;function Lt(e){const r=atob(e),i=new Uint8Array(r.length);for(let s=0;s<r.length;s++)i[s]=r.charCodeAt(s);return i.buffer}function Nt(e,r){const i=Ce(e,r),s=document.querySelector(i);if(s?.textContent){let{body:l,...d}=JSON.parse(s.textContent);const v=s.getAttribute("data-ttl");return v&&re.set(i,{body:l,init:d,ttl:1e3*Number(v)}),s.getAttribute("data-b64")!==null&&(l=Lt(l)),Promise.resolve(new Response(l,d))}return window.fetch(e,r)}function Ut(e,r,i){if(re.size>0){const s=Ce(e,i),l=re.get(s);if(l){if(performance.now()<l.ttl&&["default","force-cache","only-if-cached",void 0].includes(i?.cache))return new Response(l.body,l.init);re.delete(s)}}return window.fetch(r,i)}function Ce(e,r){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r?.headers||r?.body){const l=[];r.headers&&l.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&l.push(r.body),s+=`[data-hash="${jt(...l)}"]`}return s}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ct(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ft(e).map(s=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(l)return r.push({name:l[1],matcher:l[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return r.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const v=s.split(/\[(.+?)\](?!\])/);return"/"+v.map((b,c)=>{if(c%2){if(b.startsWith("x+"))return Re(String.fromCharCode(parseInt(b.slice(2),16)));if(b.startsWith("u+"))return Re(String.fromCharCode(...b.slice(2).split("-").map(k=>parseInt(k,16))));const _=Tt.exec(b);if(!_)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,L,O,P]=_;return r.push({name:O,matcher:P,optional:!!w,rest:!!L,chained:L?c===1&&v[0]==="":!1}),L?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Re(b)}).join("")}).join("")}/?$`),params:r}}function Dt(e){return!/^\([^)]+\)$/.test(e)}function Ft(e){return e.slice(1).split("/").filter(Dt)}function Mt(e,r,i){const s={},l=e.slice(1),d=l.filter(h=>h!==void 0);let v=0;for(let h=0;h<r.length;h+=1){const b=r[h];let c=l[h-v];if(b.chained&&b.rest&&v&&(c=l.slice(h-v,h+1).filter(_=>_).join("/"),v=0),c===void 0){b.rest&&(s[b.name]="");continue}if(!b.matcher||i[b.matcher](c)){s[b.name]=c;const _=r[h+1],w=l[h+1];_&&!_.rest&&_.optional&&w&&b.chained&&(v=0),!_&&!w&&Object.keys(s).length===d.length&&(v=0);continue}if(b.optional&&b.chained){v++;continue}return}if(!v)return s}function Re(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ht({nodes:e,server_loads:r,dictionary:i,matchers:s}){const l=new Set(r);return Object.entries(i).map(([h,[b,c,_]])=>{const{pattern:w,params:L}=Ct(h),O={id:h,exec:P=>{const k=w.exec(P);if(k)return Mt(k,L,s)},errors:[1,..._||[]].map(P=>e[P]),layouts:[0,...c||[]].map(v),leaf:d(b)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function d(h){const b=h<0;return b&&(h=~h),[b,e[h]]}function v(h){return h===void 0?h:[l.has(h),e[h]]}}function De(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function Ie(e,r,i=JSON.stringify){const s=i(r);try{sessionStorage[e]=s}catch{}}class je extends Error{constructor(r,i){super(r),this.name="DevalueError",this.path=i.join("")}}function Qe(e){return Object(e)!==e}const Vt=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qt(e){const r=Object.getPrototypeOf(e);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===Vt}function Bt(e){return Object.prototype.toString.call(e).slice(8,-1)}function Gt(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function X(e){let r="",i=0;const s=e.length;for(let l=0;l<s;l+=1){const d=e[l],v=Gt(d);v&&(r+=e.slice(i,l)+v,i=l+1)}return`"${i===0?e:r+e.slice(i)}"`}function Jt(e,r){const i=[],s=new Map,l=[];for(const c in r)l.push({key:c,fn:r[c]});const d=[];let v=0;function h(c){if(typeof c=="function")throw new je("Cannot stringify a function",d);if(s.has(c))return s.get(c);if(c===void 0)return lt;if(Number.isNaN(c))return mt;if(c===1/0)return yt;if(c===-1/0)return vt;if(c===0&&1/c<0)return ft;const _=v++;s.set(c,_);for(const{key:L,fn:O}of l){const P=O(c);if(P)return i[_]=`["${L}",${h(P)}]`,_}let w="";if(Qe(c))w=Le(c);else switch(Bt(c)){case"Number":case"String":case"Boolean":w=`["Object",${Le(c)}]`;break;case"BigInt":w=`["BigInt",${c}]`;break;case"Date":w=`["Date","${c.toISOString()}"]`;break;case"RegExp":const{source:O,flags:P}=c;w=P?`["RegExp",${X(O)},"${P}"]`:`["RegExp",${X(O)}]`;break;case"Array":w="[";for(let k=0;k<c.length;k+=1)k>0&&(w+=","),k in c?(d.push(`[${k}]`),w+=h(c[k]),d.pop()):w+=wt;w+="]";break;case"Set":w='["Set"';for(const k of c)w+=`,${h(k)}`;w+="]";break;case"Map":w='["Map"';for(const[k,D]of c)d.push(`.get(${Qe(k)?Le(k):"..."})`),w+=`,${h(k)},${h(D)}`;w+="]";break;default:if(!qt(c))throw new je("Cannot stringify arbitrary non-POJOs",d);if(Object.getOwnPropertySymbols(c).length>0)throw new je("Cannot stringify POJOs with symbolic keys",d);if(Object.getPrototypeOf(c)===null){w='["null"';for(const k in c)d.push(`.${k}`),w+=`,${X(k)},${h(c[k])}`,d.pop();w+="]"}else{w="{";let k=!1;for(const D in c)k&&(w+=","),k=!0,d.push(`.${D}`),w+=`${X(D)}:${h(c[D])}`,d.pop();w+="}"}}return i[_]=w,_}const b=h(e);return b<0?`${b}`:`[${i.join(",")}]`}function Le(e){const r=typeof e;return r==="string"?X(e):e instanceof String?X(e.toString()):e===void 0?lt.toString():e===0&&1/e<0?ft.toString():r==="bigint"?`["BigInt","${e}"]`:String(e)}const dt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...dt];const Kt=new Set([...dt]);[...Kt];function Yt(e){return e.filter(r=>r!=null)}class _e{constructor(r,i){this.status=r,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(r,i){this.status=r,this.location=i}}class Fe extends Error{constructor(r,i,s){super(s),this.status=r,this.text=i}}const zt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function pe(e){return e instanceof _e||e instanceof Fe?e.status:500}function Xt(e){return e instanceof Fe?e.text:"Internal Error"}const Y=De(st)??{},ae=De(it,bt)??{},oe=De(ct)??{},tt=history.pushState,he=history.replaceState;function Ne(e){Y[e]=Te()}function nt(e,r){let i=e+1;for(;Y[i];)delete Y[i],i+=1;for(i=r+1;oe[i];)delete oe[i],i+=1}function W(e){return location.href=e.href,new Promise(()=>{})}function at(){}function Zt(e,r){const i=Ht(e),s=e.nodes[0],l=e.nodes[1];s(),l();const d=document.documentElement,v=[],h=[];let b=null;const c={before_navigate:[],on_navigate:[],after_navigate:[]};let _={branch:[],error:null,url:null},w=!1,L=!1,O=!0,P=!1,k=!1,D=!1,Z=!1,se=!1,H,j=history.state?.[q],F=history.state?.[K];j||(j=F=Date.now(),he.call(history,{...history.state,[q]:j,[K]:F},"",location.href));const ge=Y[j];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let R,z,me;async function Me(){if(await(me||=Promise.resolve()),!me)return;me=null;const n=ee(_.url,!0);b=null;const t=z={},a=n&&await we(n);t===z&&(a&&(a.type==="redirect"?await ie(new URL(a.location,_.url).href,{},1,t):(a.props.page!==void 0&&(R=a.props.page),H.$set(a.props))),v.length=0)}function He(n){h.some(t=>t?.snapshot)&&(oe[n]=h.map(t=>t?.snapshot?.capture()))}function Ve(n){oe[n]?.forEach((t,a)=>{h[a]?.snapshot?.restore(t)})}function qe(){Ne(j),Ie(st,Y),He(F),Ie(ct,oe),Ie(it,ae,Jt)}async function ie(n,t,a,o){return fe({type:"goto",url:ne(n),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,redirect_count:a,state:t.state,nav_token:o,accept:()=>{t.invalidateAll&&(se=!0)}})}async function Be(n){return b={id:n.id,promise:we(n).then(t=>(t.type==="loaded"&&t.state.error&&(b=null),t))},b.promise}async function ce(n){const t=i.find(a=>a.exec(Ye(n)));t&&await Promise.all([...t.layouts,t.leaf].map(a=>a?.[1]()))}function Ge(n){_=n.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),R=n.props.page,H=new e.root({target:r,props:{...n.props,stores:B,components:h},hydrate:!0}),Ve(F);const a={from:null,to:{params:_.params,route:{id:_.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};c.after_navigate.forEach(o=>o(a)),L=!0}async function Q({url:n,params:t,branch:a,status:o,error:f,route:u,form:p}){let m="never";for(const x of a)x?.slash!==void 0&&(m=x.slash);n.pathname=St(n.pathname,m),n.search=n.search;const E={type:"loaded",state:{url:n,params:t,branch:a,error:f,route:u},props:{constructors:Yt(a).map(x=>x.node.component),page:R}};p!==void 0&&(E.props.form=p);let y={},N=!R,U=0;for(let x=0;x<Math.max(a.length,_.branch.length);x+=1){const I=a[x],A=_.branch[x];I?.data!==A?.data&&(N=!0),I&&(y={...y,...I.data},N&&(E.props[`data_${U}`]=y),U+=1)}return(!_.url||n.href!==_.url.href||_.error!==f||p!==void 0&&p!==R.form||N)&&(E.props.page={error:f,params:t,route:{id:u?.id??null},state:{},status:o,url:new URL(n),form:p??null,data:N?y:R.data}),E}async function ye({loader:n,parent:t,url:a,params:o,route:f,server_data_node:u}){let p=null,m=!0;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},y=await n();if(y.universal?.load){let N=function(...g){for(const x of g){const{href:I}=new URL(x,a);E.dependencies.add(I)}};const U={route:new Proxy(f,{get:(g,x)=>(m&&(E.route=!0),g[x])}),params:new Proxy(o,{get:(g,x)=>(m&&E.params.add(x),g[x])}),data:u?.data??null,url:Ot(a,()=>{m&&(E.url=!0)},g=>{m&&E.search_params.add(g)}),async fetch(g,x){let I;g instanceof Request?(I=g.url,x={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...x}):I=g;const A=new URL(I,a);return m&&N(A.href),A.origin===a.origin&&(I=A.href.slice(a.origin.length)),L?Ut(I,A.href,x):Nt(I,x)},setHeaders:()=>{},depends:N,parent(){return m&&(E.parent=!0),t()},untrack(g){m=!1;try{return g()}finally{m=!0}}};p=await y.universal.load.call(null,U)??null}return{node:y,loader:n,server:u,universal:y.universal?.load?{type:"data",data:p,uses:E}:null,data:p??u?.data??null,slash:M&&(a.pathname===M||a.pathname===M+"/")?"always":y.universal?.trailingSlash??u?.slash}}function Je(n,t,a,o,f,u){if(se)return!0;if(!f)return!1;if(f.parent&&n||f.route&&t||f.url&&a)return!0;for(const p of f.search_params)if(o.has(p))return!0;for(const p of f.params)if(u[p]!==_.params[p])return!0;for(const p of f.dependencies)if(v.some(m=>m(new URL(p))))return!0;return!1}function ve(n,t){return n?.type==="data"?n:n?.type==="skip"?t??null:null}function ht(n,t){if(!n)return new Set(t.searchParams.keys());const a=new Set([...n.searchParams.keys(),...t.searchParams.keys()]);for(const o of a){const f=n.searchParams.getAll(o),u=t.searchParams.getAll(o);f.every(p=>u.includes(p))&&u.every(p=>f.includes(p))&&a.delete(o)}return a}async function we({id:n,invalidating:t,url:a,params:o,route:f}){if(b?.id===n)return b.promise;const{errors:u,layouts:p,leaf:m}=f,E=[...p,m];u.forEach(S=>S?.().catch(()=>{})),E.forEach(S=>S?.[1]().catch(()=>{}));let y=null;const N=_.url?n!==_.url.pathname+_.url.search:!1,U=_.route?f.id!==_.route.id:!1,g=ht(_.url,a);let x=!1;const I=E.map((S,$)=>{const T=_.branch[$],C=!!S?.[0]&&(T?.loader!==S[1]||Je(x,U,N,g,T.server?.uses,o));return C&&(x=!0),C});if(I.some(Boolean)){try{y=await rt(a,I)}catch(S){return le({status:pe(S),error:await te(S,{url:a,params:o,route:{id:f.id}}),url:a,route:f})}if(y.type==="redirect")return y}const A=y?.nodes;let V=!1;const G=E.map(async(S,$)=>{if(!S)return;const T=_.branch[$],C=A?.[$];if((!C||C.type==="skip")&&S[1]===T?.loader&&!Je(V,U,N,g,T.universal?.uses,o))return T;if(V=!0,C?.type==="error")throw C;return ye({loader:S[1],url:a,params:o,route:f,parent:async()=>{const be={};for(let Ee=0;Ee<$;Ee+=1)Object.assign(be,(await G[Ee])?.data);return be},server_data_node:ve(C===void 0&&S[0]?{type:"skip"}:C??null,S[0]?T?.server:void 0)})});for(const S of G)S.catch(()=>{});const J=[];for(let S=0;S<E.length;S+=1)if(E[S])try{J.push(await G[S])}catch($){if($ instanceof et)return{type:"redirect",location:$.location};let T=pe($),C;if(A?.includes($))T=$.status??T,C=$.error;else if($ instanceof _e)C=$.body;else{if(await B.updated.check())return await W(a);C=await te($,{params:o,url:a,route:{id:f.id}})}const ue=await Ke(S,J,u);return ue?await Q({url:a,params:o,branch:J.slice(0,ue.idx).concat(ue.node),status:T,error:C,route:f}):await We(a,{id:f.id},C,T)}else J.push(void 0);return await Q({url:a,params:o,branch:J,status:200,error:null,route:f,form:t?void 0:null})}async function Ke(n,t,a){for(;n--;)if(a[n]){let o=n;for(;!t[o];)o-=1;try{return{idx:o+1,node:{node:await a[n](),loader:a[n],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:n,error:t,url:a,route:o}){const f={};let u=null;if(e.server_loads[0]===0)try{const y=await rt(a,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;u=y.nodes[0]??null}catch{(a.origin!==ke||a.pathname!==location.pathname||w)&&await W(a)}const m=await ye({loader:s,url:a,params:f,route:o,parent:()=>Promise.resolve({}),server_data_node:ve(u)}),E={node:await l(),loader:l,universal:null,server:null,data:null};return await Q({url:a,params:f,branch:[m,E],status:n,error:t,route:null})}function ee(n,t){if(Pe(n,M))return;const a=Ye(n.pathname);for(const o of i){const f=o.exec(a);if(f)return{id:n.pathname+n.search,invalidating:t,route:o,params:kt(f),url:n}}}function Ye(n){return xt(n.slice(M.length)||"/")}function ze({url:n,type:t,intent:a,delta:o}){let f=!1;const u=ot(_,a,n,t);o!==void 0&&(u.navigation.delta=o);const p={...u.navigation,cancel:()=>{f=!0,u.reject(new Error("navigation was cancelled"))}};return k||c.before_navigate.forEach(m=>m(p)),f?null:u}async function fe({type:n,url:t,popped:a,keepfocus:o,noscroll:f,replace_state:u,state:p={},redirect_count:m=0,nav_token:E={},accept:y=at,block:N=at}){const U=ee(t,!1),g=ze({url:t,type:n,delta:a?.delta,intent:U});if(!g){N();return}const x=j,I=F;y(),k=!0,L&&B.navigating.set(g.navigation),z=E;let A=U&&await we(U);if(!A){if(Pe(t,M))return await W(t);A=await We(t,{id:null},await te(new Fe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=U?.url||t,z!==E)return g.reject(new Error("navigation was aborted")),!1;if(A.type==="redirect")if(m>=20)A=await le({status:500,error:await te(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(A.location,t).href,{},m+1,E),!1;else A.props.page.status>=400&&await B.updated.check()&&await W(t);if(v.length=0,se=!1,P=!0,Ne(x),He(I),A.props.page.url.pathname!==t.pathname&&(t.pathname=A.props.page.url.pathname),p=a?a.state:p,!a){const S=u?0:1,$={[q]:j+=S,[K]:F+=S};(u?he:tt).call(history,$,"",t),u||nt(j,F)}if(ae[j]=p,b=null,A.props.page.state=p,L){_=A.state,A.props.page&&(A.props.page.url=t);const S=(await Promise.all(c.on_navigate.map($=>$(g.navigation)))).filter($=>typeof $=="function");if(S.length>0){let $=function(){c.after_navigate=c.after_navigate.filter(T=>!S.includes(T))};S.push($),c.after_navigate.push(...S)}H.$set(A.props),Z=!0}else Ge(A);const{activeElement:V}=document;await xe();const G=a?a.scroll:f?Te():null;if(O){const S=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));G?scrollTo(G.x,G.y):S?S.scrollIntoView():scrollTo(0,0)}const J=document.activeElement!==V&&document.activeElement!==document.body;!o&&!J&&Ue(),O=!0,A.props.page&&(R=A.props.page),k=!1,n==="popstate"&&Ve(F),g.fulfil(void 0),c.after_navigate.forEach(S=>S(g.navigation)),B.navigating.set(null),P=!1}async function We(n,t,a,o){return n.origin===ke&&n.pathname===location.pathname&&!w?await le({status:o,error:a,url:n,route:t}):await W(n)}function _t(){let n;d.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(n),n=setTimeout(()=>{o(p,2)},20)});function t(u){o(u.composedPath()[0],1)}d.addEventListener("mousedown",t),d.addEventListener("touchstart",t,{passive:!0});const a=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(ce(p.target.href),a.unobserve(p.target))},{threshold:0});function o(u,p){const m=Xe(u,d);if(!m)return;const{url:E,external:y,download:N}=Oe(m,M);if(y||N)return;const U=de(m);if(!U.reload)if(p<=U.preload_data){const g=ee(E,!1);g&&Be(g)}else p<=U.preload_code&&ce(E.pathname)}function f(){a.disconnect();for(const u of d.querySelectorAll("a")){const{url:p,external:m,download:E}=Oe(u,M);if(m||E)continue;const y=de(u);y.reload||(y.preload_code===Ze.viewport&&a.observe(u),y.preload_code===Ze.eager&&ce(p.pathname))}}c.after_navigate.push(f),f()}function te(n,t){if(n instanceof _e)return n.body;const a=pe(n),o=Xt(n);return e.hooks.handleError({error:n,event:t,status:a,message:o})??{message:o}}return{after_navigate:n=>{Se(()=>(c.after_navigate.push(n),()=>{const t=c.after_navigate.indexOf(n);c.after_navigate.splice(t,1)}))},before_navigate:n=>{Se(()=>(c.before_navigate.push(n),()=>{const t=c.before_navigate.indexOf(n);c.before_navigate.splice(t,1)}))},on_navigate:n=>{Se(()=>(c.on_navigate.push(n),()=>{const t=c.on_navigate.indexOf(n);c.on_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(P||!L)&&(O=!1)},goto:(n,t={})=>(n=ne(n),n.origin!==ke?Promise.reject(new Error("goto: invalid URL")):ie(n,t,0)),invalidate:n=>{if(typeof n=="function")v.push(n);else{const{href:t}=new URL(n,location.href);v.push(a=>a.href===t)}return Me()},invalidate_all:()=>(se=!0,Me()),preload_data:async n=>{const t=ne(n),a=ee(t,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);const o=await Be(a);if(o.type==="redirect")return{type:o.type,location:o.location};const{status:f,data:u}=o.props.page??R;return{type:o.type,status:f,data:u}},preload_code:n=>ce(n),push_state:(n,t)=>{const a={[q]:j+=1,[K]:F,[Ae]:R.url.href};tt.call(history,a,"",ne(n)),R={...R,state:t},H.$set({page:R}),ae[j]=t,nt(j,F)},replace_state:(n,t)=>{const a={[q]:j,[K]:F,[Ae]:R.url.href};he.call(history,a,"",ne(n)),R={...R,state:t},H.$set({page:R}),ae[j]=t},apply_action:async n=>{if(n.type==="error"){const t=new URL(location.href),{branch:a,route:o}=_;if(!o)return;const f=await Ke(_.branch.length,a,o.errors);if(f){const u=await Q({url:t,params:_.params,branch:a.slice(0,f.idx).concat(f.node),status:n.status??500,error:n.error,route:o});_=u.state,H.$set(u.props),xe().then(Ue)}}else n.type==="redirect"?ie(n.location,{invalidateAll:!0},0):(H.$set({form:null,page:{...R,form:n.data,status:n.status}}),await xe(),H.$set({form:n.data}),n.type==="success"&&Ue())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(qe(),!k){const o=ot(_,void 0,null,"leave"),f={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation was cancelled"))}};c.before_navigate.forEach(u=>u(f))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&qe()}),navigator.connection?.saveData||_t(),d.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Xe(t.composedPath()[0],d);if(!a)return;const{url:o,external:f,target:u,download:p}=Oe(a,M);if(!o)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const m=de(a);if(!(a instanceof SVGAElement)&&o.protocol!==location.protocol&&!(o.protocol==="https:"||o.protocol==="http:")||p)return;if(f||m.reload){ze({url:o,type:"link"})?k=!0:t.preventDefault();return}const[y,N]=o.href.split("#");if(N!==void 0&&y===$e(location)){if(_.url.hash===o.hash){t.preventDefault(),a.ownerDocument.getElementById(N)?.scrollIntoView();return}if(D=!0,Ne(j),n(o),!m.replace_state)return;D=!1}t.preventDefault(),fe({type:"link",url:o,keepfocus:m.keepfocus,noscroll:m.noscroll,replace_state:m.replace_state??o.href===location.href})}),d.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),o=t.submitter;if((o?.formMethod||a.method)!=="get")return;const u=new URL(o?.hasAttribute("formaction")&&o?.formAction||a.action);if(Pe(u,M))return;const p=t.target,m=de(p);if(m.reload)return;t.preventDefault(),t.stopPropagation();const E=new FormData(p),y=o?.getAttribute("name");y&&E.append(y,o?.getAttribute("value")??""),u.search=new URLSearchParams(E).toString(),fe({type:"form",url:u,keepfocus:m.keepfocus,noscroll:m.noscroll,replace_state:m.replace_state??u.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[q]){const a=t.state[q];if(z={},a===j)return;const o=Y[a],f=ae[a]??{},u=new URL(t.state[Ae]??location.href),p=t.state[K],m=$e(location)===$e(_.url);if(p===F&&(Z||m)){n(u),Y[j]=Te(),o&&scrollTo(o.x,o.y),f!==R.state&&(R={...R,state:f},H.$set({page:R})),j=a;return}const y=a-j;await fe({type:"popstate",url:u,popped:{state:f,scroll:o,delta:y},accept:()=>{j=a,F=p},block:()=>{history.go(-y)},nav_token:z})}else if(!D){const a=new URL(location.href);n(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,he.call(history,{...history.state,[q]:++j,[K]:F},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&B.navigating.set(null)});function n(t){_.url=t,B.page.set({...R,url:t}),B.page.notify()}},_hydrate:async({status:n=200,error:t,node_ids:a,params:o,route:f,data:u,form:p})=>{w=!0;const m=new URL(location.href);({params:o={},route:f={id:null}}=ee(m,!1)||{});let E;try{const y=a.map(async(g,x)=>{const I=u[x];return I?.uses&&(I.uses=pt(I.uses)),ye({loader:e.nodes[g],url:m,params:o,route:f,parent:async()=>{const A={};for(let V=0;V<x;V+=1)Object.assign(A,(await y[V]).data);return A},server_data_node:ve(I)})}),N=await Promise.all(y),U=i.find(({id:g})=>g===f.id);if(U){const g=U.layouts;for(let x=0;x<g.length;x++)g[x]||N.splice(x,0,void 0)}E=await Q({url:m,params:o,branch:N,status:n,error:t,form:p,route:U??null})}catch(y){if(y instanceof et){await W(new URL(y.location,location.href));return}E=await le({status:pe(y),error:await te(y,{url:m,params:o,route:f}),url:m,route:f})}E.props.page&&(E.props.page.state={}),Ge(E)}}}async function rt(e,r){const i=new URL(e);i.pathname=It(e.pathname),e.pathname.endsWith("/")&&i.searchParams.append(Wt,"1"),i.searchParams.append(zt,r.map(l=>l?"1":"0").join(""));const s=await ut(i.href);if(!s.ok){let l;throw s.headers.get("content-type")?.includes("application/json")?l=await s.json():s.status===404?l="Not Found":s.status===500&&(l="Internal Error"),new _e(s.status,l)}return new Promise(async l=>{const d=new Map,v=s.body.getReader(),h=new TextDecoder;function b(_){return Et(_,{Promise:w=>new Promise((L,O)=>{d.set(w,{fulfil:L,reject:O})})})}let c="";for(;;){const{done:_,value:w}=await v.read();if(_&&!c)break;for(c+=!w&&c?`
`:h.decode(w);;){const L=c.indexOf(`
`);if(L===-1)break;const O=JSON.parse(c.slice(0,L));if(c=c.slice(L+1),O.type==="redirect")return l(O);if(O.type==="data")O.nodes?.forEach(P=>{P?.type==="data"&&(P.uses=pt(P.uses),P.data=b(P.data))}),l(O);else if(O.type==="chunk"){const{id:P,data:k,error:D}=O,Z=d.get(P);d.delete(P),D?Z.reject(b(D)):Z.fulfil(b(k))}}}})}function pt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Ue(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,i=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),i!==null?r.setAttribute("tabindex",i):r.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const l=[];for(let d=0;d<s.rangeCount;d+=1)l.push(s.getRangeAt(d));setTimeout(()=>{if(s.rangeCount===l.length){for(let d=0;d<s.rangeCount;d+=1){const v=l[d],h=s.getRangeAt(d);if(v.commonAncestorContainer!==h.commonAncestorContainer||v.startContainer!==h.startContainer||v.endContainer!==h.endContainer||v.startOffset!==h.startOffset||v.endOffset!==h.endOffset)return}s.removeAllRanges()}})}}}function ot(e,r,i,s){let l,d;const v=new Promise((b,c)=>{l=b,d=c});return v.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:i&&{params:r?.params??null,route:{id:r?.route?.id??null},url:i},willUnload:!r,type:s,complete:v},fulfil:l,reject:d}}async function nn(e,r,i){const s=Zt(e,r);gt({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{nn as start};
