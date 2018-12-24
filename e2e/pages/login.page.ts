import { $, browser, ElementFinder } from 'protractor';
import { Helper } from '../helper/helper';

export class LoginPage {
  static url = browser.baseUrl + '/login';
  static idInput: ElementFinder = $('#name');
  static passwordInput: ElementFinder = $('#password');
  static logInBtn: ElementFinder = $('button[type="submit"]');


  static async logIn() {
    await Helper.setInputValue(this.idInput, 'root');
    await Helper.setInputValue(this.passwordInput, 'password');
    return this.logInBtn.click();
  }

  navigateTo() {
    return browser.get('/');
  }


}
