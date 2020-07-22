import { r as registerInstance, h } from './index-8eb9d8b9.js';

const cntFlexyViewSaqhanPromoStickyTopCss = ".navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{padding:0}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01 .navbar-nav.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01 .nav-link.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{color:#fff;font-size:14px}.navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{padding:0}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{background-color:#1A1B1E}.navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01>.container.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{position:relative}.nav-link.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{padding:.5rem 1rem}li.nav-item.active.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01{transition:0.3s ease}li.nav-item.active.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01:hover,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01:focus{background-color:#007bff}";

const CntFlexyViewSaqhanPromoStickyTop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "sticky-top" }, h("header", null, h("nav", { class: "navbar navbar-expand-md navbar-dark " }, h("div", { class: "container" }, h("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarTop", "aria-controls": "navbarTop", "aria-expanded": "false", "aria-label": "Toggle navigation" }, h("span", { class: "navbar-toggler-icon" })), h("div", { class: "collapse navbar-collapse", id: "navbarTop" }, h("ul", { class: "navbar-nav mr-auto" }, this.getItemSticky(this.payload.stickyTop))), h("div", { class: "navbar-text" }, h("ul", { class: "nav mom-social-icons" }, h("li", { class: "instagram" }, h("a", { target: "_blank", href: "https://www.instagram.com/saqhan/" }, h("i", { class: "fab fa-instagram" }))), h("li", { class: "vk" }, h("a", { target: "_blank", rel: "fa-icon-vk", href: "https://vk.com/saqhan" }, h("i", { class: "fab fa-vk" }))))))))));
    }
    /**
     * for items sticky
     * */
    getItemSticky(array) {
        return array.map((item) => {
            return h("li", { class: "nav-item " }, h("a", { class: "nav-link", href: "#About" }, item.name));
        });
    }
};
CntFlexyViewSaqhanPromoStickyTop.style = cntFlexyViewSaqhanPromoStickyTopCss;

export { CntFlexyViewSaqhanPromoStickyTop as cnt_flexy_view_saqhan_promo_sticky_top_1_01 };
