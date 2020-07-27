import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {SkillsInterface} from "../res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-saqhan-promo-skils-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-saqhan-promo-skils-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewSaqhanPromoSkilsWrapper implements ComponentInterface {

  @Prop() payload: SkillsInterface[] = [];

  render() {
    return (
        <cnt-flexy-view-saqhan-promo-skils payload={this.payload} ></cnt-flexy-view-saqhan-promo-skils>
    );
  }

}
