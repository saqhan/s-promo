import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoHeader {
    render() {
        return (h("div", null,
            h("cnt-flexy-view-saqhan-promo-sticky-top", { navItems: this.categories.stickyTop, socialLinks: this.categories.socilaLinks }),
            h("div", { class: "container-fluid head", style: { backgroundImage: `url(${this.categories.backgroundImage})` } },
                h("div", { class: "row flex-center" },
                    h("div", { class: "topContent wow animation_duration animate__fadeIn " },
                        h("div", { class: "logo", style: { backgroundImage: `url(${this.categories.logoMain})` } }),
                        h("div", { class: "titleBlock " }, this.categories.headerTitle),
                        h("button", { id: "myBtn", class: "button myBtn sendBtn", onClick: () => this.showModal(), ref: (el) => (this.sendBtn = el) },
                            h("span", null, this.categories.headerBtnTitle),
                            " ")))),
            h("div", { class: "overlay openModal", id: "openModal", ref: (el) => (this.overlay = el) },
                h("div", { class: "popup" },
                    h("div", { class: "popup-close", onClick: () => this.closeModal() }, "\u00D7"),
                    h("div", { class: "popup-title" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443!"),
                    h("div", { class: "popup-form", style: { backgroundImage: `url(http://saqhan.ru/img/pre-stage/modal_bg.jpg)` } },
                        h("form", { id: "overlayForm", action: "#", class: "main-form" },
                            h("label", { class: "popup-form__label", htmlfor: "phone" }, "\u041E\u0441\u0442\u0430\u0432\u0442\u044C\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0412\u0430\u043C\u0438!"),
                            h("input", { class: "popup-form__input", id: "phoneTop", name: "phone", type: "tel", placeholder: "+7(965) 954-00-34" }),
                            h("button", { class: "button popup-form__btn" }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443!"),
                            h("div", { id: "hide-blockTop" }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443! \u041C\u044B \u0441\u043A\u043E\u0440\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438!")))))));
    }
    /*
     * showModal
     * **/
    showModal() {
        console.log("showModal");
        this.overlay.style.display = "block";
        document.body.style.overflow = "hidden";
        this.sendBtn.classList.add("more-plash");
    }
    /*
     * close Modal
     * **/
    closeModal() {
        this.overlay.style.display = "none";
        document.body.style.overflow = "";
        this.sendBtn.classList.remove("more-plash");
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-header.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-header.css"]
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
                        "path": "../../../../res/interface/common.interface"
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
