import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {AboutMe} from "../res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-saqhan-promo-about-me-1_01",
  styleUrl: "cnt-flexy-view-saqhan-promo-about-me.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewSaqhanPromoAboutMe implements ComponentInterface {

  @Prop() payload:AboutMe;
  render() {
    return (
      <div class="wow animation_duration animate__fadeInUp" id="about-me">
        <div class="container " >
          <div class="row">
            <div class="col-sm-12 wrapper-title-about">
              <div class="titleBlock  ">{this.payload.title}</div>
              <div class="subtitleBlock text-center lsp">
                {this.payload.subTitle}
              </div>
            </div>
          </div>
          <div class="row  about-blocks-wrapper">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="subtitleBlock text-center lsp pb-3">
                {this.payload.aboutMe.title}
              </div>
              <div class="text-justify">
                {this.payload.aboutMe.text}
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="myPhoto text-center">
                <img src={this.payload.img} alt="Saqhan" />
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <div class="aboutContactsubtitle pb-3 ">
                <b class="title-center">{this.payload.contacts.name}</b>
                <br />
                <br />
                {this.payload.contacts.text}
                <br />
                <br />
                <br />
                <i class="fas fa-phone-alt"></i> <span>{this.payload.contacts.phone}</span>
                <br />
                <i class="far fa-envelope"></i> <span>{this.payload.contacts.email}</span>
                <br /> <br />{" "}
                <a
                  href="https://vk.com/saqhan"
                  target="_blank"
                  class="footer-social-link "
                >
                  <i class="fab fa-vk"></i>
                </a>
                <a
                  href="https://www.instagram.com/saqhan/"
                  target="_blank"
                  class="footer-social-link "
                  data-wow-delay="0.2s"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
