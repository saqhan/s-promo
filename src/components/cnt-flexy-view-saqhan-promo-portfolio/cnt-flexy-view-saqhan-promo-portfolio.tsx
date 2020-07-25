import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { Portfolio } from "../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-portfolio-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-portfolio.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoPortfolio implements ComponentInterface {
  @Prop() payload: Portfolio[];
  render() {
    return (
      <div class="portfolio-wrapper">
        <div class="container">
          <div class="title">Портфолио</div>
            <div class="categories">
                <ul>
                    <li>Все</li>
                    <li>Angular</li>
                    <li>React</li>
                    <li>WordPress</li>
                </ul>
            </div>
          <div class="cars-wrapper row">{this.getCard(this.payload)}</div>
        </div>
      </div>
    );
  }

  /**
   * get a card
   * */

  public getCard(array): Portfolio {
    return array.map((item) => {
      return (<div class="col-12 col-md-6 col-lg-4">
          <div class="card-portfolio">
              <div
                  class="img"
                  style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div class="details">
                  <div class="description">{item.title}</div>
                  <div class="btns">
                      <a target="_blank" href={item.linkApp} class="check-app">
                          Перейти <i class="fas fa-external-link-alt"></i>
                      </a>
                      <a target="_blank" href={item.linkGithub} class="check-in-github">
                          Github <i class="fab fa-github"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>)
    });
  }
}
