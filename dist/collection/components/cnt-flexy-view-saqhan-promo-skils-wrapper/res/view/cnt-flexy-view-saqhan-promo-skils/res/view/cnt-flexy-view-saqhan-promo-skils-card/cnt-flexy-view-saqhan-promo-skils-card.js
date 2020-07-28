import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoSkilsCard {
    render() {
        return (h("div", { class: "card-skills" },
            h("div", { class: "state-wrapper" },
                h("div", { class: "name" }, this.skills.name),
                h("div", { class: "number" },
                    this.skills.percent,
                    "%")),
            h("div", { class: "progress" },
                h("div", { class: "wow progress-bar", style: { width: `${this.skills.percent}%` } }))));
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-skils-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-skils-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-skils-card.css"]
    }; }
    static get properties() { return {
        "skills": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "SkillsInterface",
                "resolved": "SkillsInterface",
                "references": {
                    "SkillsInterface": {
                        "location": "import",
                        "path": "../../../../../../../res/interface/common.interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "data for cards"
            }
        }
    }; }
}
