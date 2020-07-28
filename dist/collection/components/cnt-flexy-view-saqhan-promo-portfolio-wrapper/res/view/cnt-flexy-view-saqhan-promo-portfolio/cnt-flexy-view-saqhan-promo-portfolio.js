import { Component, h, Prop, State } from "@stencil/core";
export class CntFlexyViewSaqhanPromoPortfolio {
    constructor() {
        this.portfolioCardState = this.payload.portfolioCard;
    }
    render() {
        return (h("div", { class: "portfolio-wrapper wow animation_duration animate__fadeInUp", id: 'portfolio' },
            h("div", { class: "container" },
                h("div", { class: "title " }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"),
                h("div", { class: "categories " },
                    h("ul", null, this.getCategories(this.payload.categoriesPortfolio))),
                h("div", { class: "cars-wrapper   row" }, this.getCard(this.portfolioCardState)))));
    }
    /**
     * get a card
     * */
    getCard(array) {
        return array.map((item) => {
            return (h("div", { class: "col-12 col-md-6 col-lg-4" },
                h("div", { class: "card-portfolio  wow animation_duration animate__fadeIn " },
                    h("div", { class: "img", style: { backgroundImage: `url(${item.img})` } }),
                    h("div", { class: "details" },
                        h("div", { class: "description" }, item.title),
                        h("div", { class: "btns" },
                            h("a", { target: "_blank", href: item.linkApp, class: "check-app" },
                                "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 ",
                                h("i", { class: "fas fa-external-link-alt" })),
                            item.linkGithub.length ? (h("a", { target: "_blank", href: item.linkGithub, class: "check-in-github" },
                                "Github ",
                                h("i", { class: "fab fa-github" }))) : (""))))));
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
        this.lastClickedCategory = id;
        return id !== "all"
            ? (this.portfolioCardState = this.payload.portfolioCard.filter((item) => item.category === id))
            : (this.portfolioCardState = this.payload.portfolioCard);
    }
    static get is() { return "cnt-flexy-view-saqhan-promo-portfolio"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-portfolio.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cnt-flexy-view-saqhan-promo-portfolio.css"]
    }; }
    static get properties() { return {
        "payload": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "PortfolioInterface",
                "resolved": "PortfolioInterface",
                "references": {
                    "PortfolioInterface": {
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
    static get states() { return {
        "portfolioCardState": {},
        "lastClickedCategory": {}
    }; }
}
