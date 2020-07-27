import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewSaqhanPromoAboutMeWrapper } from './cnt-flexy-view-saqhan-promo-about-me-wrapper';

describe('cnt-flexy-view-saqhan-promo-about-me-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewSaqhanPromoAboutMeWrapper],
      html: `<cnt-flexy-view-saqhan-promo-about-me-wrapper></cnt-flexy-view-saqhan-promo-about-me-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-saqhan-promo-about-me-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-saqhan-promo-about-me-wrapper>
    `);
  });
});
