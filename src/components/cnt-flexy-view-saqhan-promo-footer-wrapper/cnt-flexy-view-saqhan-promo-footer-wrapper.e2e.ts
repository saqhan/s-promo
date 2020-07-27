import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-saqhan-promo-footer-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-saqhan-promo-footer-wrapper></cnt-flexy-view-saqhan-promo-footer-wrapper>');

    const element = await page.find('cnt-flexy-view-saqhan-promo-footer-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
