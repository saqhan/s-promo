import { Component, h, Prop } from '@stencil/core';
export class CntFlexyViewSaqhanPromoContactFormWrapper {
    render() {
        return (h("cnt-flexy-view-saqhan-promo-contact-form", { payload: this.payload }));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-contact-form-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-contact-form-wrapper.css"]
    }; }
    static get properties() { return {
        "payload": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "contactFormInterface",
                "resolved": "contactFormInterface",
                "references": {
                    "contactFormInterface": {
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
