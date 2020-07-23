import { r as registerInstance, h } from './index-8eb9d8b9.js';

const cntFlexyViewSaqhanPromoAboutMeCss = ".about-blocks-wrapper.sc-cnt-flexy-view-saqhan-promo-about-me-1_01 div.sc-cnt-flexy-view-saqhan-promo-about-me-1_01{padding-bottom:30px}.wrapper-title-about.sc-cnt-flexy-view-saqhan-promo-about-me-1_01{padding:50px 0px}.titleBlock.sc-cnt-flexy-view-saqhan-promo-about-me-1_01{letter-spacing:10px;font-size:40px;text-align:center}.subtitleBlock.sc-cnt-flexy-view-saqhan-promo-about-me-1_01{font-size:20px;letter-spacing:10px}.aboutContactsubtitle.sc-cnt-flexy-view-saqhan-promo-about-me-1_01 i.sc-cnt-flexy-view-saqhan-promo-about-me-1_01{color:#fe6347;margin-right:10px}.aboutContactsubtitle.sc-cnt-flexy-view-saqhan-promo-about-me-1_01 a.sc-cnt-flexy-view-saqhan-promo-about-me-1_01{margin-right:5px}";

const CntFlexyViewSaqhanPromoAboutMe = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", { class: "container", id: "About" }, h("div", { class: "row" }, h("div", { class: "col-sm-12 wrapper-title-about" }, h("div", { class: "titleBlock" }, this.payload.title), h("div", { class: "subtitleBlock text-center lsp" }, this.payload.subTitle))), h("div", { class: "row justify-content-center about-blocks-wrapper" }, h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "subtitleBlock text-center lsp pb-3" }, this.payload.aboutMe.title), h("div", { class: "text-justify" }, this.payload.aboutMe.text)), h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "myPhoto text-center" }, h("img", { src: this.payload.img, alt: "Saqhan" }))), h("div", { class: "col-12 col-md-12 col-lg-4" }, h("div", { class: "aboutContactsubtitle pb-3 " }, h("b", { class: "title-center" }, this.payload.contacts.name), h("br", null), h("br", null), this.payload.contacts.text, h("br", null), h("br", null), h("br", null), h("i", { class: "fas fa-phone-alt" }), " ", h("span", null, this.payload.contacts.phone), h("br", null), h("i", { class: "far fa-envelope" }), " ", h("span", null, this.payload.contacts.email), h("br", null), " ", h("br", null), " ", h("a", { href: "https://vk.com/saqhan", target: "_blank", class: "footer-social-link " }, h("i", { class: "fab fa-vk" })), h("a", { href: "https://www.instagram.com/saqhan/", target: "_blank", class: "footer-social-link ", "data-wow-delay": "0.2s" }, h("i", { class: "fab fa-instagram" }))))))));
    }
};
CntFlexyViewSaqhanPromoAboutMe.style = cntFlexyViewSaqhanPromoAboutMeCss;

export { CntFlexyViewSaqhanPromoAboutMe as cnt_flexy_view_saqhan_promo_about_me_1_01 };
