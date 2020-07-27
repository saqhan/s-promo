import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { AboutMeInterface } from "../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-about-me-wrapper.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoAboutMeWrapper
  implements ComponentInterface {

  @Prop() payload: AboutMeInterface;

  render() {
    return (
      <cnt-flexy-view-saqhan-promo-about-me
        payload={this.payload}
      ></cnt-flexy-view-saqhan-promo-about-me>
    );
  }
}
