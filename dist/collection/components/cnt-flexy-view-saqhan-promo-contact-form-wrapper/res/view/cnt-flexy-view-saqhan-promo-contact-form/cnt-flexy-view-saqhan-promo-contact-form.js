import { Component, h, Prop } from "@stencil/core";
export class CntFlexyViewSaqhanPromoContactForm {
    render() {
        return (h("section", { class: "fdb-block contact wow animation_duration animate__fadeIn", id: "contacts", style: { backgroundImage: `url(${this.payload.backgroundImage})` } },
            h("div", { class: "bg-gray" },
                h("div", { class: "container" },
                    h("div", { class: "row-100" }),
                    h("div", { class: "row text-left" },
                        h("div", { class: "col-8" },
                            h("h1", { class: "title-contacts" }, this.payload.title))),
                    h("div", { class: "row-100" }))),
            h("div", { class: "container bg-r" },
                h("div", { class: "row-100" }),
                h("div", { class: "row" },
                    h("div", { class: "col-12 col-md-6 col-lg-5" },
                        h("div", { class: "text-large footer-subtitle " }, this.payload.subTitle),
                        h("p", { class: "h3 mt-4 mt-lg-5" },
                            h("strong", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:")),
                        h("p", null,
                            h("a", { href: "tel:+79659540034" }, this.payload.number)),
                        h("p", { class: "h3 mt-4 mt-lg-5" },
                            h("strong", null, "\u041F\u043E\u0447\u0442\u0430:")),
                        h("p", null,
                            h("a", { href: "mailto:saqhan1@mail.ru" }, this.payload.email))),
                    h("div", { class: "col-12 col-md-6 ml-auto" },
                        h("h2", { class: "footer-subtitle title-call" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"),
                        h("form", { id: "form", onSubmit: (e) => this.sendMessageHandler(e) },
                            h("div", { class: "row" },
                                h("div", { class: "col" },
                                    h("input", { ref: (el) => (this.nameInput = el), onBlur: () => this.checkInput(this.nameInput), type: "text", id: "name", name: "name", class: "form-control", placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F *" })),
                                h("div", { class: "col" },
                                    h("input", { ref: (el) => (this.phoneInput = el), onBlur: () => this.checkInput(this.phoneInput), type: "tel", id: "phone", name: "phone", class: "form-control", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D *" }))),
                            h("div", { class: "row mt-4" },
                                h("div", { class: "col" },
                                    h("input", { id: "email", type: "text", name: "email", class: "form-control", placeholder: "E-mail" }))),
                            h("div", { class: "row mt-4" },
                                h("div", { class: "col" },
                                    h("select", { class: "form-control", name: "type" },
                                        h("option", { value: "" }, "\u0421\u0430\u0439\u0442 \u043A\u0430\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0412\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?"),
                                        h("option", { value: "Landing" }, "\u041B\u0435\u043D\u0434\u0438\u043D\u0433"),
                                        h("option", { value: "Blog" }, "\u0421\u0430\u0439\u0442-\u0431\u043B\u043E\u0433"),
                                        h("option", { value: "Maket" }, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D")))),
                            h("div", { class: "row mt-4" },
                                h("div", { class: "col" },
                                    h("textarea", { class: "form-control", name: "message", placeholder: "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442" }))),
                            h("div", { class: "row mt-4" },
                                h("div", { class: "col" },
                                    h("button", { type: "submit", class: "btn btn-send" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"),
                                    h("div", { id: "hide-block", ref: (el) => (this.hideBlock = el) }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443!")))))))));
    }
    /*
     * send new mess
     * */
    sendMessageHandler(e) {
        e.preventDefault();
        this.sendMessage();
    }
    sendMessage() {
        if (this.phoneInput.value !== "" && this.phoneInput.value !== "") {
            this.hideBlock.style.display = "block";
            setTimeout(function () {
                document.getElementById("hide-block").style.display = "none";
            }, 2500);
        }
    }
    checkInput(check) {
        if (check.value === "") {
            check.style.border = "1px solid red";
        }
        else {
            check.style.border = "1px solid #ccc";
        }
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-contact-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-contact-form.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-contact-form.css"]
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
