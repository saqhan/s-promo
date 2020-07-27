import { r as registerInstance, h } from './index-54bf13c8.js';

const cntFlexyViewSaqhanPromoPortfolioCss = ".portfolio-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{margin-bottom:30px}.cars-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{display:flex;align-content:center}.card-portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{width:100%;height:390px;border:1px solid #ccc;cursor:pointer;transition:0.3s ease;margin-bottom:30px}.card-portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01:hover{box-shadow:0px 0px 20px 10px #cccccc}.portfolio-wrapper.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 .title.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{font-size:40px;text-align:center;margin-bottom:30px}.card-portfolio.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 .img.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{width:100%;height:275px;background-position:top;background-size:cover}.details.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{padding:10px 15px 0px 15px}.description.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{text-align:center;margin:10px 15px 15px 0px}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{display:flex;justify-content:space-around;align-items:center}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 a.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{border:none;cursor:pointer;padding:5px 10px;transition:0.3s ease}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 a.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01:hover{text-decoration:none}.btns.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 .check-app.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01:hover{background-color:#fe6347;color:#fff}.check-in-github.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01:hover{background-color:#fe6347;color:#fff}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 ul.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 li.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{list-style:none;display:inline-block;padding:5px 15px;cursor:pointer;transition:0.3s ease}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 ul.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{height:34px}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 ul.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 li.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01:hover{color:#fe6347}.categories.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01 .active.sc-cnt-flexy-view-saqhan-promo-portfolio-1_01{color:#fe6347;border-bottom:1px solid #fe6347}";

const CntFlexyViewSaqhanPromoPortfolio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.portfolioCardState = this.payload.portfolioCard;
    }
    render() {
        return (h("div", { class: "portfolio-wrapper wow animation_duration animate__fadeInUp" }, h("div", { class: "container" }, h("div", { class: "title " }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"), h("div", { class: "categories " }, h("ul", null, this.getCategories(this.payload.categoriesPortfolio))), h("div", { class: "cars-wrapper   row" }, this.getCard(this.portfolioCardState)))));
    }
    /**
     * get a card
     * */
    getCard(array) {
        return array.map((item) => {
            return (h("div", { class: "col-12 col-md-6 col-lg-4" }, h("div", { class: "card-portfolio  wow animation_duration animate__fadeIn " }, h("div", { class: "img", style: { backgroundImage: `url(${item.img})` } }), h("div", { class: "details" }, h("div", { class: "description" }, item.title), h("div", { class: "btns" }, h("a", { target: "_blank", href: item.linkApp, class: "check-app" }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", h("i", { class: "fas fa-external-link-alt" })), item.linkGithub.length ? (h("a", { target: "_blank", href: item.linkGithub, class: "check-in-github" }, "Github ", h("i", { class: "fab fa-github" }))) : (""))))));
        });
    }
    /**
     * get category
     * */
    getCategories(array) {
        return array.map((item) => {
            return (h("li", { class: { active: item.id === this.lastClickedCategory }, onClick: () => this.filterCategoryPortfolioHandler(item.id) }, item.name));
        });
    }
    filterCategoryPortfolioHandler(id) {
        console.log(this.portfolioCardState);
        this.lastClickedCategory = id;
        return id !== "all"
            ? (this.portfolioCardState = this.payload.portfolioCard.filter((item) => item.category === id))
            : (this.portfolioCardState = this.payload.portfolioCard);
    }
};
CntFlexyViewSaqhanPromoPortfolio.style = cntFlexyViewSaqhanPromoPortfolioCss;

export { CntFlexyViewSaqhanPromoPortfolio as cnt_flexy_view_saqhan_promo_portfolio_1_01 };
