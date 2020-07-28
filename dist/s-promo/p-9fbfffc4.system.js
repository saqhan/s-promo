var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{o(n.next(e))}catch(r){i(r)}}function l(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(s,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="s-promo";var a;var i=false;var s=false;var l=typeof window!=="undefined"?window:{};var o=l.CSS;var f=l.document||{head:{}};var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var c=function(e){return Promise.resolve(e)};var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v="{visibility:hidden}.hydrated{visibility:inherit}";var m=function(e,r){if(r===void 0){r=""}{return function(){return}}};var p=function(e,r){{return function(){return}}};var d=new WeakMap;var h=function(e,r,t){var n=de.get(e);if($&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}de.set(e,n)};var g=function(e,r,t,n){var a=b(r.$tagName$);var i=de.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var s=d.get(e);var l=void 0;if(!s){d.set(e,s=new Set)}if(!s.has(a)){{if(u.$cssShim$){l=u.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=f.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var y=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=m("attachStyles",r.$tagName$);var i=g(t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h");if(n&2){t.classList.add(i+"-s")}}a()};var b=function(e,r){return"sc-"+e};var w={};var _=function(e){return e!=null};var S=function(e){e=typeof e;return e==="object"||e==="function"};var x=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var R=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var l=[];var o=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!S(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?E(null,a):a)}s=i}}};o(t);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,l,N)}var u=E(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}return u}));var E=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var j={};var C=function(e){return e&&e.$tag$===j};var N={forEach:function(e,r){return e.map(k).forEach(r)},map:function(e,r){return e.map(k).map(r).map(M)}};var k=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var M=function(e){var r=E(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var L=function(e,r,t,n,a,i){if(t!==n){var s=$e(e,r);var o=r.toLowerCase();if(r==="class"){var f=e.classList;var c=P(t);var $=P(n);f.remove.apply(f,c.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!c.includes(e)})))}else if(r==="style"){{for(var v in t){if(!n||n[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in n){if(!t||n[v]!==t[v]){if(v.includes("-")){e.style.setProperty(v,n[v])}else{e.style[v]=n[v]}}}}else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if($e(l,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){u.rel(e,r,t,false)}if(n){u.ael(e,r,n,false)}}else{var m=S(n);if((s||m&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var p=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=p){e[r]=p}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!m){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var A=/\s/;var P=function(e){return!e?[]:e.split(A)};var U=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||w;var s=r.$attrs$||w;{for(n in i){if(!(n in s)){L(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){L(a,n,i[n],s[n],t,r.$flags$)}};var O=function(e,r,t,n){var s=r.$children$[t];var l=0;var o;var u;if(s.$text$!==null){o=s.$elm$=f.createTextNode(s.$text$)}else{o=s.$elm$=f.createElement(s.$tag$);{U(null,s,i)}if(_(a)&&o["s-si"]!==a){o.classList.add(o["s-si"]=a)}if(s.$children$){for(l=0;l<s.$children$.length;++l){u=O(e,s,l);if(u){o.appendChild(u)}}}}return o};var B=function(e,r,t,n,a,i){var s=e;var l;for(;a<=i;++a){if(n[a]){l=O(null,t,a);if(l){n[a].$elm$=l;s.insertBefore(l,r)}}}};var T=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;q(n);a.remove()}}};var I=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var l=r[0];var o=r[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(l==null){l=r[++a]}else if(o==null){o=r[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(H(l,u)){z(l,u);l=r[++a];u=n[++i]}else if(H(o,c)){z(o,c);o=r[--s];c=n[--f]}else if(H(l,c)){z(l,c);e.insertBefore(l.$elm$,o.$elm$.nextSibling);l=r[++a];c=n[--f]}else if(H(o,u)){z(o,u);e.insertBefore(o.$elm$,l.$elm$);o=r[--s];u=n[++i]}else{{$=O(r&&r[i],t,i);u=n[++i]}if($){{l.$elm$.parentNode.insertBefore($,l.$elm$)}}}}if(a>s){B(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){T(r,a,s)}};var H=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var z=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var s=r.$text$;if(s===null){{{U(e,r,i)}}if(n!==null&&a!==null){I(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}B(t,null,r,a,0,a.length-1)}else if(n!==null){T(n,0,n.length-1)}}else if(e.$text$!==s){t.data=s}};var q=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(q)}};var V=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||E(null,null);var i=C(r)?r:R(null,null,r);i.$tag$=null;i.$flags$|=4;e.$vnode$=i;i.$elm$=n.$elm$=t;{a=t["s-sc"]}z(n,i)};var F=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var W=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var G=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=m("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return D(e,a,r)};W(e,n);var s;t();return Y(s,(function(){return Se(i)}))};var D=function(e,r,t){var n=e.$hostElement$;var a=m("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){y(e)}var s=m("render",e.$cmpMeta$.$tagName$);{{V(e,J(r))}}if(u.$cssShim$){u.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var l=n["s-p"];var o=function(){return K(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}};var J=function(e){try{e=e.render()}catch(r){ve(r)}return e};var K=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=m("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Z(t)}n();{e.$onReadyResolve$(t);if(!a){X()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){_e((function(){return G(e,false)}))}e.$flags$&=~(4|512)}};var Q=function(e){{var r=fe(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){G(r,false)}return t}};var X=function(e){{Z(f.documentElement)}_e((function(){return F(l,"appload",{detail:{namespace:n}})}))};var Y=function(e,r){return e&&e.then?e.then(r):r()};var Z=function(e){return e.classList.add("hydrated")};var ee=function(e,r){if(e!=null&&!S(e)){return e}return e};var re=function(e,r){return fe(e).$instanceValues$.get(r)};var te=function(e,r,t,n){var a=fe(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;t=ee(t);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(l){if((s&(2|16))===2){G(a,false)}}}};var ne=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var r=e[0],n=e[1][0];if(n&31||t&2&&n&32){Object.defineProperty(a,r,{get:function(){return re(this,r)},set:function(e){te(this,r,e)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;u.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ae=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,s,l,o,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=pe(n);if(!i.then)return[3,2];e=p();return[4,i];case 1:i=u.sent();e();u.label=2;case 2:if(!i.isProxied){ne(i,n,2);i.isProxied=true}t=m("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(c){ve(c)}{r.$flags$&=~8}t();a=b(n.$tagName$);if(!de.has(a)&&i.style){s=m("registerStyles",n.$tagName$);l=i.style;h(a,l,!!(n.$flags$&1));s()}u.label=3;case 3:o=r.$ancestorComponent$;f=function(){return G(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var ie=function(e){if((u.$flags$&1)===0){var r=fe(e);var t=r.$cmpMeta$;var n=m("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){W(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{ae(e,r,t)}}n()}};var se=function(e){if((u.$flags$&1)===0){var r=fe(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var le=e("b",(function(e,r){if(r===void 0){r={}}var t=m();var n=[];var a=r.exclude||[];var i=l.customElements;var s=f.head;var o=s.querySelector("meta[charset]");var c=f.createElement("style");var $=[];var p;var d=true;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",f.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}var s=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;ce(r,t);return n}r.prototype.connectedCallback=function(){var e=this;if(p){clearTimeout(p);p=null}if(d){$.push(this)}else{u.jmp((function(){return ie(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return se(e)}))};r.prototype.forceUpdate=function(){Q(this)};r.prototype.componentOnReady=function(){return fe(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,ne(l,t,1))}}))}));{c.innerHTML=n+v;c.setAttribute("data-styles","");s.insertBefore(c,o?o.nextSibling:s.firstChild)}d=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{u.jmp((function(){return p=setTimeout(X,30)}))}}t()}));var oe=new WeakMap;var fe=function(e){return oe.get(e)};var ue=e("r",(function(e,r){return oe.set(r.$lazyInstance$=e,r)}));var ce=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return oe.set(e,t)};var $e=function(e,r){return r in e};var ve=function(e){return console.error(e)};var me=new Map;var pe=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=me.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{me.set(i,e)}return e[a]}),ve)};var de=new Map;var he=[];var ge=[];var ye=function(e,r){return function(t){e.push(t);if(!s){s=true;if(r&&u.$flags$&4){_e(we)}else{u.raf(we)}}}};var be=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){ve(t)}}e.length=0};var we=function(){be(he);{be(ge);if(s=he.length>0){u.raf(we)}}};var _e=function(e){return c().then(e)};var Se=ye(ge,true);var xe=e("a",(function(){if(!(o&&o.supports&&o.supports("color","var(--c)"))){return r.import("./p-2f8c282d.system.js").then((function(){if(u.$cssShim$=l.__cssshim){return u.$cssShim$.i()}else{return 0}}))}return c()}));var Re=e("p",(function(){{u.$cssShim$=l.__cssshim}var e=Array.from(f.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,l.location.href)).href;{Ee(t.resourcesUrl,e)}if(!l.customElements){return r.import("./p-c6833af0.system.js").then((function(){return t}))}}return c(t)}));var Ee=function(e,r){var t=x(n);try{l[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;l[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=f.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(l[t].m);o.remove()}}));a.set(i,s);f.head.appendChild(o)}return s}}}}}}));