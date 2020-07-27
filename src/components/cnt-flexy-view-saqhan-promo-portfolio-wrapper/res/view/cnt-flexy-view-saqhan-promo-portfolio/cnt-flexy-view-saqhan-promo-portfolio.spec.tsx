import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewSaqhanPromoPortfolio } from './cnt-flexy-view-saqhan-promo-portfolio';

describe('cnt-flexy-view-saqhan-promo-portfolio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewSaqhanPromoPortfolio],
      html: `<cnt-flexy-view-saqhan-promo-portfolio></cnt-flexy-view-saqhan-promo-portfolio>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-saqhan-promo-portfolio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-saqhan-promo-portfolio>
    `);
  });
});
