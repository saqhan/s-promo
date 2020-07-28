import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoFooter {
    render() {
        return (h("div", null,
            h("footer", { class: "fdb-block footer-small pt-5", style: { backgroundImage: `url(${this.categories.footerBackgroundImage})` } },
                h("div", { class: "container" },
                    h("div", { class: "row text-center align-items-center" },
                        h("div", { class: "col", id: "navbarBottom" },
                            h("ul", { class: "nav " }, this.getItemSticky(this.categories.stickyTop)),
                            h("p", { class: "h6 footer-copyright" }, "\u00A9 2020 \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 SAQHAN")))))));
    }
    /**
     * for items sticky
     * */
    getItemSticky(array) {
        return array.map((item) => {
            return (h("li", { class: "nav-item " },
                h("a", { class: "nav-link", href: `#${item.id}` }, item.name),
                "\u203A"));
        });
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-footer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-footer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-footer.css"]
    }; }
    static get properties() { return {
        "categories": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HeaderStickyInterface",
                "resolved": "HeaderStickyInterface",
                "references": {
                    "HeaderStickyInterface": {
                        "location": "import",
                        "path": "../../../../res/interface/common.interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
