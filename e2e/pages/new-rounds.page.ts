import {$, $$, ElementArrayFinder, ElementFinder, Key} from 'protractor';
import {Helper} from '../helper/helper';

export class NewRoundPage {
    static roundInput: ElementFinder = $('#admin-round-round');
    static answerInput: ElementFinder = $('#admin-round-round[name="answersString"]');
    static imageUrlInput: ElementFinder = $('#admin-round-image-url');
    static videoURLInput: ElementFinder = $('#admin-round-video-url');
    static correntAnswerInput: ElementFinder = $('#admin-round-correct-answer');
    static showBoxesBeforeVideoEndInput: ElementFinder = $('#admin-round-show-boxes-before-video-end');
    static gameTimeInput: ElementFinder = $('#admin-round-game-time');
    static roundsTypeRdb: ElementArrayFinder = $$('#admin-round-box');
    static addBtn: ElementFinder = $('button[type="submit"]');
    static pageTitle: ElementFinder = $('#admin-page-title');

    static async wait() {
        await Helper.waitForTextInPageTitle(this.pageTitle, 'New Round');
    }

    static async createNewRound(dataProvider) {
        await Helper.setInputValue(this.roundInput, dataProvider.roundName);
        await Helper.setInputValue(this.answerInput, dataProvider.answers);
        await Helper.setInputValue(this.imageUrlInput, dataProvider.imageUrl);
        await Helper.setInputValue(this.videoURLInput, dataProvider.videoUrl);
        await Helper.setInputValue(this.correntAnswerInput, dataProvider.correctAnswer);
        await Helper.setInputValue(this.showBoxesBeforeVideoEndInput, dataProvider.showBoxesBeforeVideoEnd);
        await Helper.setInputValue(this.gameTimeInput, dataProvider.gameTime);
        await Helper.setRadioButton(this.roundsTypeRdb, dataProvider.roundsType);
        await this.addBtn.click();
    }
}
