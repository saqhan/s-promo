import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewSaqhanPromoPortfolioWrapper } from './cnt-flexy-view-saqhan-promo-portfolio-wrapper';

describe('cnt-flexy-view-saqhan-promo-portfolio-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewSaqhanPromoPortfolioWrapper],
      html: `<cnt-flexy-view-saqhan-promo-portfolio-wrapper></cnt-flexy-view-saqhan-promo-portfolio-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-saqhan-promo-portfolio-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-saqhan-promo-portfolio-wrapper>
    `);
  });
});
