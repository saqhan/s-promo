import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PortfolioInterface} from "../res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-saqhan-promo-portfolio-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewSaqhanPromoPortfolioWrapper implements ComponentInterface {

  @Prop() payload: PortfolioInterface;

  render() {
    return (
        <cnt-flexy-view-saqhan-promo-portfolio payload={this.payload} ></cnt-flexy-view-saqhan-promo-portfolio>
    );
  }

}
