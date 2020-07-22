import { Component, ComponentInterface,h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-saqhan-promo-sticky-top-1_01',
  styleUrl: 'cnt-flexy-view-saqhan-promo-sticky-top.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewSaqhanPromoStickyTop implements ComponentInterface {

  render() {
    return (
        <div class="sticky-top">
          <header>
            <nav class="navbar navbar-expand-md navbar-dark ">
              <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop"
                        aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTop">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                      <a class="nav-link" href="#About">Обо мне</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#Terms">Отзывы</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#portfolio">Мое портфолио</a>
                    </li>
                  </ul>
                </div>
                <div class="navbar-text">
                  <ul class="nav mom-social-icons">
                    <li class="instagram"><a target="_blank" href="https://www.instagram.com/saqhan/"><i
                        class="fab fa-instagram"></i></a></li>
                    <li class="vk"><a target="_blank" rel="fa-icon-vk" href="https://vk.com/saqhan"><i
                        class="fab fa-vk"></i></a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
    );
  }

}
