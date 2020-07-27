import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-saqhan-promo-portfolio-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-saqhan-promo-portfolio-wrapper></cnt-flexy-view-saqhan-promo-portfolio-wrapper>');

    const element = await page.find('cnt-flexy-view-saqhan-promo-portfolio-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
