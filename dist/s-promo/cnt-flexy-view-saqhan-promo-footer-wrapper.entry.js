import { r as registerInstance, h } from './index-54bf13c8.js';

const cntFlexyViewSaqhanPromoFooterWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-footer-wrapper-h{display:block}";

const CntFlexyViewSaqhanPromoFooterWrapper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("cnt-flexy-view-saqhan-promo-footer", { categories: this.categories }));
    }
};
CntFlexyViewSaqhanPromoFooterWrapper.style = cntFlexyViewSaqhanPromoFooterWrapperCss;

export { CntFlexyViewSaqhanPromoFooterWrapper as cnt_flexy_view_saqhan_promo_footer_wrapper };
