import { p as patchBrowser, b as bootstrapLazy } from './index-8eb9d8b9.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["cnt-flexy-view-saqhan-promo-sticky-top",[[2,"cnt-flexy-view-saqhan-promo-sticky-top",{"categories":[8]}]]],["cnt-flexy-view-saqhan-promo-header-1_01",[[2,"cnt-flexy-view-saqhan-promo-header-1_01",{"categories":[16]}]]],["cnt-flexy-view-saqhan-promo-about-me-1_01",[[2,"cnt-flexy-view-saqhan-promo-about-me-1_01",{"payload":[16]}]]],["my-component",[[2,"my-component"]]]], options);
});
