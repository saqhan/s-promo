import { Component, h, Prop } from '@stencil/core';
export class CntFlexyViewSaqhanPromoFooterWrapper {
    render() {
        return (h("cnt-flexy-view-saqhan-promo-footer", { categories: this.categories }));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-footer-wrapper"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-footer-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-footer-wrapper.css"]
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
                        "path": "../res/interface/common.interface"
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
