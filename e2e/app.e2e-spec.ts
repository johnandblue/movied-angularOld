import { AngularCliPage } from './app.po';

// main  === list movies
describe('angular-cli App', function() {
  let page: AngularCliPage;

  beforeEach(() => {
    page = new AngularCliPage();
  });

  it('should display message saying Movied', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Movied');
  });
});
