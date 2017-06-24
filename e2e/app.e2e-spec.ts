import { RxDemoPage } from './app.po';

describe('rx-demo App', () => {
  let page: RxDemoPage;

  beforeEach(() => {
    page = new RxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cyl!!');
  });
});
