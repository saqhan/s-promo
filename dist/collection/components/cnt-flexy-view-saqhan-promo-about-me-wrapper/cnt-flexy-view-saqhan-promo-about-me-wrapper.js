import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoAboutMeWrapper {
    render() {
        return (h("cnt-flexy-view-saqhan-promo-about-me", { payload: this.payload }));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-about-me-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-about-me-wrapper.css"]
    }; }
    static get properties() { return {
        "payload": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AboutMeInterface",
                "resolved": "AboutMeInterface",
                "references": {
                    "AboutMeInterface": {
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
