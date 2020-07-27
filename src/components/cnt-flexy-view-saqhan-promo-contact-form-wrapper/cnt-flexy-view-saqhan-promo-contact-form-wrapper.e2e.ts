import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-saqhan-promo-contact-form-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-saqhan-promo-contact-form-wrapper></cnt-flexy-view-saqhan-promo-contact-form-wrapper>');

    const element = await page.find('cnt-flexy-view-saqhan-promo-contact-form-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
