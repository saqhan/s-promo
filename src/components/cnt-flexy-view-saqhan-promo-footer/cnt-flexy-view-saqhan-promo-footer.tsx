import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {HeaderStickyInterface} from "../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-footer-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-footer.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoFooter implements ComponentInterface {


  @Prop() categories:HeaderStickyInterface;

  render() {
    return (
      <div>
        <footer class="fdb-block footer-small pt-5">
          <div class="container">
            <div class="row text-center align-items-center">
              <div class="col" id="navbarBottom">
                <ul class="nav ">

                    {this.getItemSticky(this.categories.stickyTop)}

                </ul>

                <p class="h6 footer-copyright">
                  © 2020 Разработка и программирование сайтов SAQHAN
                </p>
              </div>
            </div>
          </div>
        </footer>
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
            </a>›
          </li>
      );
    });
  }
}
