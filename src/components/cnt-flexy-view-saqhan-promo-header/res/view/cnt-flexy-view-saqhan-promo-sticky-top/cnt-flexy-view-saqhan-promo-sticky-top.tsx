import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-sticky-top",
  styleUrl: "cnt-flexy-view-saqhan-promo-sticky-top.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoStickyTop implements ComponentInterface {
  /**
   * data for stickuTop
   * */
  @Prop() categories: any;

  /**
   *
   */
  public mobileMenuTag: HTMLElement;

  /**
   * show hide bars
   * */

  public isShowBar: boolean;


  /**
   *
   */
  public menuTag: HTMLElement;

  render() {
    return (
        <div>
          <div class="menu" ref={(el) => (this.menuTag = el)}>
            <div class="container">
              <div class="row">
                <div class="menu-desktop collapse navbar-collapse d-lg-block" id="navbarTop">
                  <ul class="navbar-nav mr-auto">
                    {this.getItemSticky(this.categories)}
                  </ul>
                </div>
                <div class=" soc-links ">
                  <ul class="nav mom-social-icons">
                    <li class="instagram">
                      <a target="_blank" href="https://www.instagram.com/saqhan/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="vk">
                      <a
                          target="_blank"
                          rel="fa-icon-vk"
                          href="https://vk.com/saqhan"
                      >
                        <i class="fab fa-vk"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="menu-wrapper col-md-12 d-lg-none">
                  {!this.isShowBar ?
                  <button
                      type="button"
                      class="menu-mobile-button"
                      onClick={() => this.showMobileMenuHandler()}
                  >
                  <span>
                     <i class="fa fa-bars"></i>
                  </span>
                  </button> : ''  }

                </div>
              </div>
            </div>
          </div>
          <div
              class="mobile-menu d-lg-none"
              ref={(el) => (this.mobileMenuTag = el)}
          >
            <div class="container">
              <div
                  class="mobile-menu-close"
                  onClick={() => this.showMobileMenuHandler()}
              >
              <span>
                <i class="fas fa-times"></i>
              </span>
              </div>
              <nav class="mobile-menu-wrapper">
                <ul>
                  {this.getItemSticky(this.categories)}
                </ul>
              </nav>
            </div>
          </div>
        </div>
    );
  }

  /**
   * for items sticky
   * */
  public getItemSticky(array) {
    return array.map((item) => {
      return (
        <li class="nav-item ">
          <a class="nav-link" href={item.id}>
            {item.name}
          </a>
        </li>
      );
    });
  }



  /**
   * Открытие и закрытие мобильного меню при нажатии на иконки
   */
  public showMobileMenuHandler() {
    this.mobileMenuTag.classList.toggle("active");
    this.isShowBar = true;
    console.log(this.isShowBar);
  }



}


