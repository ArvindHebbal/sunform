import { TryingPage } from './app.po';

describe('trying App', () => {
  let page: TryingPage;

  beforeEach(() => {
    page = new TryingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
