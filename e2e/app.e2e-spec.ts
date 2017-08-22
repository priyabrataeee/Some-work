import { DashPage } from './app.po';

describe('dash App', () => {
  let page: DashPage;

  beforeEach(() => {
    page = new DashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
