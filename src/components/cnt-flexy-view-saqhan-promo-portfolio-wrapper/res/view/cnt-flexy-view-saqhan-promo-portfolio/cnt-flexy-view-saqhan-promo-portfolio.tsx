import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import { PortfolioInterface } from "../../../../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-portfolio",
  styleUrl: "cnt-flexy-view-saqhan-promo-portfolio.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoPortfolio implements ComponentInterface {
  @Prop() payload: PortfolioInterface;

  @State() portfolioCardState = this.payload.portfolioCard;
  @State() lastClickedCategory: PortfolioInterface;

  render() {
    return (
      <div class="portfolio-wrapper wow animation_duration animate__fadeInUp" id='portfolio'>
        <div class="container">
          <div class="title ">Портфолио</div>
          <div class="categories ">
            <ul>{this.getCategories(this.payload.categoriesPortfolio)}</ul>
          </div>
          <div class="cars-wrapper   row">
            {this.getCard(this.portfolioCardState)}
          </div>
        </div>
      </div>
    );
  }

  /**
   * get a card
   * */
  public getCard(array) {
    return array.map((item) => {
      return (
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card-portfolio  wow animation_duration animate__fadeIn ">
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
                {item.linkGithub.length ? (
                  <a
                    target="_blank"
                    href={item.linkGithub}
                    class="check-in-github"
                  >
                    Github <i class="fab fa-github"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  /**
   * get category
   * */
  public getCategories(array) {
    return array.map((item) => {
      return (
        <li
            class={{active: item.id === this.lastClickedCategory }}
            onClick={() => this.filterCategoryPortfolioHandler(item.id)}>
          {item.name}
        </li>
      );
    });
  }

  public filterCategoryPortfolioHandler(id) {
    this.lastClickedCategory = id;
    return id !== "all"
      ? (this.portfolioCardState = this.payload.portfolioCard.filter(
          (item) => item.category === id
        ))
      : (this.portfolioCardState = this.payload.portfolioCard);
  }
}

