import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-header-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-header.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoHeader implements ComponentInterface {
  render() {
    return (
        <div>
          <cnt-flexy-view-saqhan-promo-sticky-top-1_01></cnt-flexy-view-saqhan-promo-sticky-top-1_01>
          <div class="container-fluid head">
            <div class="row flex-center">
              <div class="topContent ">
                <div class="logo"><img src="http://saqhan.ru/img/logo.png" alt="Сайхан Абаев"></img></div>
                <div class="titleBlock">Профессиональная разработка сайтов</div>
                <button id="myBtn" class="button myBtn sendBtn"><span>Отправить заявку</span> </button>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
