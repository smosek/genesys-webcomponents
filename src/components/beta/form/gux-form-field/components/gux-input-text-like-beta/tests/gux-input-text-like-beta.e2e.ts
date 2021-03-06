import { newE2EPage } from '@stencil/core/testing';

describe('gux-input-text-like-beta', () => {
  it('renders', async () => {
    const html = `<gux-input-text-like-beta><input slot="input" type="test"></gux-input-text-like-beta>`;
    const page = await newE2EPage({ html });
    const element = await page.find('gux-input-text-like-beta');

    expect(element).toHaveClass('hydrated');
  });
});
