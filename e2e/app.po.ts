import { browser, element, by } from 'protractor';

export class AngularCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root nav span')).getText();
  }
}
