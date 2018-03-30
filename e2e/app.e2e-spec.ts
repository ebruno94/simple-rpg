import { SimpleRpgPage } from './app.po';

describe('simple-rpg App', () => {
  let page: SimpleRpgPage;

  beforeEach(() => {
    page = new SimpleRpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
