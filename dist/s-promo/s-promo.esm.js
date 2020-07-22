import { p as patchBrowser, b as bootstrapLazy } from './index-76a89c29.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["cnt-flexy-view-saqhan-promo-sticky-top-1_01",[[2,"cnt-flexy-view-saqhan-promo-sticky-top-1_01"]]],["cnt-flexy-view-saqhan-promo-header-1_01",[[2,"cnt-flexy-view-saqhan-promo-header-1_01"]]],["my-component",[[2,"my-component"]]]], options);
});
