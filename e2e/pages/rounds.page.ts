import {$, browser, ElementFinder} from 'protractor';
import {Helper} from '../helper/helper';
export class RoundPage {
    static pageTitle: ElementFinder = $('id.admin-page-title[text="Rounds"]');
    static newBtn: ElementFinder = $('a.pure-button[text="New"]');

    static async wait() {
        await Helper.waitForTextInPageTitle(this.pageTitle, 'Rounds');
    }

    static async addNewRound() {
        await Helper.waitForVisible(this.newBtn);
        await this.newBtn.click();
    }
}
