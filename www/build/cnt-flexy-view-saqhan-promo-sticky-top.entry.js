import { r as registerInstance, h } from './index-8eb9d8b9.js';

const cntFlexyViewSaqhanPromoStickyTopCss = ".navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:0}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top .navbar-nav.sc-cnt-flexy-view-saqhan-promo-sticky-top .nav-link.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fff;font-size:14px}.navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:0}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top{background-color:#1A1B1E}.navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top>.container.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top{position:relative}.nav-link.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:.5rem 1rem}li.nav-item.active.sc-cnt-flexy-view-saqhan-promo-sticky-top,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top{transition:0.3s ease}li.nav-item.active.sc-cnt-flexy-view-saqhan-promo-sticky-top,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top:hover,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top:focus{background-color:#007bff}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top{background-color:#1A1B1E}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top .navbar-text.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:rgba(255,255,255,.5)}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top .navbar-text.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fff}mom-social-icons.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{width:30px;height:30px;display:block;text-align:center;line-height:30px;font-size:18px;color:#f0f0f0}.mom-social-icons.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{width:30px;height:30px;display:block;text-align:center;line-height:30px;font-size:18px;color:#f0f0f0}";

const CntFlexyViewSaqhanPromoStickyTop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "sticky-top" }, h("header", null, h("nav", { class: "navbar navbar-expand-md navbar-dark " }, h("div", { class: "container" }, h("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarTop", "aria-controls": "navbarTop", "aria-expanded": "false", "aria-label": "Toggle navigation" }, h("span", { class: "navbar-toggler-icon" })), h("div", { class: "collapse navbar-collapse", id: "navbarTop" }, h("ul", { class: "navbar-nav mr-auto" }, this.getItemSticky(this.categories.stickyTop))), h("div", { class: "navbar-text" }, h("ul", { class: "nav mom-social-icons" }, h("li", { class: "instagram" }, h("a", { target: "_blank", href: "https://www.instagram.com/saqhan/" }, h("i", { class: "fab fa-instagram" }))), h("li", { class: "vk" }, h("a", { target: "_blank", rel: "fa-icon-vk", href: "https://vk.com/saqhan" }, h("i", { class: "fab fa-vk" }))))))))));
    }
    /**
     * for items sticky
     * */
    getItemSticky(array) {
        return array.map((item) => {
            return h("li", { class: "nav-item " }, h("a", { class: "nav-link", href: item.id }, item.name));
        });
    }
};
CntFlexyViewSaqhanPromoStickyTop.style = cntFlexyViewSaqhanPromoStickyTopCss;

export { CntFlexyViewSaqhanPromoStickyTop as cnt_flexy_view_saqhan_promo_sticky_top };
