let t,e=!1;const n="undefined"!=typeof window?window:{},l=n.CSS,o=n.document||{head:{}},s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},r=t=>Promise.resolve(t),c=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),i=new WeakMap,a=t=>"sc-"+t,u={},f=t=>"object"==(t=typeof t)||"function"===t,p=(t,e,...n)=>{let l=null,o=!1,s=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!f(l))&&(l+=""),o&&s?r[r.length-1].o+=l:r.push(o?m(null,l):l),s=o)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}if("function"==typeof t)return t(null===e?{}:e,r,d);const i=m(t,null);return i.s=e,r.length>0&&(i.u=r),i},m=(t,e)=>({t:0,p:t,o:e,$:null,u:null,s:null}),$={},d={forEach:(t,e)=>t.map(y).forEach(e),map:(t,e)=>t.map(y).map(e).map(h)},y=t=>({vattrs:t.s,vchildren:t.u,vkey:t.h,vname:t._,vtag:t.p,vtext:t.o}),h=t=>{const e=m(t.vtag,t.vtext);return e.s=t.vattrs,e.u=t.vchildren,e.h=t.vkey,e._=t.vname,e},w=(t,e,l,o,r,c)=>{if(l!==o){let a=N(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,n=_(l),s=_(o);e.remove(...n.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!n.includes(t)))}else if("style"===e){for(const e in l)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)l&&o[e]===l[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if("ref"===e)o&&o(t);else if(a||"o"!==e[0]||"n"!==e[1]){const n=f(o);if((a||n&&null!==o)&&!r)try{if(t.tagName.includes("-"))t[e]=o;else{let n=null==o?"":o;"list"===e?a=!1:null!=l&&t[e]==n||(t[e]=n)}}catch(i){}null==o||!1===o?t.removeAttribute(e):(!a||4&c||r)&&!n&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):N(n,u)?u.slice(2):u[2]+e.slice(3),l&&s.rel(t,e,l,!1),o&&s.ael(t,e,o,!1)}},b=/\s/,_=t=>t?t.split(b):[],v=(t,e,n,l)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,s=t&&t.s||u,r=e.s||u;for(l in s)l in r||w(o,l,s[l],void 0,n,e.t);for(l in r)w(o,l,s[l],r[l],n,e.t)},j=(e,n,l)=>{let s,r,c=n.u[l],i=0;if(null!==c.o)s=c.$=o.createTextNode(c.o);else if(s=c.$=o.createElement(c.p),v(null,c,!1),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),c.u)for(i=0;i<c.u.length;++i)r=j(e,c,i),r&&s.appendChild(r);return s},g=(t,e,n,l,o,s)=>{let r,c=t;for(;o<=s;++o)l[o]&&(r=j(null,n,o),r&&(l[o].$=r,c.insertBefore(r,e)))},M=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(o=l.$,U(l),o.remove())},S=(t,e)=>t.p===e.p,k=(t,e)=>{const n=e.$=t.$,l=t.u,o=e.u,s=e.o;null===s?(v(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],p=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==p?p=l[--u]:S(i,f)?(k(i,f),i=e[++s],f=l[++r]):S(a,p)?(k(a,p),a=e[--c],p=l[--u]):S(i,p)?(k(i,p),t.insertBefore(i.$,a.$.nextSibling),i=e[++s],p=l[--u]):S(a,f)?(k(a,f),t.insertBefore(a.$,i.$),a=e[--c],f=l[++r]):(o=j(e&&e[r],n,r),f=l[++r],o&&i.$.parentNode.insertBefore(o,i.$));s>c?g(t,null==l[u+1]?null:l[u+1].$,n,l,r,u):r>u&&M(e,s,c)})(n,l,e,o):null!==o?(null!==t.o&&(n.textContent=""),g(n,null,e,o,0,o.length-1)):null!==l&&M(l,0,l.length-1)):t.o!==s&&(n.data=s)},U=t=>{t.s&&t.s.ref&&t.s.ref(null),t.u&&t.u.map(U)},L=(t,e)=>{e&&!t.v&&e["s-p"].push(new Promise(e=>t.v=e))},O=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t.j,l=()=>R(t,n,e);return L(t,t.g),E(void 0,()=>Z(l))},R=(e,n,l)=>{const s=e.M,r=s["s-rc"];l&&(t=>{const e=t.S,n=t.M,l=e.t,s=((t,e)=>{let n=a(e.k),l=G.get(n);if(t=11===t.nodeType?t:o,l)if("string"==typeof l){let e,s=i.get(t=t.head||t);s||i.set(t,s=new Set),s.has(n)||(e=o.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s"))})(e),((e,n)=>{const l=e.M,o=e.U||m(null,null),s=(t=>t&&t.p===$)(n)?n:p(null,null,n);s.p=null,s.t|=4,e.U=s,s.$=o.$=l,t=l["s-sc"],k(o,s)})(e,C(n)),e.t&=-17,e.t|=2,r&&(r.map(t=>t()),s["s-rc"]=void 0);{const t=s["s-p"],n=()=>P(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},C=t=>{try{t=t.render()}catch(e){V(e)}return t},P=t=>{const e=t.M,n=t.g;64&t.t||(t.t|=64,A(e),t.L(e),n||x()),t.v&&(t.v(),t.v=void 0),512&t.t&&Y(()=>O(t,!1)),t.t&=-517},x=()=>{A(o.documentElement),Y(()=>(t=>{const e=new CustomEvent("appload",{detail:{namespace:"s-promo"}});return t.dispatchEvent(e),e})(n))},E=(t,e)=>t&&t.then?t.then(e):e(),A=t=>t.classList.add("hydrated"),T=(t,e,n)=>{if(e.O){const l=Object.entries(e.O),o=t.prototype;if(l.map(([t,[e]])=>{(31&e||2&n&&32&e)&&Object.defineProperty(o,t,{get(){return((t,e)=>q(this).R.get(e))(0,t)},set(e){((t,e,n)=>{const l=q(this),o=l.R.get(e),s=l.t,r=l.j;n=(t=>(null==t||f(t),t))(n),8&s&&void 0!==o||n===o||(l.R.set(e,n),r&&2==(18&s)&&O(l,!1))})(0,t,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){s.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},F=(t,e={})=>{const l=[],r=e.exclude||[],i=n.customElements,u=o.head,f=u.querySelector("meta[charset]"),p=o.createElement("style"),m=[];let $,d=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",o.baseURI).href,t.map(t=>t[1].map(e=>{const n={t:e[0],k:e[1],O:e[2],C:e[3]};n.O=e[2];const o=n.k,u=class extends HTMLElement{constructor(t){super(t),H(t=this,n)}connectedCallback(){$&&(clearTimeout($),$=null),d?m.push(this):s.jmp(()=>(t=>{if(0==(1&s.t)){const e=q(t),n=e.S,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){L(e,e.g=n);break}}n.O&&Object.entries(n.O).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=D(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(T(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){V(i)}e.t&=-9,t()}const t=a(n.k);if(!G.has(t)&&o.style){const e=()=>{};((t,e,n)=>{let l=G.get(t);c&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,G.set(t,l)})(t,o.style,!!(1&n.t)),e()}}const s=e.g,r=()=>O(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this))}disconnectedCallback(){s.jmp(()=>{})}forceUpdate(){(()=>{{const t=q(this);t.M.isConnected&&2==(18&t.t)&&O(t,!1)}})()}componentOnReady(){return q(this).P}};n.A=t[0],r.includes(o)||i.get(o)||(l.push(o),i.define(o,T(u,n,1)))})),p.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),u.insertBefore(p,f?f.nextSibling:u.firstChild),d=!1,m.length?m.map(t=>t.connectedCallback()):s.jmp(()=>$=setTimeout(x,30))},W=new WeakMap,q=t=>W.get(t),B=(t,e)=>W.set(e.j=t,e),H=(t,e)=>{const n={t:0,M:t,S:e,R:new Map};return n.P=new Promise(t=>n.L=t),t["s-p"]=[],t["s-rc"]=[],W.set(t,n)},N=(t,e)=>e in t,V=t=>console.error(t),z=new Map,D=t=>{const e=t.k.replace(/-/g,"_"),n=t.A,l=z.get(n);return l?l[e]:__sc_import_s_promo(`./${n}.entry.js`).then(t=>(z.set(n,t),t[e]),V)},G=new Map,I=[],J=[],K=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&s.t?Y(X):s.raf(X))},Q=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){V(e)}t.length=0},X=()=>{Q(I),Q(J),(e=I.length>0)&&s.raf(X)},Y=t=>r().then(t),Z=K(J,!0),tt=()=>l&&l.supports&&l.supports("color","var(--c)")?r():__sc_import_s_promo("./p-69b85284.js").then(()=>(s.T=n.__cssshim)?(!1).i():0),et=()=>{s.T=n.__cssshim;const t=Array.from(o.querySelectorAll("script")).find(t=>/\/s-promo(\.esm)?\.js($|\?|#)/.test(t.src)||"s-promo"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,n.location.href)).href,nt(e.resourcesUrl,t),n.customElements?r(e):__sc_import_s_promo("./p-2347dcb6.js").then(()=>e))},nt=(t,e)=>{try{n.__sc_import_s_promo=Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;n.__sc_import_s_promo=l=>{const r=new URL(l,t).href;let c=s.get(r);if(!c){const t=o.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.__sc_import_s_promo.m = m;`],{type:"application/javascript"})),c=new Promise(e=>{t.onload=()=>{e(n.__sc_import_s_promo.m),t.remove()}}),s.set(r,c),o.head.appendChild(t)}return c}}};export{tt as a,F as b,p as h,et as p,B as r}