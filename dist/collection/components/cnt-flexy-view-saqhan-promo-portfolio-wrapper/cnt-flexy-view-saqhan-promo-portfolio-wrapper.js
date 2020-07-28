import { Component, h, Prop } from '@stencil/core';
export class CntFlexyViewSaqhanPromoPortfolioWrapper {
    render() {
        return (h("cnt-flexy-view-saqhan-promo-portfolio", { payload: this.payload }));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-portfolio-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-portfolio-wrapper.css"]
    }; }
    static get properties() { return {
        "payload": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "PortfolioInterface",
                "resolved": "PortfolioInterface",
                "references": {
                    "PortfolioInterface": {
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
