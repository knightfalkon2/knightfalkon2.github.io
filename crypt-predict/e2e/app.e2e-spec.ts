import { CryptPredictPage } from './app.po';

describe('crypt-predict App', () => {
  let page: CryptPredictPage;

  beforeEach(() => {
    page = new CryptPredictPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
