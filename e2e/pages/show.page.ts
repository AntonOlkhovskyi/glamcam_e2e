import {$, browser, ElementFinder} from 'protractor';
import {Helper} from '../helper/helper';
export class ShowPage {
  static pageTitle: ElementFinder = $('#admin-page-title');
  static newBtn: ElementFinder = $('a[href="/admin/shows/create"]');


  static async wait() {
    await Helper.waitForTextInPageTitle(this.pageTitle, 'Shows');
  }

  static async openNewShow() {
      await Helper.waitForVisible(this.newBtn);
      await this.newBtn.click();
    }
}
