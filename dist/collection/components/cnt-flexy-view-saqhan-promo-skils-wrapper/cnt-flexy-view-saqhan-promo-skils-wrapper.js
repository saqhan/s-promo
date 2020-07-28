import { Component, h, Prop } from '@stencil/core';
export class CntFlexyViewSaqhanPromoSkilsWrapper {
    constructor() {
        this.payload = [];
    }
    render() {
        return (h("cnt-flexy-view-saqhan-promo-skils", { payload: this.payload }));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-skils-wrapper-1_01"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-skils-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-skils-wrapper.css"]
    }; }
    static get properties() { return {
        "payload": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "SkillsInterface[]",
                "resolved": "SkillsInterface[]",
                "references": {
                    "SkillsInterface": {
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
            },
            "defaultValue": "[]"
        }
    }; }
}
