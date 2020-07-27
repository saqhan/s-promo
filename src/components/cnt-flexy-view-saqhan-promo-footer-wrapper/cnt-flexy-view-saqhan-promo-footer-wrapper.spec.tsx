import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewSaqhanPromoFooterWrapper } from './cnt-flexy-view-saqhan-promo-footer-wrapper';

describe('cnt-flexy-view-saqhan-promo-footer-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewSaqhanPromoFooterWrapper],
      html: `<cnt-flexy-view-saqhan-promo-footer-wrapper></cnt-flexy-view-saqhan-promo-footer-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-saqhan-promo-footer-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-saqhan-promo-footer-wrapper>
    `);
  });
});
