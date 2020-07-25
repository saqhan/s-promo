import { r as registerInstance, h } from './index-2c367d7a.js';

const cntFlexyViewSaqhanPromoFooterCss = "input.sc-cnt-flexy-view-saqhan-promo-footer-1_01{outline:none}.fdb-block.sc-cnt-flexy-view-saqhan-promo-footer-1_01{background:url(http://saqhan.ru/img/footer-bg.png)}.contact.sc-cnt-flexy-view-saqhan-promo-footer-1_01{padding:50px 0px}.contact.sc-cnt-flexy-view-saqhan-promo-footer-1_01{background-image:url(http://saqhan.ru/img/9.svg);background-size:cover}.title-contacts.sc-cnt-flexy-view-saqhan-promo-footer-1_01{font-size:40px;margin-bottom:25px}.footer-subtitle.sc-cnt-flexy-view-saqhan-promo-footer-1_01{font-size:28px;font-weight:400}.title-call.sc-cnt-flexy-view-saqhan-promo-footer-1_01{margin-top:10px}.btn.sc-cnt-flexy-view-saqhan-promo-footer-1_01{width:140px;letter-spacing:1px;position:relative;font-size:20px}.btn-send.sc-cnt-flexy-view-saqhan-promo-footer-1_01{background-color:#fe6347;color:#fff}#hide-block.sc-cnt-flexy-view-saqhan-promo-footer-1_01{display:none;background-color:#4e8000;padding:10px;margin-top:20px;border-radius:3px;color:#fff;transition:0.6s ease}.footer-copyright.sc-cnt-flexy-view-saqhan-promo-footer-1_01{color:#ffffff;margin-top:30px;margin-bottom:50px}";

const CntFlexyViewSaqhanPromoFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("section", { class: "fdb-block contact", id: "contact" }, h("div", { class: "bg-gray" }, h("div", { class: "container" }, h("div", { class: "row-100" }), h("div", { class: "row text-left" }, h("div", { class: "col-8" }, h("h1", { class: "title-contacts" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), h("div", { class: "row-100" }))), h("div", { class: "container bg-r" }, h("div", { class: "row-100" }), h("div", { class: "row" }, h("div", { class: "col-12 col-md-6 col-lg-5" }, h("div", { class: "text-large footer-subtitle " }, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443"), h("p", { class: "h3 mt-4 mt-lg-5" }, h("strong", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:")), h("p", null, h("a", { href: "tel:+79659540034" }, this.payload.contacts.phone)), h("p", { class: "h3 mt-4 mt-lg-5" }, h("strong", null, "\u041F\u043E\u0447\u0442\u0430:")), h("p", null, h("a", { href: "mailto:saqhan1@mail.ru" }, this.payload.contacts.email))), h("div", { class: "col-12 col-md-6 ml-auto" }, h("h2", { class: "footer-subtitle title-call" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), h("form", { id: "form", onSubmit: (e) => this.sendMessageHandler(e) }, h("div", { class: "row" }, h("div", { class: "col" }, h("input", { ref: (el) => (this.nameInput = el), onBlur: () => this.checkInput(this.nameInput), type: "text", id: "name", name: "name", class: "form-control", placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F *" })), h("div", { class: "col" }, h("input", { ref: (el) => (this.phoneInput = el), onBlur: () => this.checkInput(this.phoneInput), type: "tel", id: "phone", name: "phone", class: "form-control", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D *" }))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("input", { id: "email", type: "text", name: "email", class: "form-control", placeholder: "E-mail" }))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("select", { class: "form-control", name: "type" }, h("option", { value: "" }, "\u0421\u0430\u0439\u0442 \u043A\u0430\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0412\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?"), h("option", { value: "Landing" }, "\u041B\u0435\u043D\u0434\u0438\u043D\u0433"), h("option", { value: "Blog" }, "\u0421\u0430\u0439\u0442-\u0431\u043B\u043E\u0433"), h("option", { value: "Maket" }, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D")))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("textarea", { class: "form-control", name: "message", placeholder: "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442" }))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("button", { type: "submit", class: "btn btn-send" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), h("div", { id: "hide-block", ref: el => this.hideBlock = el }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443!")))))))), h("footer", { class: "fdb-block footer-small pt-5" }, h("div", { class: "container" }, h("div", { class: "row text-center align-items-center" }, h("div", { class: "col", id: "navbarBottom" }, h("ul", { class: "nav justify-content-center" }, h("li", { class: "nav-item" }, h("a", { class: "nav-link active", href: "/" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: "#About" }, "\u041E\u0431\u043E \u043C\u043D\u0435")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: "#portfolio" }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: "#Terms" }, "\u041E\u0442\u0437\u044B\u0432\u044B")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: "#contact" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), h("p", { class: "h6 footer-copyright" }, "\u00A9 2020 \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 SAQHAN")))))));
    }
    /*
     * send new mess
     * */
    sendMessageHandler(e) {
        e.preventDefault();
        this.sendMessage();
    }
    sendMessage() {
        if (this.phoneInput.value !== '' && this.phoneInput.value !== '') {
            console.log('send access');
            this.hideBlock.style.display = 'block';
            setTimeout(function () {
                document.getElementById('hide-block').style.display = 'none';
            }, 2500);
        }
    }
    checkInput(check) {
        if (check.value === '') {
            check.style.border = "1px solid red";
        }
        else {
            check.style.border = "1px solid #ccc";
        }
    }
};
CntFlexyViewSaqhanPromoFooter.style = cntFlexyViewSaqhanPromoFooterCss;

export { CntFlexyViewSaqhanPromoFooter as cnt_flexy_view_saqhan_promo_footer_1_01 };
