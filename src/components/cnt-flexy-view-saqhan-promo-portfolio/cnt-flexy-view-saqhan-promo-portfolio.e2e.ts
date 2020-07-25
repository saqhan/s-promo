import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-saqhan-promo-portfolio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-saqhan-promo-portfolio></cnt-flexy-view-saqhan-promo-portfolio>');

    const element = await page.find('cnt-flexy-view-saqhan-promo-portfolio');
    expect(element).toHaveClass('hydrated');
  });
});
