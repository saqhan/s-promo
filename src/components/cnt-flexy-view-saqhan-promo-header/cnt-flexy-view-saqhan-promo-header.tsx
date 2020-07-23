import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { HeaderStickyInterface } from "../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-header-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-header.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoHeader implements ComponentInterface {
  /**
   * data for stickuTop€€
   * */
  @Prop() categories: HeaderStickyInterface;

  /**
   * оверлей для молального окна
   * */
  public overlay: HTMLElement;
  /**
   * кнопка отправить заявку
   * */
  public sendBtn: HTMLElement;

  render() {
    return (
      <div>
        <cnt-flexy-view-saqhan-promo-sticky-top
          categories={this.categories}
        ></cnt-flexy-view-saqhan-promo-sticky-top>
        <div
          class="container-fluid head"
          style={{ backgroundImage: "url(http://saqhan.ru/img/promo.jpg)" }}
        >
          <div class="row flex-center">
            <div class="topContent ">
              <div class="logo">
                <img src={this.categories.logoMain} alt="Сайхан Абаев"></img>
              </div>
              <div class="titleBlock">{this.categories.headerTitle}</div>
              <button
                id="myBtn"
                class="button myBtn sendBtn"
                onClick={() => this.showModal()}
                ref={(el) => (this.sendBtn = el)}
              >
                <span>{this.categories.headerBtnTitle}</span>{" "}
              </button>
            </div>
          </div>
        </div>
        <div
          class="overlay openModal"
          id="openModal"
          ref={(el) => (this.overlay = el)}
        >
          <div class="popup">
            <div class="popup-close" onClick={() => this.closeModal()}>
              &times;
            </div>
            <div class="popup-title">Отправить заявку!</div>
            <div class="popup-form">
              <form id="overlayForm" action="#" class="main-form">
                <label class="popup-form__label" htmlfor="phone">
                  Оставтье свой номер и обязательно свяжусь с Вами!
                </label>
                <input
                  class="popup-form__input"
                  id="phoneTop"
                  name="phone"
                  type="tel"
                  placeholder="+7(965) 954-00-34"
                />
                <button class="button popup-form__btn">Оставить заявку!</button>
                <div id="hide-blockTop">
                  Спасибо за заявку! Мы скоро свяжемся с Вами!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*
   * showModal
   * **/
  public showModal(): void {
    console.log("showModal");
    this.overlay.style.display = "block";
    document.body.style.overflow = "hidden";
    this.sendBtn.classList.add("more-plash");
  }

  /*
   * close Modal
   * **/
  public closeModal() {
    this.overlay.style.display = "none";
    document.body.style.overflow = "";
    this.sendBtn.classList.remove("more-plash");
  }
}
