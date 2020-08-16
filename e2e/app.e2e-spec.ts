import { Angular100daysPage } from './app.po';

describe('angular100days App', function() {
  let page: Angular100daysPage;

  beforeEach(() => {
    page = new Angular100daysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
