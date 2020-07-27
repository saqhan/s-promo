import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewSaqhanPromoContactFormWrapper } from './cnt-flexy-view-saqhan-promo-contact-form-wrapper';

describe('cnt-flexy-view-saqhan-promo-contact-form-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewSaqhanPromoContactFormWrapper],
      html: `<cnt-flexy-view-saqhan-promo-contact-form-wrapper></cnt-flexy-view-saqhan-promo-contact-form-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-saqhan-promo-contact-form-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-saqhan-promo-contact-form-wrapper>
    `);
  });
});
