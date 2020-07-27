import { r as registerInstance, h } from './index-54bf13c8.js';

const cntFlexyViewSaqhanPromoSkilsCss = ".title.sc-cnt-flexy-view-saqhan-promo-skils-1_01{font-size:40px;text-align:center}.wrapper-cards.sc-cnt-flexy-view-saqhan-promo-skils-1_01{display:flex;justify-content:space-between;margin-bottom:60px}";

const CntFlexyViewSaqhanPromoSkils = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.payload = [];
    }
    render() {
        return (h("div", { class: "wow animation_duration animate__fadeInUp" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col-12" }, h("div", { class: "title" }, "\u041D\u0430\u0432\u044B\u043A\u0438"))), h("div", { class: "row wrapper-cards" }, h(SkillsCard, { skills: this.payload })))));
    }
};
const SkillsCard = (props) => {
    return props.skills.map((item) => {
        return (h("div", { class: "col-md-6" }, h("cnt-flexy-view-saqhan-promo-skils-card", { skills: item })));
    });
};
CntFlexyViewSaqhanPromoSkils.style = cntFlexyViewSaqhanPromoSkilsCss;

export { CntFlexyViewSaqhanPromoSkils as cnt_flexy_view_saqhan_promo_skils_1_01 };
