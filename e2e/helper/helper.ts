import {browser, ElementArrayFinder, ElementFinder, ExpectedConditions as EC} from 'protractor';

export class Helper {

    static async setInputValue(element: ElementFinder, value) {
        await this.waitForVisible(element);
        await element.clear();
        await element.click();
        return element.sendKeys(value);
    }

    static async waitForVisible(element: ElementFinder, timeout = 5000) {
        return browser.wait(EC.visibilityOf(element), timeout);
    }

    static async waitForTextInPageTitle(element: ElementFinder, expectedText, timeout = 5000) {
        return browser.wait(EC.textToBePresentInElement(element, expectedText), timeout);
    }

    static async setRadioButton(elements: ElementArrayFinder, bool = true) {
        const finalState = bool ? elements.first() : elements.last();
        return finalState.click();
    }

    static async selectDropDownValue(element: ElementFinder, value) {
        const allOptions = element.$$('option');
        await allOptions.each(async function (elementFinder, index) {
            if (await elementFinder.getText() === value) {
                element.click();
                elementFinder.click();
                return true;
            }
        });
        /*if (!isFaund) {
            console.log(`No such element + ${value}`);
        }*/
    }

}
