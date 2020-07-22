import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-header-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-header.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoHeader implements ComponentInterface {
  /**
   * data for stickuTop
   * */
  @Prop() payload: any;
  render() {
    return (
      <div>
        <cnt-flexy-view-saqhan-promo-sticky-top-1_01
          payload={this.payload}
        ></cnt-flexy-view-saqhan-promo-sticky-top-1_01>
        <div
          class="container-fluid head"
          style={{ backgroundImage: "url(http://saqhan.ru/img/promo.jpg)" }}
        >
          <div class="row flex-center">
            <div class="topContent ">
              <div class="logo">
                <img src={this.payload.logoMain} alt="Сайхан Абаев"></img>
              </div>
              <div class="titleBlock">{this.payload.headerTitle}</div>
              <button id="myBtn" class="button myBtn sendBtn">
                <span>{this.payload.headerBtnTitle}</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
