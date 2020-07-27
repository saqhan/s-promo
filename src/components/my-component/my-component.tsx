import { Component, h } from "@stencil/core";
import { header, aboutMe, portfolio, skils } from "../../utils/mock";
@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        <cnt-flexy-view-saqhan-promo-header-1_01 categories={header}></cnt-flexy-view-saqhan-promo-header-1_01>
        <cnt-flexy-view-saqhan-promo-about-me-1_01 payload={aboutMe}></cnt-flexy-view-saqhan-promo-about-me-1_01>
        <cnt-flexy-view-saqhan-promo-skils-1_01 payload={skils} ></cnt-flexy-view-saqhan-promo-skils-1_01>
          <cnt-flexy-view-saqhan-promo-portfolio-1_01 payload={portfolio}></cnt-flexy-view-saqhan-promo-portfolio-1_01>
        <cnt-flexy-view-saqhan-promo-contact-form-1_01 payload={aboutMe}></cnt-flexy-view-saqhan-promo-contact-form-1_01>
        <cnt-flexy-view-saqhan-promo-footer-1_01 categories={header}></cnt-flexy-view-saqhan-promo-footer-1_01>
      </div>
    );
  }
}
