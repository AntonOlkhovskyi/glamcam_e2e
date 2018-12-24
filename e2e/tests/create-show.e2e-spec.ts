import {LoginPage} from '../pages/login.page';
import {browser} from 'protractor';
import {LeftHeadMenuComponent} from '../pages/left-head-menu.component';
import {ShowPage} from '../pages/show.page';
import {RoundPage} from '../pages/rounds.page';
import {NewShowPage} from '../pages/new-show.page';
import {allShows} from '../dataprovider/show-data.json';
import {NewRoundPage} from '../pages/new-rounds.page';


describe('Create new show', () => {


  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get(LoginPage.url);
    await LoginPage.logIn();
  });

  it('user can open new show form', async () => {
    await LeftHeadMenuComponent.showPage.click();
    await ShowPage.wait();
    await ShowPage.openNewShow();
    await NewShowPage.createNewShow(allShows.showOne);

    await NewRoundPage.wait();
    await NewRoundPage.createNewRound(allShows.showOne.round);

  });

});
