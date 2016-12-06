import { TemplateDrivenFormsPage } from './app.po';

describe('template-driven-forms App', function() {
  let page: TemplateDrivenFormsPage;

  beforeEach(() => {
    page = new TemplateDrivenFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
