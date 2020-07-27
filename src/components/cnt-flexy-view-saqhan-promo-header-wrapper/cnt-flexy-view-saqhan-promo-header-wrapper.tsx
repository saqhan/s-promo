import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {HeaderStickyInterface} from "../res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-saqhan-promo-header-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-saqhan-promo-header-wrapper.css',
  shadow: false,
  scoped:true
})
export class CntFlexyViewSaqhanPromoHeaderWrapper implements ComponentInterface {

  /**
   * data for stickuTop€€
   * */
  @Prop() categories: HeaderStickyInterface;

  render() {
    return (
        <cnt-flexy-view-saqhan-promo-header categories={this.categories}></cnt-flexy-view-saqhan-promo-header>
    );
  }

}
