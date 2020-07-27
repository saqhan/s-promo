import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-saqhan-promo-skils-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-saqhan-promo-skils-wrapper></cnt-flexy-view-saqhan-promo-skils-wrapper>');

    const element = await page.find('cnt-flexy-view-saqhan-promo-skils-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
