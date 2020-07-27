import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {AboutMeInterface} from "../res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-saqhan-promo-contact-form-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewSaqhanPromoContactFormWrapper implements ComponentInterface {

  @Prop() payload: AboutMeInterface;

  render() {
    return (
        <cnt-flexy-view-saqhan-promo-contact-form payload={this.payload} ></cnt-flexy-view-saqhan-promo-contact-form>
    );
  }

}
