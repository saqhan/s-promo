import { r as registerInstance, h } from './index-54bf13c8.js';

const cntFlexyViewSaqhanPromoFooterCss = ".fdb-block.sc-cnt-flexy-view-saqhan-promo-footer-1_01{background:url(http://saqhan.ru/img/footer-bg.png)}.footer-copyright.sc-cnt-flexy-view-saqhan-promo-footer-1_01{color:#ffffff;margin-top:30px;margin-bottom:50px}.nav.sc-cnt-flexy-view-saqhan-promo-footer-1_01{justify-content:center}";

const CntFlexyViewSaqhanPromoFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("footer", { class: "fdb-block footer-small pt-5" }, h("div", { class: "container" }, h("div", { class: "row text-center align-items-center" }, h("div", { class: "col", id: "navbarBottom" }, h("ul", { class: "nav " }, this.getItemSticky(this.categories.stickyTop)), h("p", { class: "h6 footer-copyright" }, "\u00A9 2020 \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 SAQHAN")))))));
    }
    /**
     * for items sticky
     * */
    getItemSticky(array) {
        return array.map((item) => {
            return (h("li", { class: "nav-item " }, h("a", { class: "nav-link", href: `#${item.id}` }, item.name), "\u203A"));
        });
    }
};
CntFlexyViewSaqhanPromoFooter.style = cntFlexyViewSaqhanPromoFooterCss;

export { CntFlexyViewSaqhanPromoFooter as cnt_flexy_view_saqhan_promo_footer_1_01 };
