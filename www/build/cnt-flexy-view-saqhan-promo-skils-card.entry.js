import { r as registerInstance, h } from './index-54bf13c8.js';

const cntFlexyViewSaqhanPromoSkilsCardCss = ".state-wrapper.sc-cnt-flexy-view-saqhan-promo-skils-card{display:flex;justify-content:space-between}.card-skills.sc-cnt-flexy-view-saqhan-promo-skils-card{margin-top:30px}.progress.sc-cnt-flexy-view-saqhan-promo-skils-card{display:flex;height:1rem;overflow:hidden;height:6px;line-height:0;font-size:.75rem;background-color:#ccc;border-radius:.25rem}.progress-bar.sc-cnt-flexy-view-saqhan-promo-skils-card{background-color:#fe6347;animation:filling 1s}@keyframes filling{0%{transform:scaleX(0);transform-origin:left}100%{transform:scaleX(1);transform-origin:left}}";

const CntFlexyViewSaqhanPromoSkilsCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "card-skills" }, h("div", { class: "state-wrapper" }, h("div", { class: "name" }, this.skills.name), h("div", { class: "number" }, this.skills.percent, "%")), h("div", { class: "progress" }, h("div", { class: "wow progress-bar", style: { width: `${this.skills.percent}%` } }))));
    }
};
CntFlexyViewSaqhanPromoSkilsCard.style = cntFlexyViewSaqhanPromoSkilsCardCss;

export { CntFlexyViewSaqhanPromoSkilsCard as cnt_flexy_view_saqhan_promo_skils_card };
