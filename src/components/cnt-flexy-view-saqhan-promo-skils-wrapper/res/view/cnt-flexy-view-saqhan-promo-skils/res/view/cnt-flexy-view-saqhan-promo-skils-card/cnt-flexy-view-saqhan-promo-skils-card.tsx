import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { SkillsInterface } from "../../../../../../../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-skils-card",
  styleUrl: "cnt-flexy-view-saqhan-promo-skils-card.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoSkilsCard implements ComponentInterface {
  /**
   * data for cards
   * */
  @Prop() skills: SkillsInterface;

  render() {
    return (
      <div class="card-skills">
        <div class="state-wrapper">
          <div class="name">{this.skills.name}</div>
          <div class="number">{this.skills.percent}%</div>
        </div>
        <div class="progress">
          <div class="wow progress-bar"
            style={{width: `${this.skills.percent}%`}}
          ></div>
        </div>
      </div>
    );
  }
}
