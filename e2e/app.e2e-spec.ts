import { NgtempPage } from './app.po';

describe('ngtemp App', function() {
  let page: NgtempPage;

  beforeEach(() => {
    page = new NgtempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
