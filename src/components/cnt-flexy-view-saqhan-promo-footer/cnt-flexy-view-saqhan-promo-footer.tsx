import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { AboutMe } from "../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-footer-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-footer.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewSaqhanPromoFooter implements ComponentInterface {
  @Prop() payload: AboutMe;

  /**
   *
   * */
  public phoneInput: any;

  /**
   *
   * */
  public nameInput: any;

  /**
   *
   * */
  public hideBlock:any;

  render() {
    return (
      <div>
        <section class="fdb-block contact" id="contact">
          <div class="bg-gray">
            <div class="container">
              <div class="row-100"></div>
              <div class="row text-left">
                <div class="col-8">
                  <h1 class="title-contacts">Контакты</h1>
                </div>
              </div>
              <div class="row-100"></div>
            </div>
          </div>
          <div class="container bg-r">
            <div class="row-100"></div>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-5">
                <div class="text-large footer-subtitle ">
                  Позвоните или напишите на почту
                </div>

                <p class="h3 mt-4 mt-lg-5">
                  <strong>Телефон:</strong>
                </p>
                <p>
                  <a href="tel:+79659540034">{this.payload.contacts.phone}</a>
                </p>

                <p class="h3 mt-4 mt-lg-5">
                  <strong>Почта:</strong>
                </p>
                <p>
                  <a href="mailto:saqhan1@mail.ru">
                    {this.payload.contacts.email}
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-6 ml-auto">
                <h2 class="footer-subtitle title-call">Отправить заявку</h2>

                <form id="form" onSubmit={(e) => this.sendMessageHandler(e)}>
                  <div class="row">
                    <div class="col">
                      <input
                        ref={(el) => (this.nameInput = el)}
                        onBlur={()=> this.checkInput(this.nameInput)}
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        placeholder="Ваше имя *"
                      />
                    </div>
                    <div class="col">
                      <input
                        ref={(el) => (this.phoneInput = el)}
                        onBlur={()=> this.checkInput(this.phoneInput)}
                        type="tel"
                        id="phone"
                        name="phone"
                        class="form-control"
                        placeholder="Телефон *"
                      />
                    </div>
                  </div>

                  <div class="row mt-4">
                    <div class="col">
                      <input
                        id="email"
                        type="text"
                        name="email"
                        class="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>

                  <div class="row mt-4">
                    <div class="col">
                      <select class="form-control" name="type">
                        <option value="">
                          Сайт какого типа Вас интересует?
                        </option>
                        <option value="Landing">Лендинг</option>
                        <option value="Blog">Сайт-блог</option>
                        <option value="Maket">Интернет магазин</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col">
                      <textarea
                        class="form-control"
                        name="message"
                        placeholder="Или напишите здесь Ваш текст"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col">
                      <button type="submit" class="btn btn-send">
                        Отправить
                      </button>
                      <div id="hide-block"
                        ref={el => this.hideBlock = el}
                      >Спасибо за заявку!</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer class="fdb-block footer-small pt-5">
          <div class="container">
            <div class="row text-center align-items-center">
              <div class="col" id="navbarBottom">
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" href="/">
                      Главная
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#About">
                      Обо мне
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#portfolio">
                      Портфолио
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Terms">
                      Отзывы
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">
                      Контакты
                    </a>
                  </li>
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

  /*
   * send new mess
   * */
  public sendMessageHandler(e) {
    e.preventDefault();
    this.sendMessage();
  }

  public sendMessage() {
    if (this.phoneInput.value !== '' && this.phoneInput.value !== ''){
      console.log('send access')
      this.hideBlock.style.display = 'block';
      setTimeout(function(){
        document.getElementById('hide-block').style.display = 'none';
      }, 2500);

    }
  }

  public checkInput(check) {
    console.log('1')
    if (check.value === '') {
      check.style.border = "1px solid red";
    } else {
      check.style.border = "1px solid #ccc"
    }
  }
}
