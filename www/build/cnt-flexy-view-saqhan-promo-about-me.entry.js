import { r as registerInstance, h } from './index-54bf13c8.js';

const cntFlexyViewSaqhanPromoAboutMeCss = ".about-me.sc-cnt-flexy-view-saqhan-promo-about-me{animation-duration:1s}.about-blocks-wrapper.sc-cnt-flexy-view-saqhan-promo-about-me{display:flex;justify-content:space-between;align-content:center}.about-blocks-wrapper.sc-cnt-flexy-view-saqhan-promo-about-me div.sc-cnt-flexy-view-saqhan-promo-about-me{padding-bottom:30px}.wrapper-title-about.sc-cnt-flexy-view-saqhan-promo-about-me{padding:50px 0px}.titleBlock.sc-cnt-flexy-view-saqhan-promo-about-me{letter-spacing:10px;font-size:40px;text-align:center}.subtitleBlock.sc-cnt-flexy-view-saqhan-promo-about-me{font-size:20px;letter-spacing:5px}.aboutContactsubtitle.sc-cnt-flexy-view-saqhan-promo-about-me i.sc-cnt-flexy-view-saqhan-promo-about-me{color:#fe6347;margin-right:10px}.aboutContactsubtitle.sc-cnt-flexy-view-saqhan-promo-about-me a.sc-cnt-flexy-view-saqhan-promo-about-me{margin-right:5px}";

const CntFlexyViewSaqhanPromoAboutMe = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "wow animation_duration animate__fadeInUp", id: "about-me" }, h("div", { class: "container " }, h("div", { class: "row" }, h("div", { class: "col-sm-12 wrapper-title-about" }, h("div", { class: "titleBlock  " }, this.payload.title), h("div", { class: "subtitleBlock text-center lsp" }, this.payload.subTitle))), h("div", { class: "row  about-blocks-wrapper" }, h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "subtitleBlock text-center lsp pb-3" }, this.payload.aboutMe.title), h("div", { class: "text-justify" }, this.payload.aboutMe.text)), h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "myPhoto text-center" }, h("img", { src: this.payload.img, alt: "Saqhan" }))), h("div", { class: "col-12 col-md-12 col-lg-4" }, h("div", { class: "aboutContactsubtitle pb-3 " }, h("b", { class: "title-center" }, this.payload.contacts.name), h("br", null), h("br", null), this.payload.contacts.text, h("br", null), h("br", null), h("br", null), h("i", { class: "fas fa-phone-alt" }), " ", h("span", null, this.payload.contacts.phone), h("br", null), h("i", { class: "far fa-envelope" }), " ", h("span", null, this.payload.contacts.email), h("br", null), " ", h("br", null), " ", this.getSocialLinks(this.payload.socilaLinks)))))));
    }
    getSocialLinks(array) {
        return array.map(item => {
            return h("a", { href: item.links, target: "_blank", class: "footer-social-link ", "data-wow-delay": "0.2s" }, h("i", { class: item.class }));
        });
    }
};
CntFlexyViewSaqhanPromoAboutMe.style = cntFlexyViewSaqhanPromoAboutMeCss;

export { CntFlexyViewSaqhanPromoAboutMe as cnt_flexy_view_saqhan_promo_about_me };
