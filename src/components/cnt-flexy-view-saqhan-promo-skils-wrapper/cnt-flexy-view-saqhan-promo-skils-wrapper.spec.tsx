import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewSaqhanPromoSkilsWrapper } from './cnt-flexy-view-saqhan-promo-skils-wrapper';

describe('cnt-flexy-view-saqhan-promo-skils-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewSaqhanPromoSkilsWrapper],
      html: `<cnt-flexy-view-saqhan-promo-skils-wrapper></cnt-flexy-view-saqhan-promo-skils-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-saqhan-promo-skils-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-saqhan-promo-skils-wrapper>
    `);
  });
});
