import { LoginElements } from '../elements/login-elements';
import { LoginConstants } from '../constants/login-constants';
import { browser, protractor } from 'protractor';

export class LoginPage {
    EC: any;
    constructor() {
        this.EC = protractor.ExpectedConditions;
    }
    launchBrowser(url: any) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    };

    clickOneNoteSignButton() {
        browser.wait(this.EC.elementToBeClickable(LoginElements.oneNoteSignInButton), 12000, LoginConstants.oneNoteSignInButtonErrorMessage);
        LoginElements.oneNoteSignInButton.click();
    };


    switchToSignInFrame() {
        browser.wait(this.EC.presenceOf(LoginElements.signInFrame), 12000, LoginConstants.signInFrameErrorMessage);
        browser.switchTo().frame(LoginElements.signInFrame.getWebElement());
    };

    enterUsername(userName: any) {
        browser.wait(this.EC.visibilityOf(LoginElements.usernameTextBox), 12000, LoginConstants.usernameTextBoxErrorMessage);
        LoginElements.usernameTextBox.sendKeys(userName);
    };

    clickUsernameNextButton() {
        browser.wait(this.EC.elementToBeClickable(LoginElements.nextButton), 12000, LoginConstants.nextButtonErrorMessage);
        LoginElements.nextButton.click();
    };

    switchToDefaultContent() {
        browser.switchTo().defaultContent();
    };

    enterPassword(password: any) {
        browser.wait(this.EC.visibilityOf(LoginElements.passwordTextBox), 12000, LoginConstants.passwordTextBoxErrorMessage);
        LoginElements.passwordTextBox.sendKeys(password);
    };

    clickSignInButton() {
        browser.wait(this.EC.elementToBeClickable(LoginElements.signInButton), 12000, LoginConstants.signInButtonErrorMessage);
        LoginElements.signInButton.click();
    };

    clickStaySignInYesButton() {
        browser.wait(this.EC.elementToBeClickable(LoginElements.staySigInYesButton), 12000, LoginConstants.staySigInYesButtonErrorMessage);
        LoginElements.staySigInYesButton.click();
    };

    getCurrentPageTitle(): any {
        return browser.getTitle();
    };
}