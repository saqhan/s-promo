import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoSkils {
    constructor() {
        this.payload = [];
    }
    render() {
        return (h("div", { class: "wow animation_duration animate__fadeInUp", id: "skills" },
            h("div", { class: "container" },
                h("div", { class: "row" },
                    h("div", { class: "col-12" },
                        h("div", { class: "title" }, "\u041D\u0430\u0432\u044B\u043A\u0438"))),
                h("div", { class: "row wrapper-cards" }, h(SkillsCard, { skills: this.payload })))));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-skils"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-skils.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-skils.css"]
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
                        "path": "../../../../res/interface/common.interface"
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
const SkillsCard = (props) => {
    return props.skills.map((item) => {
        return (h("div", { class: "col-md-6" },
            h("cnt-flexy-view-saqhan-promo-skils-card", { skills: item })));
    });
};
