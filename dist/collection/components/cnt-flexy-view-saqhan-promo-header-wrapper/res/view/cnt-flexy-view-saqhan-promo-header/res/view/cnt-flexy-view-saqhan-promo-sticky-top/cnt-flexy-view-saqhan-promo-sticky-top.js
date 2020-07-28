import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoStickyTop {
    render() {
        return (h("div", null,
            h("div", { class: "menu", ref: (el) => (this.menuTag = el) },
                h("div", { class: "container-fluid bg-dark" },
                    h("div", { class: "container  " },
                        h("div", { class: "row" },
                            h("div", { class: "menu-main" },
                                h("div", { class: "menu-desktop" },
                                    h("ul", null, this.getItemSticky(this.navItems))),
                                h("div", { class: " soc-links " },
                                    h("ul", { class: "nav mom-social-icons" }, this.getItemLinks(this.socialLinks))))))),
                h("div", { class: "menu-wrapper col-md-12 d-lg-none" }, !this.isShowBar ?
                    h("button", { type: "button", class: "menu-mobile-button", onClick: () => this.showMobileMenuHandler() },
                        h("span", null,
                            h("i", { class: "fa fa-bars" }))) : '')),
            h("div", { class: "mobile-menu d-lg-none", ref: (el) => (this.mobileMenuTag = el) },
                h("div", { class: "container" },
                    h("div", { class: "mobile-menu-close", onClick: () => this.showMobileMenuHandler() },
                        h("span", null,
                            h("i", { class: "fas fa-times" }))),
                    h("nav", { class: "mobile-menu-wrapper" },
                        h("ul", null, this.getItemSticky(this.navItems)))))));
    }
    /**
     * for items sticky
     * */
    getItemSticky(array) {
        return array.map((item) => {
            return (h("li", { class: "nav-item " },
                h("a", { class: "nav-link anchor", href: `#${item.id}` }, item.name)));
        });
    }
    /**
     * for items sticky
     * */
    getItemLinks(array) {
        return array.map((item) => {
            return (h("li", { class: item.name },
                h("a", { target: "_blank", rel: "fa-icon-vk", href: item.links },
                    h("i", { class: item.class }))));
        });
    }
    /**
     * Открытие и закрытие мобильного меню при нажатии на иконки
     */
    showMobileMenuHandler() {
        this.mobileMenuTag.classList.toggle("active");
        this.isShowBar = true;
        console.log(this.isShowBar);
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-sticky-top"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-sticky-top.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-sticky-top.css"]
    }; }
    static get properties() { return {
        "navItems": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "data for stickuTop"
            },
            "attribute": "nav-items",
            "reflect": false
        },
        "socialLinks": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "data for stickuTop"
            },
            "attribute": "social-links",
            "reflect": false
        }
    }; }
}
