import { Component, h } from "@stencil/core";
import { header, aboutMe, portfolio, skills, contactForm } from "../../utils/mock";
export class MyComponent {
    render() {
        return (h("div", null,
            h("cnt-flexy-view-saqhan-promo-header-wrapper-1_01", { categories: header }),
            h("cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01", { payload: aboutMe }),
            h("cnt-flexy-view-saqhan-promo-skils-wrapper-1_01", { payload: skills }),
            h("cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01", { payload: portfolio }),
            h("cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01", { payload: contactForm }),
            h("cnt-flexy-view-saqhan-promo-footer-wrapper", { categories: header })));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
}
