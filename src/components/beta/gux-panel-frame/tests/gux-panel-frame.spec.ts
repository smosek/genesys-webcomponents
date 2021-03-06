import { newSpecPage } from '@stencil/core/testing';
import { GuxPanelFrame } from '../gux-panel-frame';

describe('gux-panel-frame', () => {
  let component: GuxPanelFrame;

  beforeEach(async () => {
    const page = await newSpecPage({
      components: [GuxPanelFrame],
      html: `<gux-panel-frame-beta></gux-panel-frame-beta>`,
      language: 'en'
    });

    component = page.rootInstance;
  });

  it('should build', async () => {
    expect(component).toBeInstanceOf(GuxPanelFrame);
  });
});
