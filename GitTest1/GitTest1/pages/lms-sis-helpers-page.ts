import { LmsSisElements } from '../elements/lms-sis-elements';
import { LmsSisConstants } from '../constants/lms-sis-constants';
import { browser, protractor } from 'protractor';

export class LmsSisHelpersPage {
    EC: any;
    dateStamp: any;
    assignmentDueDate: any;
    constructor() {
        this.EC = protractor.ExpectedConditions;
        this.dateStamp = new Date().toISOString().split('T')[0].replace('-', '').replace('-', '');
    }
    getNextMonth1stDate() {
        var date = new Date();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        if (monthIndex >= 12) {
            monthIndex = 1;
            year++;
        }
        return '1' + ' ' + LmsSisConstants.monthNames[monthIndex] + ',' + year;
    };

    //#region Connection Properties
    clickConnectionDropDownButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.connectionsDropDownButton), 12000, LmsSisConstants.connectionsDropDownButtonErrorMessage);
        LmsSisElements.connectionsDropDownButton.click();
    };

    chooseLmsSisFromDropDown(lmsName: any) {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.connectionsDropDownItem), 12000, LmsSisConstants.connectionsDropDownItemErrorMessage);
        LmsSisElements.connectionsDropDownItem.click();
        this.switchToInnerIframe();
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.selectYourLMSOrSISDropDownButton), 12000, LmsSisConstants.selectYourLMSOrSISDropDownButtonErrorMessage);
        LmsSisElements.selectYourLMSOrSISDropDownButton.click();
        this.chooseDropDownItemWithGivenText(LmsSisElements.selectYourLMSOrSISDropDownList, lmsName);
    };

    clickSignInToLmsButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.signInToLmsButton), 12000, LmsSisConstants.signInToLmsButtonErrorMessage);
        LmsSisElements.signInToLmsButton.click();
    };

    verifyManageClassButtonIsEnabled() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.manageClassButton), 12000, LmsSisConstants.manageClassButtonErrorMessage);
        return true;
    };

    ClickHowToConnectLMSOrSISLinkButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.howToConnectLmsOrSisLinkButton), 12000, LmsSisConstants.howToConnectLmsOrSisLinkButtonErrorMessage);
        LmsSisElements.howToConnectLmsOrSisLinkButton.click();
    };

    ClickManageClassButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.manageClassButton), 12000, LmsSisConstants.manageClassButtonErrorMessage);
        browser.sleep(6000);
        LmsSisElements.manageClassButton.click();
    };

    //#endregion

    //#region map course Properties

    clickMapClassNotebookMenuItem() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.mapClassNotebooksMenuItem), 12000, LmsSisConstants.mapClassNotebooksMenuItemErrorMessage);
        LmsSisElements.mapClassNotebooksMenuItem.click();
    };

    mapClassNoteBookWithGivenCourseName(courseName: any) {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.selectCourseDropDownButton), 12000, LmsSisConstants.selectCourseDropDownButtonErrorMessage);
        LmsSisElements.selectCourseDropDownButton.click();
        this.chooseDropDownItemWithGivenText(LmsSisElements.selectCourseDropDownList, courseName);

        browser.wait(this.EC.elementToBeClickable(LmsSisElements.mapCourseOkButton), 12000, LmsSisConstants.mapCourseOkButtonErrorMessage);
        LmsSisElements.mapCourseOkButton.click();
        return true;
    };

    //#endregion

    //#region map student Properties
    clickMapStudentsMenuItem() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.mapStudentsMenuItem), 12000, LmsSisConstants.mapStudentsMenuItemErrorMessage);
        LmsSisElements.mapStudentsMenuItem.click();
    };

    mapFirstStudent() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.selectStudentsDropDownButton), 12000, LmsSisConstants.selectStudentsDropDownButtonErrorMessage);
        LmsSisElements.selectStudentsDropDownButton.click();

        browser.wait(this.EC.elementToBeClickable(LmsSisElements.selectStudentsDropDownList), 12000, LmsSisConstants.selectStudentsDropDownListErrorMessage);
        LmsSisElements.selectStudentsDropDownList.click();
    };

    clickMapStudentsOkButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.mapStudentsOkButton), 12000, LmsSisConstants.mapStudentsOkButtonErrorMessage);
        LmsSisElements.mapStudentsOkButton.click();
        return true;
    };
    //#endregion

    //#region create assignment Properties

    addNewPage(pageTitle: any) {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.addPageButton), 12000, LmsSisConstants.addPageButtonErrorMessage);
        LmsSisElements.addPageButton.click();
        browser.sleep(3000);
        //browser.wait(this.EC.visibilityOf(LmsSisElements.addPageTitleId), 12000, 'Add Page Title Element is not available');
        browser.actions().mouseMove(LmsSisElements.addPageTitle).sendKeys(pageTitle + this.dateStamp).perform();
        //browser.executeScript("arguments[0].innerHtml=arguments[1];",LmsSisElements.addPageTitleId,'New Title Enter');
        browser.sleep(3000);
    };

    clickCreateAssignmentButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.createAssignmentButton), 12000, LmsSisConstants.createAssignmentButtonErrorMessage);
        LmsSisElements.createAssignmentButton.click();
    };

    chooseDateFromDatePicker() {
        this.assignmentDueDate = this.getNextMonth1stDate();
        browser.wait(this.EC.visibilityOf(LmsSisElements.inputDatePicker), 12000, LmsSisConstants.inputDatePickerErrorMessage);
        browser.executeScript("arguments[0].value=arguments[1];", LmsSisElements.inputDatePicker, this.assignmentDueDate);
    };

    chooseTime() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.timeDropDownButton), 12000, LmsSisConstants.timeDropDownButtonErrorMessage);
        LmsSisElements.timeDropDownButton.click();

        browser.wait(this.EC.elementToBeClickable(LmsSisElements.timeDropDownItemButton), 12000, LmsSisConstants.timeDropDownItemButtonErrorMessage);
        LmsSisElements.timeDropDownItemButton.click();
    };

    chooseSectionInCreatInDropDown() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.createInButton), 12000, LmsSisConstants.createInButtonErrorMessage);
        LmsSisElements.createInButton.click();
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.createInItemButton), 12000, LmsSisConstants.createInItemButtonErrorMessage);
        LmsSisElements.createInItemButton.click();
    };

    clickAssignmentCreateButton() {
        browser.sleep(8000);
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.assignmentCreateButton), 12000, LmsSisConstants.assignmentCreateButtonErrorMessage);
        LmsSisElements.assignmentCreateButton.click();
    };

    verifyCreateAssignmentSuccessMessage() {
        return this.verifyTaskSuccessOrFailureStatus(LmsSisElements.loadingStatus, LmsSisElements.successMessage, LmsSisElements.failedStatus, LmsSisConstants.createAssignmentFailedErrorMessage);
    };
    //#endregion

    //#region Review Student Work with grades Properties

    clickReviewStudentWorkButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.reviewStudentWorkButton), 12000, LmsSisConstants.reviewStudentWorkButtonErrorMessage);
        LmsSisElements.reviewStudentWorkButton.click();
    };

    clickStudentSectionDropDown() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.studentSectionDropDownOption), 12000, LmsSisConstants.studentSectionDropDownOptionErrorMessage);
        LmsSisElements.studentSectionDropDownOption.click();
    };

    chooseSectionFromDropDown() {
        browser.sleep(6000);
        browser.wait(this.EC.visibilityOf(LmsSisElements.classNotesSection), 12000, LmsSisConstants.classNotesSectionErrorMessage);
        LmsSisElements.classNotesSection.click();
    };

    chooseDistributedPageFromDropDown(assignmentPage: any) {
        this.waitForSpinnerLoadingComplete(LmsSisElements.reviewStudentWorkTabSpinner);
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.chooseDistributedPageDropDown), 12000, LmsSisConstants.chooseDistributedPageDropDownErrorMessage);
        LmsSisElements.chooseDistributedPageDropDown.click();
        this.chooseDropDownItemWithGivenText(LmsSisElements.distributedPageDropDownItems, assignmentPage + this.dateStamp);
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.studentNamesFirst), 12000, LmsSisConstants.studentNamesFirstErrorMessage);
        LmsSisElements.studentNamesFirst.click();
    };

    clickEnterGradesCheckbox() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.enterGradesCheckbox), 12000, LmsSisConstants.enterGradesCheckboxErrorMessage);
        LmsSisElements.enterGradesCheckbox.click();
    };

    enterGradesValue() {
        browser.wait(this.EC.visibilityOf(LmsSisElements.enterGradesValueInput), 12000, LmsSisConstants.enterGradesValueInputErrorMessage);
        LmsSisElements.enterGradesValueInput.clear();
        LmsSisElements.enterGradesValueInput.sendKeys('7');
    };

    clickSubmitGradesButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.submitGradesButton), 12000, LmsSisConstants.submitGradesButtonErrorMessage);
        LmsSisElements.submitGradesButton.click();
    };

    verifyReviewStudentGradesSuccessMessage() {
        return this.verifyTaskSuccessOrFailureStatus(LmsSisElements.loadingStatus, LmsSisElements.successMessage, LmsSisElements.failedStatus, LmsSisConstants.reviewStudentWorkFailedErrorMessage);
    };
    //#endregion

    //#region Common  Properties
    switchToWebAppFrame() {
        browser.wait(this.EC.presenceOf(LmsSisElements.webApplicationFrame), 12000, LmsSisConstants.webApplicationFrameErrorMessage);
        browser.switchTo().frame(LmsSisElements.webApplicationFrame.getWebElement());
    };

    switchToInnerIframe() {
        browser.sleep(6000)
        browser.switchTo().frame(2);
    };

    switchToDefaultContent() {
        browser.switchTo().defaultContent();
    };

    clickAllowPopup() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.allowPopUp), 12000, LmsSisConstants.allowPopUpButtonErrorMessage);
        LmsSisElements.allowPopUp.click();
    };

    switchToWindow(index: any) {
        browser.getAllWindowHandles().then(handles => {
            browser.switchTo().window(handles[index]);
        });
    };
    chooseDropDownItemWithGivenText(dropDownListId: any, itemText: any) {
        dropDownListId.filter(function (elem: any, index: any) {
            return elem.getText().then(function (text: any) {
                return text === itemText;
            });
        }).last().click();
    };

    verifyTaskSuccessOrFailureStatus(spinnerId: any, successId: any, failedId: any, errorMessage: any) {
        this.waitForSpinnerLoadingComplete(spinnerId);
        var statusSuccessMessageDisplayed = this.EC.visibilityOf(successId);
        var statusErrorMessageNotDisplay = this.EC.not(this.EC.visibilityOf(failedId));
        browser.wait(this.EC.and(statusSuccessMessageDisplayed, statusErrorMessageNotDisplay), 30000, errorMessage);
        return true;
    };

    waitForSpinnerLoadingComplete(spinnerElementId: any) {
        browser.wait(function () {
            return spinnerElementId.isDisplayed().then(function (result: any) { return !result });
        }, 120000, LmsSisConstants.loadingSpinnerErrorMessage);
    };

    verifyPageTitle(expectedPageTitle: any) {
        browser.sleep(6000);
        expect(browser.getTitle()).toEqual(expectedPageTitle);
    };

    verifyPageLink(expectedPageLink: any) {
        expect(browser.getCurrentUrl()).toBe(expectedPageLink);
    };

    closeExistingPanel() {
        this.switchToDefaultContent();
        this.switchToWebAppFrame();
        LmsSisElements.panelCloseButton.isPresent().then(function (result: any) {
            if (result) {
                LmsSisElements.panelCloseButton.click();
            }
        });
    };

    browserSleep(sleepTime: any) {
        browser.sleep(sleepTime);
    };
    //#endregion

    //#region Black Baud Lms  Properties
    verifyBlackBaudLoginPage() {
        browser.sleep(8000);
        browser.wait(this.EC.visibilityOf(LmsSisElements.blackBaudLoginForm), 19000, LmsSisConstants.blackBaudLoginFormErrorMessage);
    };

    enterBlackBaudTenantUrl(tenantUrl: any) {
        browser.wait(this.EC.visibilityOf(LmsSisElements.blackBaudTenantUrl), 12000, LmsSisConstants.blackBaudTenantUrlErrorMessage);
        LmsSisElements.blackBaudTenantUrl.sendKeys(tenantUrl);
    };

    enterBlackBaudUsername(username: any) {
        browser.wait(this.EC.visibilityOf(LmsSisElements.blackBaudUserName), 12000, LmsSisConstants.blackBaudUserNameErrorMessage);
        LmsSisElements.blackBaudUserName.sendKeys(username);
    }
    enterBlackBaudPassword(password: any) {
        browser.wait(this.EC.visibilityOf(LmsSisElements.blackBaudUserPassword), 12000, LmsSisConstants.blackBaudUserPasswordErrorMessage);
        LmsSisElements.blackBaudUserPassword.sendKeys(password);
    }

    clickBlackBaudSubmitButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.blackBaudSubmitButton), 12000, LmsSisConstants.blackBaudSubmitButtonErrorMessage);
        LmsSisElements.blackBaudSubmitButton.click();
    };

    verifyHowToConnectBlackbaudLinkPageTitle() {
        this.verifyPageTitle(LmsSisConstants.blackBaudLmsHowToConnectPageTitle);
        browser.driver.close();
    };
    //#endregion

    //#region Canvas Lms  Properties
    verifyCanvasLoginPage() {
        browser.sleep(8000);
        browser.wait(this.EC.visibilityOf(LmsSisElements.canvasLoginForm), 19000, LmsSisConstants.canvasLoginFormErrorMessage);
    };

    verifyHowToConnectCanvasLinkPageTitle() {
        this.verifyPageTitle(LmsSisConstants.canvasLmsHowToConnectPageTitle);
        browser.driver.close();
    };

    enterCanvasTenantUrl(tenantUrl: any) {
        browser.wait(this.EC.visibilityOf(LmsSisElements.canvasTenantUrl), 12000, LmsSisConstants.canvasTenantUrlErrorMessage);
        LmsSisElements.canvasTenantUrl.sendKeys(tenantUrl);
    };

    clickCanvasSubmitButton() {
        browser.wait(this.EC.visibilityOf(LmsSisElements.canvasSubmitButton), 12000, LmsSisConstants.canvasSubmitButtonErrorMessage);
        LmsSisElements.canvasSubmitButton.click();
    };

    enterCanvasEmail(Email: any) {
        browser.wait(this.EC.visibilityOf(LmsSisElements.canvasEmail), 12000, LmsSisConstants.canvasEmailErrorMessage);
        LmsSisElements.canvasEmail.sendKeys(Email);
    }
    enterCanvasPassword(password: any) {
        browser.wait(this.EC.visibilityOf(LmsSisElements.canvasPassword), 12000, LmsSisConstants.canvasPasswordErrorMessage);
        LmsSisElements.canvasPassword.sendKeys(password);
    }

    clickCanvasLoginButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.canvasLoginButton), 12000, LmsSisConstants.canvasLoginButtonErrorMessage);
        LmsSisElements.canvasLoginButton.click();
    };

    clickCanvasAuthorizeButton() {
        browser.wait(this.EC.elementToBeClickable(LmsSisElements.canvasAuthorizeButton), 12000, LmsSisConstants.canvasAuthorizeButtonErrorMessage);
        LmsSisElements.canvasAuthorizeButton.click();
    };
    //#endregion
}