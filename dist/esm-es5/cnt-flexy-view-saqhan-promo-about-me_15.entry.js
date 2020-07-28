import { r as registerInstance, h } from './index-4ca71b3b.js';
var cntFlexyViewSaqhanPromoAboutMeCss = "#about-me.sc-cnt-flexy-view-saqhan-promo-about-me::before{content:'';display:block;height:40px;margin-top:-40px;visibility:hidden}.about-me.sc-cnt-flexy-view-saqhan-promo-about-me{-webkit-animation-duration:1s;animation-duration:1s}.about-blocks-wrapper.sc-cnt-flexy-view-saqhan-promo-about-me{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:center;align-content:center}.about-blocks-wrapper.sc-cnt-flexy-view-saqhan-promo-about-me div.sc-cnt-flexy-view-saqhan-promo-about-me{padding-bottom:30px}.wrapper-title-about.sc-cnt-flexy-view-saqhan-promo-about-me{padding:50px 0px}.titleBlock.sc-cnt-flexy-view-saqhan-promo-about-me{letter-spacing:10px;font-size:40px;text-align:center}.subtitleBlock.sc-cnt-flexy-view-saqhan-promo-about-me{font-size:20px;letter-spacing:5px}.aboutContactsubtitle.sc-cnt-flexy-view-saqhan-promo-about-me i.sc-cnt-flexy-view-saqhan-promo-about-me{color:#fe6347;margin-right:10px}.aboutContactsubtitle.sc-cnt-flexy-view-saqhan-promo-about-me a.sc-cnt-flexy-view-saqhan-promo-about-me{margin-right:5px}.myPhoto.sc-cnt-flexy-view-saqhan-promo-about-me{max-width:300px;height:310px;margin:auto}";
var CntFlexyViewSaqhanPromoAboutMe = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoAboutMe(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoAboutMe.prototype.render = function () {
        return (h("div", { class: "wow animation_duration animate__fadeInUp", id: "about-me" }, h("div", { class: "container " }, h("div", { class: "row" }, h("div", { class: "col-sm-12 wrapper-title-about" }, h("div", { class: "titleBlock  " }, this.payload.title), h("div", { class: "subtitleBlock text-center lsp" }, this.payload.subTitle))), h("div", { class: "row  about-blocks-wrapper" }, h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "subtitleBlock text-center lsp pb-3" }, this.payload.aboutMe.title), h("div", { class: "text-justify" }, this.payload.aboutMe.text)), h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "myPhoto text-center", style: { backgroundImage: "url(" + this.payload.img + ")" } })), h("div", { class: "col-12 col-md-12 col-lg-4" }, h("div", { class: "aboutContactsubtitle pb-3 " }, h("b", { class: "title-center" }, this.payload.contacts.name), h("br", null), h("br", null), this.payload.contacts.text, h("br", null), h("br", null), h("br", null), h("i", { class: "fas fa-phone-alt" }), " ", h("span", null, this.payload.contacts.phone), h("br", null), h("i", { class: "far fa-envelope" }), " ", h("span", null, this.payload.contacts.email), h("br", null), " ", h("br", null), " ", this.getSocialLinks(this.payload.socilaLinks)))))));
    };
    CntFlexyViewSaqhanPromoAboutMe.prototype.getSocialLinks = function (array) {
        return array.map(function (item) {
            return h("a", { href: item.links, target: "_blank", class: "footer-social-link ", "data-wow-delay": "0.2s" }, h("i", { class: item.class }));
        });
    };
    return CntFlexyViewSaqhanPromoAboutMe;
}());
CntFlexyViewSaqhanPromoAboutMe.style = cntFlexyViewSaqhanPromoAboutMeCss;
var cntFlexyViewSaqhanPromoAboutMeWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01-h{display:block}";
var CntFlexyViewSaqhanPromoAboutMeWrapper = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoAboutMeWrapper(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoAboutMeWrapper.prototype.render = function () {
        return (h("cnt-flexy-view-saqhan-promo-about-me", { payload: this.payload }));
    };
    return CntFlexyViewSaqhanPromoAboutMeWrapper;
}());
CntFlexyViewSaqhanPromoAboutMeWrapper.style = cntFlexyViewSaqhanPromoAboutMeWrapperCss;
var cntFlexyViewSaqhanPromoContactFormCss = ".contact.sc-cnt-flexy-view-saqhan-promo-contact-form{padding:50px 0}.contact.sc-cnt-flexy-view-saqhan-promo-contact-form{background-size:cover}.title-contacts.sc-cnt-flexy-view-saqhan-promo-contact-form{font-size:40px;margin-bottom:25px}.footer-subtitle.sc-cnt-flexy-view-saqhan-promo-contact-form{font-size:28px;font-weight:400}.title-call.sc-cnt-flexy-view-saqhan-promo-contact-form{margin-top:10px}.btn.sc-cnt-flexy-view-saqhan-promo-contact-form{width:140px;letter-spacing:1px;position:relative;font-size:20px}.btn-send.sc-cnt-flexy-view-saqhan-promo-contact-form{background-color:#fe6347;color:#fff}#hide-block.sc-cnt-flexy-view-saqhan-promo-contact-form{display:none;background-color:#4e8000;padding:10px;margin-top:20px;border-radius:3px;color:#fff;-webkit-transition:0.6s ease;transition:0.6s ease}";
var CntFlexyViewSaqhanPromoContactForm = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoContactForm(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoContactForm.prototype.render = function () {
        var _this = this;
        return (h("section", { class: "fdb-block contact wow animation_duration animate__fadeIn", id: "contacts", style: { backgroundImage: "url(" + this.payload.backgroundImage + ")" } }, h("div", { class: "bg-gray" }, h("div", { class: "container" }, h("div", { class: "row-100" }), h("div", { class: "row text-left" }, h("div", { class: "col-8" }, h("h1", { class: "title-contacts" }, this.payload.title))), h("div", { class: "row-100" }))), h("div", { class: "container bg-r" }, h("div", { class: "row-100" }), h("div", { class: "row" }, h("div", { class: "col-12 col-md-6 col-lg-5" }, h("div", { class: "text-large footer-subtitle " }, this.payload.subTitle), h("p", { class: "h3 mt-4 mt-lg-5" }, h("strong", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:")), h("p", null, h("a", { href: "tel:+79659540034" }, this.payload.number)), h("p", { class: "h3 mt-4 mt-lg-5" }, h("strong", null, "\u041F\u043E\u0447\u0442\u0430:")), h("p", null, h("a", { href: "mailto:saqhan1@mail.ru" }, this.payload.email))), h("div", { class: "col-12 col-md-6 ml-auto" }, h("h2", { class: "footer-subtitle title-call" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), h("form", { id: "form", onSubmit: function (e) { return _this.sendMessageHandler(e); } }, h("div", { class: "row" }, h("div", { class: "col" }, h("input", { ref: function (el) { return (_this.nameInput = el); }, onBlur: function () { return _this.checkInput(_this.nameInput); }, type: "text", id: "name", name: "name", class: "form-control", placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F *" })), h("div", { class: "col" }, h("input", { ref: function (el) { return (_this.phoneInput = el); }, onBlur: function () { return _this.checkInput(_this.phoneInput); }, type: "tel", id: "phone", name: "phone", class: "form-control", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D *" }))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("input", { id: "email", type: "text", name: "email", class: "form-control", placeholder: "E-mail" }))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("select", { class: "form-control", name: "type" }, h("option", { value: "" }, "\u0421\u0430\u0439\u0442 \u043A\u0430\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0412\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?"), h("option", { value: "Landing" }, "\u041B\u0435\u043D\u0434\u0438\u043D\u0433"), h("option", { value: "Blog" }, "\u0421\u0430\u0439\u0442-\u0431\u043B\u043E\u0433"), h("option", { value: "Maket" }, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D")))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("textarea", { class: "form-control", name: "message", placeholder: "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442" }))), h("div", { class: "row mt-4" }, h("div", { class: "col" }, h("button", { type: "submit", class: "btn btn-send" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), h("div", { id: "hide-block", ref: function (el) { return (_this.hideBlock = el); } }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443!")))))))));
    };
    /*
     * send new mess
     * */
    CntFlexyViewSaqhanPromoContactForm.prototype.sendMessageHandler = function (e) {
        e.preventDefault();
        this.sendMessage();
    };
    CntFlexyViewSaqhanPromoContactForm.prototype.sendMessage = function () {
        if (this.phoneInput.value !== "" && this.phoneInput.value !== "") {
            this.hideBlock.style.display = "block";
            setTimeout(function () {
                document.getElementById("hide-block").style.display = "none";
            }, 2500);
        }
    };
    CntFlexyViewSaqhanPromoContactForm.prototype.checkInput = function (check) {
        if (check.value === "") {
            check.style.border = "1px solid red";
        }
        else {
            check.style.border = "1px solid #ccc";
        }
    };
    return CntFlexyViewSaqhanPromoContactForm;
}());
CntFlexyViewSaqhanPromoContactForm.style = cntFlexyViewSaqhanPromoContactFormCss;
var cntFlexyViewSaqhanPromoContactFormWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01-h{display:block}";
var CntFlexyViewSaqhanPromoContactFormWrapper = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoContactFormWrapper(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoContactFormWrapper.prototype.render = function () {
        return (h("cnt-flexy-view-saqhan-promo-contact-form", { payload: this.payload }));
    };
    return CntFlexyViewSaqhanPromoContactFormWrapper;
}());
CntFlexyViewSaqhanPromoContactFormWrapper.style = cntFlexyViewSaqhanPromoContactFormWrapperCss;
var cntFlexyViewSaqhanPromoFooterCss = ".footer-copyright.sc-cnt-flexy-view-saqhan-promo-footer{color:#ffffff;margin-top:30px;margin-bottom:50px}.nav.sc-cnt-flexy-view-saqhan-promo-footer{-ms-flex-pack:center;justify-content:center}";
var CntFlexyViewSaqhanPromoFooter = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoFooter(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoFooter.prototype.render = function () {
        return (h("div", null, h("footer", { class: "fdb-block footer-small pt-5", style: { backgroundImage: "url(" + this.categories.footerBackgroundImage + ")" } }, h("div", { class: "container" }, h("div", { class: "row text-center align-items-center" }, h("div", { class: "col", id: "navbarBottom" }, h("ul", { class: "nav " }, this.getItemSticky(this.categories.stickyTop)), h("p", { class: "h6 footer-copyright" }, "\u00A9 2020 \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u043E\u0432 SAQHAN")))))));
    };
    /**
     * for items sticky
     * */
    CntFlexyViewSaqhanPromoFooter.prototype.getItemSticky = function (array) {
        return array.map(function (item) {
            return (h("li", { class: "nav-item " }, h("a", { class: "nav-link", href: "#" + item.id }, item.name), "\u203A"));
        });
    };
    return CntFlexyViewSaqhanPromoFooter;
}());
CntFlexyViewSaqhanPromoFooter.style = cntFlexyViewSaqhanPromoFooterCss;
var cntFlexyViewSaqhanPromoFooterWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-footer-wrapper-h{display:block}";
var CntFlexyViewSaqhanPromoFooterWrapper = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoFooterWrapper(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoFooterWrapper.prototype.render = function () {
        return (h("cnt-flexy-view-saqhan-promo-footer", { categories: this.categories }));
    };
    return CntFlexyViewSaqhanPromoFooterWrapper;
}());
CntFlexyViewSaqhanPromoFooterWrapper.style = cntFlexyViewSaqhanPromoFooterWrapperCss;
var cntFlexyViewSaqhanPromoHeaderCss = ".head.sc-cnt-flexy-view-saqhan-promo-header{height:100vh;background-size:cover;background-attachment:fixed;color:#fff}.flex-center.sc-cnt-flexy-view-saqhan-promo-header{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%}.titleBlock.sc-cnt-flexy-view-saqhan-promo-header{font-size:40px}.subtitleBlock.sc-cnt-flexy-view-saqhan-promo-header{font-size:20px}.logo.sc-cnt-flexy-view-saqhan-promo-header{width:123px;height:123px;margin:auto;margin-bottom:30px}.topContent.sc-cnt-flexy-view-saqhan-promo-header{text-align:center}.button.sc-cnt-flexy-view-saqhan-promo-header,.button.sc-cnt-flexy-view-saqhan-promo-header::before,.button.sc-cnt-flexy-view-saqhan-promo-header::after,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header::before,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header::after{-webkit-transition:all ease 0.5s;transition:all ease 0.5s}.button.sc-cnt-flexy-view-saqhan-promo-header{position:relative;display:inline-block;padding:0.3em;border:solid 1px;text-transform:uppercase;cursor:pointer;background:none;color:#cdcdcd;font-size:15px}.button.sc-cnt-flexy-view-saqhan-promo-header:hover{-webkit-box-shadow:0 0 10px 3px #777;box-shadow:0 0 10px 3px #777}.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header{display:inline-block;width:100%;padding:0.6em 2em}.button.sc-cnt-flexy-view-saqhan-promo-header:hover span.sc-cnt-flexy-view-saqhan-promo-header{background-color:#fff;color:#112}#app.sc-cnt-flexy-view-saqhan-promo-header{text-align:center}.button.sc-cnt-flexy-view-saqhan-promo-header::before,.button.sc-cnt-flexy-view-saqhan-promo-header::after,.button.sc-cnt-flexy-view-saqhan-promo-header div.sc-cnt-flexy-view-saqhan-promo-header::before,.button.sc-cnt-flexy-view-saqhan-promo-header div.sc-cnt-flexy-view-saqhan-promo-header::after{content:\"\";position:absolute;border:1px}.button.sc-cnt-flexy-view-saqhan-promo-header::before,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header::before{border-style:solid none}.button.sc-cnt-flexy-view-saqhan-promo-header::before,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header::after{left:0;top:-0.4em;width:100%;height:calc(100% + 0.8em)}.button.sc-cnt-flexy-view-saqhan-promo-header::after,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header::after{border-style:none solid}.button.sc-cnt-flexy-view-saqhan-promo-header::after,.button.sc-cnt-flexy-view-saqhan-promo-header span.sc-cnt-flexy-view-saqhan-promo-header::before{top:0;left:-0.4em;height:100%;width:calc(100% + 0.8em)}.button.sc-cnt-flexy-view-saqhan-promo-header:hover::after,.button.sc-cnt-flexy-view-saqhan-promo-header:hover span.sc-cnt-flexy-view-saqhan-promo-header::after{-webkit-transform:scaleY(0);transform:scaleY(0)}.button.sc-cnt-flexy-view-saqhan-promo-header:hover::before,.button.sc-cnt-flexy-view-saqhan-promo-header:hover span.sc-cnt-flexy-view-saqhan-promo-header::before{-webkit-transform:scaleX(0);transform:scaleX(0)}.button.sc-cnt-flexy-view-saqhan-promo-header:hover span.sc-cnt-flexy-view-saqhan-promo-header::after,.button.sc-cnt-flexy-view-saqhan-promo-header:hover span.sc-cnt-flexy-view-saqhan-promo-header::before{opacity:0}.overlay.sc-cnt-flexy-view-saqhan-promo-header{position:fixed;display:none;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:3}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup.sc-cnt-flexy-view-saqhan-promo-header{position:fixed;z-index:4;left:50%;top:calc(50% - 155px);max-width:570px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-close.sc-cnt-flexy-view-saqhan-promo-header{position:absolute;right:-20px;top:-35px;cursor:pointer;font-size:35px;color:#fff;font-weight:300}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-title.sc-cnt-flexy-view-saqhan-promo-header{display:block;width:100%;height:71px;line-height:71px;margin:0;background-color:#c78030;color:#ffffff;text-transform:uppercase;font-size:21px;font-weight:500;text-align:center}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form.sc-cnt-flexy-view-saqhan-promo-header{background-size:cover;padding:35px 88px 50px 88px;color:#fff;text-align:center}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form-header.sc-cnt-flexy-view-saqhan-promo-header{padding:0;font-weight:400;line-height:27px;font-size:30px;text-align:center}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__label.sc-cnt-flexy-view-saqhan-promo-header{display:block;margin-top:23px;font-size:20px;font-weight:300;text-align:center}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header{width:auto;height:56px;margin-top:17px;margin-bottom:17px;font-size:18px;background-color:#c78030;border:none;color:#fff;text-align:center}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header::-webkit-input-placeholder{color:#fff}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header::-moz-placeholder{color:#fff}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header:-moz-placeholder{color:#fff}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header:-ms-input-placeholder{color:#fff}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header:focus::-webkit-input-placeholder{color:transparent}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header:focus::-moz-placeholder{color:transparent}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header:focus:-moz-placeholder{color:transparent}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__input.sc-cnt-flexy-view-saqhan-promo-header:focus:-ms-input-placeholder{color:transparent}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__btn.sc-cnt-flexy-view-saqhan-promo-header{width:180px;height:56px;font-size:15px;line-height:22px;margin-left:16px;background-color:transparent;color:#c78030;border:1px solid #c78030;cursor:pointer}.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__btn.sc-cnt-flexy-view-saqhan-promo-header:hover{-webkit-box-shadow:0 0 10px #c78030;box-shadow:0 0 10px #c78030}.openModal.sc-cnt-flexy-view-saqhan-promo-header{-webkit-animation-name:openModal;animation-name:openModal;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-name:openModal;-webkit-animation-duration:1.5s}@-webkit-keyframes openModal{from{opacity:0.1}to{opacity:1}}@keyframes openModal{from{opacity:0.1}to{opacity:1}}.more-splash.sc-cnt-flexy-view-saqhan-promo-header{-webkit-animation-name:splash;animation-name:splash;-webkit-animation-duration:1.7s;animation-duration:1.7s}#hide-blockTop.sc-cnt-flexy-view-saqhan-promo-header{display:none;width:60%;margin:auto;padding:10px;background-color:#fe6347}#phoneTop.sc-cnt-flexy-view-saqhan-promo-header{-webkit-transition:1s ease all;transition:1s ease all}.more-splash.sc-cnt-flexy-view-saqhan-promo-header{-webkit-animation-name:splash;animation-name:splash;-webkit-animation-duration:1.7s;animation-duration:1.7s}@media (max-width: 767px){#navbarTop.sc-cnt-flexy-view-saqhan-promo-header{margin:0 15px}.logotip.sc-cnt-flexy-view-saqhan-promo-header{text-align:center;margin-bottom:10px}}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-header{background-color:#1a1b1e}.myBtn.sc-cnt-flexy-view-saqhan-promo-header{margin-top:30px}@media (max-width: 1024px){.overlay.sc-cnt-flexy-view-saqhan-promo-header .popup-form__btn.sc-cnt-flexy-view-saqhan-promo-header{margin-left:0px}}@media (max-width: 768px){.titleBlock.sc-cnt-flexy-view-saqhan-promo-header{font-size:30px;padding:10px}.logo.sc-cnt-flexy-view-saqhan-promo-header img.sc-cnt-flexy-view-saqhan-promo-header{width:100px}}";
var CntFlexyViewSaqhanPromoHeader = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoHeader(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoHeader.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("cnt-flexy-view-saqhan-promo-sticky-top", { navItems: this.categories.stickyTop, socialLinks: this.categories.socilaLinks }), h("div", { class: "container-fluid head", style: { backgroundImage: "url(" + this.categories.backgroundImage + ")" } }, h("div", { class: "row flex-center" }, h("div", { class: "topContent wow animation_duration animate__fadeIn " }, h("div", { class: "logo", style: { backgroundImage: "url(" + this.categories.logoMain + ")" } }), h("div", { class: "titleBlock " }, this.categories.headerTitle), h("button", { id: "myBtn", class: "button myBtn sendBtn", onClick: function () { return _this.showModal(); }, ref: function (el) { return (_this.sendBtn = el); } }, h("span", null, this.categories.headerBtnTitle), " ")))), h("div", { class: "overlay openModal", id: "openModal", ref: function (el) { return (_this.overlay = el); } }, h("div", { class: "popup" }, h("div", { class: "popup-close", onClick: function () { return _this.closeModal(); } }, "\u00D7"), h("div", { class: "popup-title" }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443!"), h("div", { class: "popup-form", style: { backgroundImage: "url(http://saqhan.ru/img/pre-stage/modal_bg.jpg)" } }, h("form", { id: "overlayForm", action: "#", class: "main-form" }, h("label", { class: "popup-form__label", htmlfor: "phone" }, "\u041E\u0441\u0442\u0430\u0432\u0442\u044C\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0412\u0430\u043C\u0438!"), h("input", { class: "popup-form__input", id: "phoneTop", name: "phone", type: "tel", placeholder: "+7(965) 954-00-34" }), h("button", { class: "button popup-form__btn" }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443!"), h("div", { id: "hide-blockTop" }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443! \u041C\u044B \u0441\u043A\u043E\u0440\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438!")))))));
    };
    /*
     * showModal
     * **/
    CntFlexyViewSaqhanPromoHeader.prototype.showModal = function () {
        console.log("showModal");
        this.overlay.style.display = "block";
        document.body.style.overflow = "hidden";
        this.sendBtn.classList.add("more-plash");
    };
    /*
     * close Modal
     * **/
    CntFlexyViewSaqhanPromoHeader.prototype.closeModal = function () {
        this.overlay.style.display = "none";
        document.body.style.overflow = "";
        this.sendBtn.classList.remove("more-plash");
    };
    return CntFlexyViewSaqhanPromoHeader;
}());
CntFlexyViewSaqhanPromoHeader.style = cntFlexyViewSaqhanPromoHeaderCss;
var cntFlexyViewSaqhanPromoHeaderWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-header-wrapper-1_01-h{display:block}";
var CntFlexyViewSaqhanPromoHeaderWrapper = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoHeaderWrapper(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoHeaderWrapper.prototype.render = function () {
        return (h("cnt-flexy-view-saqhan-promo-header", { categories: this.categories }));
    };
    return CntFlexyViewSaqhanPromoHeaderWrapper;
}());
CntFlexyViewSaqhanPromoHeaderWrapper.style = cntFlexyViewSaqhanPromoHeaderWrapperCss;
var cntFlexyViewSaqhanPromoPortfolioCss = "#portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio::before{content:'';display:block;height:75px;margin-top:-75px;visibility:hidden}.portfolio-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio{margin-bottom:30px}.cars-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center}.card-portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio{width:100%;height:390px;border:1px solid #ccc;-webkit-transition:0.3s ease;transition:0.3s ease;margin-bottom:30px}.card-portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio:hover{-webkit-box-shadow:0px 0px 20px 10px #cccccc;box-shadow:0px 0px 20px 10px #cccccc}.portfolio-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio .title.sc-cnt-flexy-view-saqhan-promo-portfolio{font-size:40px;text-align:center;margin-bottom:30px}.card-portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio .img.sc-cnt-flexy-view-saqhan-promo-portfolio{width:100%;height:275px;background-position:top;background-size:cover}.details.sc-cnt-flexy-view-saqhan-promo-portfolio{padding:10px 15px 0px 15px}.description.sc-cnt-flexy-view-saqhan-promo-portfolio{text-align:center;margin:10px 15px 15px 0px}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio a.sc-cnt-flexy-view-saqhan-promo-portfolio{border:none;cursor:pointer;padding:5px 10px;-webkit-transition:0.3s ease;transition:0.3s ease}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio a.sc-cnt-flexy-view-saqhan-promo-portfolio:hover{text-decoration:none}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio .check-app.sc-cnt-flexy-view-saqhan-promo-portfolio:hover{background-color:#fe6347;color:#fff}.check-in-github.sc-cnt-flexy-view-saqhan-promo-portfolio:hover{background-color:#fe6347;color:#fff}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio ul.sc-cnt-flexy-view-saqhan-promo-portfolio li.sc-cnt-flexy-view-saqhan-promo-portfolio{list-style:none;display:inline-block;padding:5px 15px;cursor:pointer;-webkit-transition:0.3s ease;transition:0.3s ease}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio ul.sc-cnt-flexy-view-saqhan-promo-portfolio{height:34px}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio ul.sc-cnt-flexy-view-saqhan-promo-portfolio li.sc-cnt-flexy-view-saqhan-promo-portfolio:hover{color:#fe6347}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio .active.sc-cnt-flexy-view-saqhan-promo-portfolio{color:#fe6347;border-bottom:1px solid #fe6347}@media (max-width: 375px){.cars-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio{margin-top:40px}}";
var CntFlexyViewSaqhanPromoPortfolio = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoPortfolio(hostRef) {
        registerInstance(this, hostRef);
        this.portfolioCardState = this.payload.portfolioCard;
    }
    CntFlexyViewSaqhanPromoPortfolio.prototype.render = function () {
        return (h("div", { class: "portfolio-wrapper wow animation_duration animate__fadeInUp", id: 'portfolio' }, h("div", { class: "container" }, h("div", { class: "title " }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"), h("div", { class: "categories " }, h("ul", null, this.getCategories(this.payload.categoriesPortfolio))), h("div", { class: "cars-wrapper   row" }, this.getCard(this.portfolioCardState)))));
    };
    /**
     * get a card
     * */
    CntFlexyViewSaqhanPromoPortfolio.prototype.getCard = function (array) {
        return array.map(function (item) {
            return (h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "card-portfolio  wow animation_duration animate__fadeIn " }, h("div", { class: "img", style: { backgroundImage: "url(" + item.img + ")" } }), h("div", { class: "details" }, h("div", { class: "description" }, item.title), h("div", { class: "btns" }, h("a", { target: "_blank", href: item.linkApp, class: "check-app" }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", h("i", { class: "fas fa-external-link-alt" })), item.linkGithub.length ? (h("a", { target: "_blank", href: item.linkGithub, class: "check-in-github" }, "Github ", h("i", { class: "fab fa-github" }))) : (""))))));
        });
    };
    /**
     * get category
     * */
    CntFlexyViewSaqhanPromoPortfolio.prototype.getCategories = function (array) {
        var _this = this;
        return array.map(function (item) {
            return (h("li", { class: { active: item.id === _this.lastClickedCategory }, onClick: function () { return _this.filterCategoryPortfolioHandler(item.id); } }, item.name));
        });
    };
    CntFlexyViewSaqhanPromoPortfolio.prototype.filterCategoryPortfolioHandler = function (id) {
        this.lastClickedCategory = id;
        return id !== "all"
            ? (this.portfolioCardState = this.payload.portfolioCard.filter(function (item) { return item.category === id; }))
            : (this.portfolioCardState = this.payload.portfolioCard);
    };
    return CntFlexyViewSaqhanPromoPortfolio;
}());
CntFlexyViewSaqhanPromoPortfolio.style = cntFlexyViewSaqhanPromoPortfolioCss;
var cntFlexyViewSaqhanPromoPortfolioWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01-h{display:block}";
var CntFlexyViewSaqhanPromoPortfolioWrapper = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoPortfolioWrapper(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoPortfolioWrapper.prototype.render = function () {
        return (h("cnt-flexy-view-saqhan-promo-portfolio", { payload: this.payload }));
    };
    return CntFlexyViewSaqhanPromoPortfolioWrapper;
}());
CntFlexyViewSaqhanPromoPortfolioWrapper.style = cntFlexyViewSaqhanPromoPortfolioWrapperCss;
var cntFlexyViewSaqhanPromoSkilsCss = ".title.sc-cnt-flexy-view-saqhan-promo-skils{font-size:40px;text-align:center}.wrapper-cards.sc-cnt-flexy-view-saqhan-promo-skils{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:60px}#skills.sc-cnt-flexy-view-saqhan-promo-skils::before{content:'';display:block;height:75px;margin-top:-75px;visibility:hidden}";
var CntFlexyViewSaqhanPromoSkils = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoSkils(hostRef) {
        registerInstance(this, hostRef);
        this.payload = [];
    }
    CntFlexyViewSaqhanPromoSkils.prototype.render = function () {
        return (h("div", { class: "wow animation_duration animate__fadeInUp", id: "skills" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col-12" }, h("div", { class: "title" }, "\u041D\u0430\u0432\u044B\u043A\u0438"))), h("div", { class: "row wrapper-cards" }, h(SkillsCard, { skills: this.payload })))));
    };
    return CntFlexyViewSaqhanPromoSkils;
}());
var SkillsCard = function (props) {
    return props.skills.map(function (item) {
        return (h("div", { class: "col-md-6" }, h("cnt-flexy-view-saqhan-promo-skils-card", { skills: item })));
    });
};
CntFlexyViewSaqhanPromoSkils.style = cntFlexyViewSaqhanPromoSkilsCss;
var cntFlexyViewSaqhanPromoSkilsCardCss = ".state-wrapper.sc-cnt-flexy-view-saqhan-promo-skils-card{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.card-skills.sc-cnt-flexy-view-saqhan-promo-skils-card{margin-top:30px}.progress.sc-cnt-flexy-view-saqhan-promo-skils-card{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;height:6px;line-height:0;font-size:.75rem;background-color:#ccc;border-radius:.25rem}.progress-bar.sc-cnt-flexy-view-saqhan-promo-skils-card{background-color:#fe6347;-webkit-animation:filling 1s;animation:filling 1s}@-webkit-keyframes filling{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}}@keyframes filling{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}}";
var CntFlexyViewSaqhanPromoSkilsCard = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoSkilsCard(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoSkilsCard.prototype.render = function () {
        return (h("div", { class: "card-skills" }, h("div", { class: "state-wrapper" }, h("div", { class: "name" }, this.skills.name), h("div", { class: "number" }, this.skills.percent, "%")), h("div", { class: "progress" }, h("div", { class: "wow progress-bar", style: { width: this.skills.percent + "%" } }))));
    };
    return CntFlexyViewSaqhanPromoSkilsCard;
}());
CntFlexyViewSaqhanPromoSkilsCard.style = cntFlexyViewSaqhanPromoSkilsCardCss;
var cntFlexyViewSaqhanPromoSkilsWrapperCss = ".sc-cnt-flexy-view-saqhan-promo-skils-wrapper-1_01-h{display:block}";
var CntFlexyViewSaqhanPromoSkilsWrapper = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoSkilsWrapper(hostRef) {
        registerInstance(this, hostRef);
        this.payload = [];
    }
    CntFlexyViewSaqhanPromoSkilsWrapper.prototype.render = function () {
        return (h("cnt-flexy-view-saqhan-promo-skils", { payload: this.payload }));
    };
    return CntFlexyViewSaqhanPromoSkilsWrapper;
}());
CntFlexyViewSaqhanPromoSkilsWrapper.style = cntFlexyViewSaqhanPromoSkilsWrapperCss;
var cntFlexyViewSaqhanPromoStickyTopCss = ".navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:0}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top .navbar-nav.sc-cnt-flexy-view-saqhan-promo-sticky-top .nav-link.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fff;font-size:14px}.navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:0}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top{background-color:#1a1b1e}.navbar.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top>.container.sc-cnt-flexy-view-saqhan-promo-sticky-top-1_01.sc-cnt-flexy-view-saqhan-promo-sticky-top{position:relative}.nav-link.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:0.5rem 1rem}li.nav-item.active.sc-cnt-flexy-view-saqhan-promo-sticky-top,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top{-webkit-transition:0.3s ease;transition:0.3s ease}li.nav-item.active.sc-cnt-flexy-view-saqhan-promo-sticky-top,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top:hover,li.nav-item.sc-cnt-flexy-view-saqhan-promo-sticky-top:focus{background-color:#007bff}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top{background-color:#1a1b1e}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top .navbar-text.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:rgba(255, 255, 255, 0.5)}.navbar-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top .navbar-text.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fff}mom-social-icons.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{width:30px;height:30px;display:block;text-align:center;line-height:30px;font-size:18px;color:#f0f0f0}.mom-social-icons.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{width:30px;height:30px;display:block;text-align:center;line-height:30px;font-size:18px;color:#f0f0f0}.menu.sc-cnt-flexy-view-saqhan-promo-sticky-top{position:fixed;top:0;z-index:100;width:100%;height:70px;-webkit-transition:all 0.5s;transition:all 0.5s}.menu-wrapper.sc-cnt-flexy-view-saqhan-promo-sticky-top{z-index:1;margin-top:50px;-webkit-transition:all 0.3s;transition:all 0.3s}.menu.menu-active.sc-cnt-flexy-view-saqhan-promo-sticky-top .menu-wrapper.sc-cnt-flexy-view-saqhan-promo-sticky-top{margin-top:25px}.menu-wrapper.sc-cnt-flexy-view-saqhan-promo-sticky-top nav.sc-cnt-flexy-view-saqhan-promo-sticky-top{font-size:14px;line-height:20px;text-transform:uppercase;font-weight:700;margin-bottom:30px}ul.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:0;list-style:none;margin:0}.menu-active.sc-cnt-flexy-view-saqhan-promo-sticky-top{background-color:#fff;-webkit-box-shadow:0 5px 8px 0 rgba(0, 0, 0, 0.14);box-shadow:0 5px 8px 0 rgba(0, 0, 0, 0.14)}.menu-mobile-button.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fff;opacity:0.5;-webkit-transition:all 0.3s;transition:all 0.3s;background-color:transparent;border:none;padding:0}.menu-mobile-button.sc-cnt-flexy-view-saqhan-promo-sticky-top i.sc-cnt-flexy-view-saqhan-promo-sticky-top{font-size:18px}.menu-active.sc-cnt-flexy-view-saqhan-promo-sticky-top .menu-mobile-button.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#555;opacity:0.9}.mobile-menu.sc-cnt-flexy-view-saqhan-promo-sticky-top{position:fixed;top:20px;left:0;width:0;height:0;overflow:hidden;text-align:center;z-index:9999;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;padding:0;background-color:#343a40d1;opacity:1}.mobile-menu.active.sc-cnt-flexy-view-saqhan-promo-sticky-top{height:auto;width:100%;top:0;opacity:1}.mobile-menu-close.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fff;cursor:pointer;padding:5px 10px;background-color:#cccccc;-webkit-transition:all 0.3s;transition:all 0.3s;position:absolute;top:50px;border:none}.mobile-menu-wrapper.sc-cnt-flexy-view-saqhan-promo-sticky-top{height:100%;overflow:auto;font-size:14px;line-height:20px;text-transform:uppercase;font-weight:700;margin-top:60px}.mobile-menu-wrapper.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top{padding:30px 0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:100%}.mobile-menu-wrapper.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fe6347}.mobile-menu-close.sc-cnt-flexy-view-saqhan-promo-sticky-top span.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#fe6347}#navbarTop.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top{list-style:none;display:inline-block}.menu-desktop.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top{display:-ms-flexbox;display:flex}.menu-desktop.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top{list-style:none;display:inline}.menu-desktop.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top{color:#ffffff}.menu-desktop.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top a.sc-cnt-flexy-view-saqhan-promo-sticky-top:hover{color:#fe6347}.menu-desktop.sc-cnt-flexy-view-saqhan-promo-sticky-top ul.sc-cnt-flexy-view-saqhan-promo-sticky-top li.sc-cnt-flexy-view-saqhan-promo-sticky-top:hover{background-color:#ffffff}.menu-main.sc-cnt-flexy-view-saqhan-promo-sticky-top{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%}.bg-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top{background-color:#1a1b1e}@media (max-width: 992px){.soc-links.sc-cnt-flexy-view-saqhan-promo-sticky-top,.bg-dark.sc-cnt-flexy-view-saqhan-promo-sticky-top{display:none}}";
var CntFlexyViewSaqhanPromoStickyTop = /** @class */ (function () {
    function CntFlexyViewSaqhanPromoStickyTop(hostRef) {
        registerInstance(this, hostRef);
    }
    CntFlexyViewSaqhanPromoStickyTop.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("div", { class: "menu", ref: function (el) { return (_this.menuTag = el); } }, h("div", { class: "container-fluid bg-dark" }, h("div", { class: "container  " }, h("div", { class: "row" }, h("div", { class: "menu-main" }, h("div", { class: "menu-desktop" }, h("ul", null, this.getItemSticky(this.navItems))), h("div", { class: " soc-links " }, h("ul", { class: "nav mom-social-icons" }, this.getItemLinks(this.socialLinks))))))), h("div", { class: "menu-wrapper col-md-12 d-lg-none" }, !this.isShowBar ?
            h("button", { type: "button", class: "menu-mobile-button", onClick: function () { return _this.showMobileMenuHandler(); } }, h("span", null, h("i", { class: "fa fa-bars" }))) : '')), h("div", { class: "mobile-menu d-lg-none", ref: function (el) { return (_this.mobileMenuTag = el); } }, h("div", { class: "container" }, h("div", { class: "mobile-menu-close", onClick: function () { return _this.showMobileMenuHandler(); } }, h("span", null, h("i", { class: "fas fa-times" }))), h("nav", { class: "mobile-menu-wrapper" }, h("ul", null, this.getItemSticky(this.navItems)))))));
    };
    /**
     * for items sticky
     * */
    CntFlexyViewSaqhanPromoStickyTop.prototype.getItemSticky = function (array) {
        return array.map(function (item) {
            return (h("li", { class: "nav-item " }, h("a", { class: "nav-link anchor", href: "#" + item.id }, item.name)));
        });
    };
    /**
     * for items sticky
     * */
    CntFlexyViewSaqhanPromoStickyTop.prototype.getItemLinks = function (array) {
        return array.map(function (item) {
            return (h("li", { class: item.name }, h("a", { target: "_blank", rel: "fa-icon-vk", href: item.links }, h("i", { class: item.class }))));
        });
    };
    /**
     * Открытие и закрытие мобильного меню при нажатии на иконки
     */
    CntFlexyViewSaqhanPromoStickyTop.prototype.showMobileMenuHandler = function () {
        this.mobileMenuTag.classList.toggle("active");
        this.isShowBar = true;
        console.log(this.isShowBar);
    };
    return CntFlexyViewSaqhanPromoStickyTop;
}());
CntFlexyViewSaqhanPromoStickyTop.style = cntFlexyViewSaqhanPromoStickyTopCss;
/*
 * данные для первого блока и меню
 * */
var header = {
    stickyTop: [
        {
            id: "about-me",
            name: "Обо мне",
        },
        {
            id: "skills",
            name: "Навыки",
        },
        {
            id: "portfolio",
            name: "Портфолио",
        },
        {
            id: "contacts",
            name: "Контакты",
        },
    ],
    headerTitle: "Профессиональная разработка сайтов",
    headerBtnTitle: "отправить завку",
    logoMain: "http://saqhan.ru/img/pre-stage/logo.png",
    backgroundImage: 'http://saqhan.ru/img/pre-stage/main_bg.jpg',
    socilaLinks: [
        {
            name: 'vkontakte',
            class: 'fab fa-vk',
            links: 'https://vk.com/saqhan'
        },
        {
            name: 'instagram',
            class: 'fab fa-instagram',
            links: 'https://www.instagram.com/saqhan/'
        },
        {
            name: 'github',
            class: 'fab fa-github',
            links: 'https://github.com/saqhan'
        },
    ],
    footerBackgroundImage: 'http://saqhan.ru/img/pre-stage/footer-bg.jpg',
};
/*
 * Данные для блока Обо мне
 * */
var aboutMe = {
    title: "Обо мне",
    subTitle: "познакомимся по ближе",
    aboutMe: {
        title: "Немного о себе",
        text: "Сайхан, 26 лет. " +
            "Занимаюсь разработкой сайтов с нуля, под ключ. Специалист по CMS WordPress. Выполняю верстку и программирование сайтов. Добавляю весь необходимый функционал на сайт. Делаю адаптивную верстку на Bootstrap, таким образом Ваш сайт будет отлично выглядеть на всех устройствах. Любой начатый проект довожу до конца, постоянно совершенствую свой профессиональный уровень. Вы можете заказать у меня разработку сайта с нуля, или связаться со мной для сотрудничества.",
    },
    img: "http://saqhan.ru/img/pre-stage/saqhan.jpg",
    contacts: {
        name: "Сайхан Абаев",
        text: "Профессиональное создание сайтов: разработка дизайна, HTML верстка, посадка на CMS WordPress, программирование на PHP, JavaScript. ",
        phone: "+ 7 (965) 954 00 34",
        email: "saqhan1@mail.ru",
    },
    socilaLinks: [
        {
            name: 'vkontakte',
            class: 'fab fa-vk',
            links: 'https://vk.com/saqhan'
        },
        {
            name: 'instagram',
            class: 'fab fa-instagram',
            links: 'https://www.instagram.com/saqhan/'
        },
        {
            name: 'github',
            class: 'fab fa-github',
            links: 'https://github.com/saqhan'
        },
    ],
};
var portfolio = {
    portfolioCard: [
        {
            id: 1,
            title: "Module Chat",
            linkGithub: "https://github.com/saqhan/contacts",
            linkApp: "https://saqhan.github.io/contacts/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 2,
            title: "Mobile Chat",
            linkGithub: "https://github.com/saqhan/contacts",
            linkApp: "https://saqhan.github.io/contacts/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 3,
            title: "Contacts",
            linkGithub: "https://github.com/saqhan/contacts",
            linkApp: "https://saqhan.github.io/contacts/",
            img: "http://saqhan.ru/img/pre-stage/react.jpg",
            category: "react",
        },
        {
            id: 4,
            title: "Приложение no-twitter.",
            linkGithub: "https://github.com/saqhan/no-twitter/",
            linkApp: "https://saqhan.github.io/no-twitter/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 9,
            title: "Министерство автомобильных дорог",
            linkGithub: "",
            linkApp: "https://www.minavtodor-chr.ru/",
            img: "http://saqhan.ru/img/pre-stage/minavtodor.jpg",
            category: "wordpress",
        },
        {
            id: 5,
            title: "Todo приложение нa Angular",
            linkGithub: "https://github.com/saqhan/ng-todo/",
            linkApp: "https://saqhan.github.io/ng-todo/",
            img: "http://saqhan.ru/img/pre-stage/angular.jpg",
            category: "angular",
        },
        {
            id: 6,
            title: "Chat приложение нa React",
            linkGithub: "https://github.com/saqhan/chat",
            linkApp: "https://saqhan.github.io/chat/",
            img: "http://saqhan.ru/img/pre-stage/react.jpg",
            category: "react",
        },
        {
            id: 7,
            title: "Интернет магазин детских товаров",
            linkGithub: "",
            linkApp: "https://wowchild.ru/",
            img: "http://saqhan.ru/img/pre-stage/kids.jpg",
            category: "wordpress",
        },
        {
            id: 8,
            title: "Префектура Ленинского района ЧР",
            linkGithub: "",
            linkApp: "https://prefect-len.ru/",
            img: "http://saqhan.ru/img/pre-stage/len-pre.jpg",
            category: "wordpress",
        },
    ],
    categoriesPortfolio: [
        {
            id: "all",
            name: "Все",
        },
        {
            id: "angular",
            name: "Angular",
        },
        {
            id: "react",
            name: "React",
        },
        {
            id: "wordpress",
            name: "WordPress",
        },
    ],
};
var skills = [
    {
        name: 'HTML',
        percent: 75,
    },
    {
        name: 'CSS',
        percent: 70,
    },
    {
        name: 'JS',
        percent: 35,
    },
    {
        name: 'Angular',
        percent: 37,
    },
    {
        name: 'React',
        percent: 45,
    },
    {
        name: 'Wordpress',
        percent: 80,
    },
    {
        name: 'JQuery',
        percent: 65,
    },
    {
        name: 'Photoshop',
        percent: 50,
    },
];
var contactForm = {
    title: 'Контакты',
    subTitle: 'Позвоните или напишите на почту',
    number: '+ 7 (965) 954 00 34',
    email: 'saqhan1@mail.ru',
    backgroundImage: 'http://saqhan.ru/img/pre-stage/9.svg'
};
var myComponentCss = ".sc-my-component-h{display:block}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.render = function () {
        return (h("div", null, h("cnt-flexy-view-saqhan-promo-header-wrapper-1_01", { categories: header }), h("cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01", { payload: aboutMe }), h("cnt-flexy-view-saqhan-promo-skils-wrapper-1_01", { payload: skills }), h("cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01", { payload: portfolio }), h("cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01", { payload: contactForm }), h("cnt-flexy-view-saqhan-promo-footer-wrapper", { categories: header })));
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
export { CntFlexyViewSaqhanPromoAboutMe as cnt_flexy_view_saqhan_promo_about_me, CntFlexyViewSaqhanPromoAboutMeWrapper as cnt_flexy_view_saqhan_promo_about_me_wrapper_1_01, CntFlexyViewSaqhanPromoContactForm as cnt_flexy_view_saqhan_promo_contact_form, CntFlexyViewSaqhanPromoContactFormWrapper as cnt_flexy_view_saqhan_promo_contact_form_wrapper_1_01, CntFlexyViewSaqhanPromoFooter as cnt_flexy_view_saqhan_promo_footer, CntFlexyViewSaqhanPromoFooterWrapper as cnt_flexy_view_saqhan_promo_footer_wrapper, CntFlexyViewSaqhanPromoHeader as cnt_flexy_view_saqhan_promo_header, CntFlexyViewSaqhanPromoHeaderWrapper as cnt_flexy_view_saqhan_promo_header_wrapper_1_01, CntFlexyViewSaqhanPromoPortfolio as cnt_flexy_view_saqhan_promo_portfolio, CntFlexyViewSaqhanPromoPortfolioWrapper as cnt_flexy_view_saqhan_promo_portfolio_wrapper_1_01, CntFlexyViewSaqhanPromoSkils as cnt_flexy_view_saqhan_promo_skils, CntFlexyViewSaqhanPromoSkilsCard as cnt_flexy_view_saqhan_promo_skils_card, CntFlexyViewSaqhanPromoSkilsWrapper as cnt_flexy_view_saqhan_promo_skils_wrapper_1_01, CntFlexyViewSaqhanPromoStickyTop as cnt_flexy_view_saqhan_promo_sticky_top, MyComponent as my_component };
