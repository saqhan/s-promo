import {Component, ComponentInterface,  h, Prop} from '@stencil/core';
import {HeaderStickyInterface} from "../res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-saqhan-promo-footer-wrapper',
  styleUrl: 'cnt-flexy-view-saqhan-promo-footer-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewSaqhanPromoFooterWrapper implements ComponentInterface {


  @Prop() categories:HeaderStickyInterface;

  render() {
    return (
        <cnt-flexy-view-saqhan-promo-footer categories={this.categories} ></cnt-flexy-view-saqhan-promo-footer>
    );
  }

}
