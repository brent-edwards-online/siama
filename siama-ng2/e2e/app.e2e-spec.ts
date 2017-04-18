import { SiamaNg2Page } from './app.po';

describe('siama-ng2 App', () => {
  let page: SiamaNg2Page;

  beforeEach(() => {
    page = new SiamaNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
