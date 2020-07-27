import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { SkillsInterface } from "../../../../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-skils",
  styleUrl: "cnt-flexy-view-saqhan-promo-skils.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoSkils implements ComponentInterface {
  @Prop() payload: SkillsInterface[] = [];

  render() {
    return (
      <div class="wow animation_duration animate__fadeInUp" id="skills" >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="title">Навыки</div>
            </div>
          </div>
          <div class="row wrapper-cards">
            {<SkillsCard skills={this.payload}></SkillsCard>}
          </div>
        </div>
      </div>
    );
  }
}

const SkillsCard = (props) => {
  return props.skills.map((item) => {
    return (
      <div class="col-md-6">
        <cnt-flexy-view-saqhan-promo-skils-card
          skills={item}
        ></cnt-flexy-view-saqhan-promo-skils-card>
      </div>
    );
  });
};
