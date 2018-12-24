import {$, $$, ElementArrayFinder, ElementFinder, Key} from 'protractor';
import {Helper} from '../helper/helper';

export class NewShowPage {
  static hostDropDwn: ElementFinder = $('select[name="host"]');
  static titleInput: ElementFinder = $('#admin-show-title');
  static previewImageInput: ElementFinder = $('#admin-show-preview-image');
  static sponsorImageInput: ElementFinder = $('#admin-show-sponsor-image');
  static startOnDatePicker: ElementFinder = $('#admin-show-starts_on');
  static endsOnDatePicker: ElementFinder = $('#admin-show-ends_on');
  static linkOnWinnerVideoInput: ElementFinder = $('#admin-show-winner-video');
  static linkOnLoserVideoInput: ElementFinder = $('#admin-show-attempts');
  static titleForLoserButtonInput: ElementFinder = $('#admin-show-loser-screen-button');
  static titleForWinnerButtonInput: ElementFinder = $('#admin-show-winner-screen-button');
  static linkForLoserButtonInput: ElementFinder = $('#admin-show-loser-link-button');
  static linkForWinnerButtonInput: ElementFinder = $('#admin-show-winner-link-button');
  static numberOfAttempts: ElementFinder = $('#admin-show-number-of-attempts');
  static productImageImage: ElementFinder = $('#admin-show-product-thumbnail');
  static numberOfWinnerInput: ElementFinder = $('#admin-show-number-of-winners');
  static showStatusRdb: ElementArrayFinder = $$('#admin-show-status');
  static videoAutoPlayRdb: ElementArrayFinder = $$('#admin-show-video-auto-play-yes');
  static shopifyItemIDInput: ElementFinder = $('#admin-show-shopidfy-item-id');

  static addBtn: ElementFinder = $('button[type="submit"]');


  static async createNewShow(dataProvider) {
    await Helper.selectDropDownValue(this.hostDropDwn, dataProvider.hostValue);
    await Helper.setInputValue(this.titleInput, dataProvider.title);
    await Helper.setInputValue(this.previewImageInput, dataProvider.previewImageUrl);
    await Helper.setInputValue(this.sponsorImageInput, dataProvider.sponsorImageUrl);
    await this.startOnDatePicker.sendKeys(dataProvider.startOnDate, Key.ARROW_DOWN);
    await this.endsOnDatePicker.sendKeys(dataProvider.endsOnDate, Key.ARROW_DOWN);
    await Helper.setInputValue(this.linkOnWinnerVideoInput, dataProvider.linkOnWinnerVideoInput);
    await Helper.setInputValue(this.linkOnLoserVideoInput, dataProvider.linkOnLoserVideoInput);
    await Helper.setInputValue(this.titleForLoserButtonInput, dataProvider.titleForLoserButtonInput);
    await Helper.setInputValue(this.titleForWinnerButtonInput, dataProvider.titleForWinnerButtonInput);
    await Helper.setInputValue(this.linkForLoserButtonInput, dataProvider.linkForLoserButtonInput);
    await Helper.setInputValue(this.linkForWinnerButtonInput, dataProvider.linkForWinnerButtonInput);
    await Helper.setInputValue(this.numberOfAttempts, dataProvider.numberOfAttempts);
    await Helper.setInputValue(this.productImageImage, dataProvider.productImageImage);
    await Helper.setInputValue(this.numberOfWinnerInput, dataProvider.numberOfWinnerInput);
    await Helper.setRadioButton(this.showStatusRdb, dataProvider.showStatusRdb);
    await Helper.setRadioButton(this.videoAutoPlayRdb, dataProvider.videoAutoPlayRdb);
    await Helper.setInputValue(this.shopifyItemIDInput, dataProvider.shopifyItemIDInput);
    await this.addBtn.click();
  }

}
