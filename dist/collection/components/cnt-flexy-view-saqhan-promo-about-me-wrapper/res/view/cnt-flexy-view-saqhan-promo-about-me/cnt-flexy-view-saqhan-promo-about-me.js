import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoAboutMe {
    render() {
        return (h("div", { class: "wow animation_duration animate__fadeInUp", id: "about-me" },
            h("div", { class: "container " },
                h("div", { class: "row" },
                    h("div", { class: "col-sm-12 wrapper-title-about" },
                        h("div", { class: "titleBlock  " }, this.payload.title),
                        h("div", { class: "subtitleBlock text-center lsp" }, this.payload.subTitle))),
                h("div", { class: "row  about-blocks-wrapper" },
                    h("div", { class: "col-12 col-md-6 col-lg-4" },
                        h("div", { class: "subtitleBlock text-center lsp pb-3" }, this.payload.aboutMe.title),
                        h("div", { class: "text-justify" }, this.payload.aboutMe.text)),
                    h("div", { class: "col-12 col-md-6 col-lg-4" },
                        h("div", { class: "myPhoto text-center", style: { backgroundImage: `url(${this.payload.img})` } })),
                    h("div", { class: "col-12 col-md-12 col-lg-4" },
                        h("div", { class: "aboutContactsubtitle pb-3 " },
                            h("b", { class: "title-center" }, this.payload.contacts.name),
                            h("br", null),
                            h("br", null),
                            this.payload.contacts.text,
                            h("br", null),
                            h("br", null),
                            h("br", null),
                            h("i", { class: "fas fa-phone-alt" }),
                            " ",
                            h("span", null, this.payload.contacts.phone),
                            h("br", null),
                            h("i", { class: "far fa-envelope" }),
                            " ",
                            h("span", null, this.payload.contacts.email),
                            h("br", null),
                            " ",
                            h("br", null),
                            " ",
                            this.getSocialLinks(this.payload.socilaLinks)))))));
    }
    getSocialLinks(array) {
        return array.map(item => {
            return h("a", { href: item.links, target: "_blank", class: "footer-social-link ", "data-wow-delay": "0.2s" },
                h("i", { class: item.class }));
        });
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-about-me"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-about-me.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-about-me.css"]
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
