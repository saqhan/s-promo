import { Component, h } from "@stencil/core";
import { header, aboutMe, portfolio, skills } from "../../utils/mock";
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
        <cnt-flexy-view-saqhan-promo-header-wrapper-1_01 categories={header}></cnt-flexy-view-saqhan-promo-header-wrapper-1_01>
        <cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01 payload={aboutMe}></cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01>
        <cnt-flexy-view-saqhan-promo-skils-wrapper-1_01 payload={skills} ></cnt-flexy-view-saqhan-promo-skils-wrapper-1_01><cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01 payload={portfolio}></cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01>
        <cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01 payload={aboutMe} ></cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01>

          <cnt-flexy-view-saqhan-promo-footer-wrapper categories={header}></cnt-flexy-view-saqhan-promo-footer-wrapper>
      </div>
    );
  }
}
