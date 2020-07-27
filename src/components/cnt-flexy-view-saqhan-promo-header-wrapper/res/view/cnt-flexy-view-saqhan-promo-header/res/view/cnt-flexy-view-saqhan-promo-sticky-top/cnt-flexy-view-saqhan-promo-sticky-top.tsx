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
  @Prop() navItems: any;

  /**
   * data for stickuTop
   * */
  @Prop() socialLinks: any;

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
            <div class="container-fluid bg-dark">
              <div class="container  " >
                <div class="row">
                  <div class="menu-main">
                    <div class="menu-desktop" >
                      <ul>
                        {this.getItemSticky(this.navItems)}
                      </ul>
                    </div>
                    <div class=" soc-links ">
                      <ul class="nav mom-social-icons">

                        {this.getItemLinks(this.socialLinks)}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
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
                  {this.getItemSticky(this.navItems)}
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
          <a class="nav-link" href={`#${item.id}`}>
            {item.name}
          </a>
        </li>
      );
    });
  }

  /**
   * for items sticky
   * */
  public getItemLinks(array) {
    return array.map((item) => {
      return (
          <li class={item.name}>
            <a
                target="_blank"
                rel="fa-icon-vk"
                href={item.links}
            >
              <i class={item.class}></i>
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


