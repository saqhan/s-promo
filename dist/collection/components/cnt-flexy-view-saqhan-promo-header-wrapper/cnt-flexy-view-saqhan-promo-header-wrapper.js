import { Component, h, Prop } from '@stencil/core';
export class CntFlexyViewSaqhanPromoHeaderWrapper {
    render() {
        return (h("cnt-flexy-view-saqhan-promo-header", { categories: this.categories }));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-header-wrapper-1_01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-header-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-header-wrapper.css"]
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
                "text": "data for stickuTop\u20AC\u20AC"
            }
        }
    }; }
}
