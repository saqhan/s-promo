import { p as patchBrowser, b as bootstrapLazy } from './index-2c367d7a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["cnt-flexy-view-saqhan-promo-header-1_01",[[2,"cnt-flexy-view-saqhan-promo-header-1_01",{"categories":[16]}]]],["cnt-flexy-view-saqhan-promo-about-me-1_01",[[2,"cnt-flexy-view-saqhan-promo-about-me-1_01",{"payload":[16]}]]],["cnt-flexy-view-saqhan-promo-footer-1_01",[[2,"cnt-flexy-view-saqhan-promo-footer-1_01",{"payload":[16]}]]],["cnt-flexy-view-saqhan-promo-portfolio-1_01",[[2,"cnt-flexy-view-saqhan-promo-portfolio-1_01",{"payload":[16],"portfolioCardState":[32]}]]],["cnt-flexy-view-saqhan-promo-sticky-top",[[2,"cnt-flexy-view-saqhan-promo-sticky-top",{"categories":[8]}]]],["my-component",[[2,"my-component"]]]], options);
});
