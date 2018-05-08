import {LoginPage} from '../pages/login-page';
import {LoginConstants} from '../constants/login-constants';
var testData = require('../test-data.json');

describe('OneNote Login Page', ()  =>{
    let loginPage=new LoginPage();
    beforeAll(()=> {
        loginPage.launchBrowser(testData.launchUrl);
    });
    it('should user get login to OneNote',() =>{
        loginPage.clickOneNoteSignButton();
        loginPage.switchToSignInFrame();
        loginPage.enterUsername(testData.oneNoteLoginEmailId);
        loginPage.clickUsernameNextButton();
        loginPage.switchToDefaultContent();
        loginPage.enterPassword(testData.oneNoteLoginPassword);
        loginPage.clickSignInButton();
        loginPage.clickStaySignInYesButton();
        expect(loginPage.getCurrentPageTitle()).toEqual(LoginConstants.oneNoteHomePageTitleAfterLogin);
    });
});