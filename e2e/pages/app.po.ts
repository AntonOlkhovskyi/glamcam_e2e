import {$, browser, ElementFinder} from 'protractor';

export class AppPage {
  static pageTitle: ElementFinder = $('.page-title');
  static searchButton: ElementFinder = $('.btn.btn-primary.btn-block.js-ts-submit');
  static searchResultTitle: ElementFinder = $('.trips-head-title');
  static searchText: ElementFinder = $('trips-head-smalltext.js-trips-head-operators');



  static getTitleText() {
    return this.pageTitle.getText();
  }

  navigateTo() {
    return browser.get('/');
  }


}
