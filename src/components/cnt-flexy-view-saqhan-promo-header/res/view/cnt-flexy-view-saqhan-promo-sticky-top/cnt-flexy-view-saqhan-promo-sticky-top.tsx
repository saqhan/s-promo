import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-sticky-top-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-sticky-top.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoStickyTop implements ComponentInterface {
  /**
   * data for stickuTop
   * */
  @Prop() payload: any;
  render() {
    return (
      <div class="sticky-top">
        <header>
          <nav class="navbar navbar-expand-md navbar-dark ">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTop"
                aria-controls="navbarTop"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTop">
                <ul class="navbar-nav mr-auto">
                  {this.getItemSticky(this.payload.stickyTop)}
                </ul>
              </div>
              <div class="navbar-text">
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
            </div>
          </nav>
        </header>
      </div>
    );
  }
  /**
   * for items sticky
   * */
  public getItemSticky(array) {
    return array.map((item) => {
      return <li class="nav-item ">
        <a class="nav-link" href="#About">
          {item.name}
        </a>
      </li>
    });
  }
}
