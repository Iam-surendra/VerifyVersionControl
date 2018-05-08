import { CnbRibbonElements } from '../elements/cnb-ribbon-elements';
import{CnbRibbonConstants} from'../constants/cnb-ribbon-constants';
import {browser,protractor} from 'protractor';


export class CnbRibbonPage{
    EC:any;
    timeStamp:any;
    selectedDistributedPageOnReviewStudentWork:any;
    constructor(){
        this.EC = protractor.ExpectedConditions;
        this.timeStamp = new Date().getTime();
    }

    //#region Class NoteBook Ribbon Control Properties
    waitForPageCompleteLoad () {
        browser.sleep(20000);
    };

    clickClassNoteBookRibbon() {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.classNoteBookRibbon), 12000, CnbRibbonConstants.classNoteBookRibbonErrorMessage);
        CnbRibbonElements.classNoteBookRibbon.click();
    };

    pinCnbRibbon  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.cnbRibbonPinButton), 12000, CnbRibbonConstants.cnbRibbonPinButtonErrorMessage);
        CnbRibbonElements.cnbRibbonPinButton.click();
    };

    getPinCnbRibbonTitle():any {
        return CnbRibbonElements.cnbRibbonPinButton.getAttribute(CnbRibbonConstants.getTitleAttributeText);
    };

    verifyManageNotebookLinks  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.createClassNotebookLinkButton), 12000, CnbRibbonConstants.createClassNotebookLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.addOrRemoveStudentsLinkButton), 12000, CnbRibbonConstants.addOrRemoveStudentsLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.addOrRemoveTeachersLinkButton), 12000, CnbRibbonConstants.addOrRemoveTeachersLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.manageNotebooksLinkButton), 12000, CnbRibbonConstants.manageNotebooksLinkButtonErrorMessage);
    };

    verifyProfessionalDevelopmentLinks  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.professionalDevelopmentDropDownButton), 12000, CnbRibbonConstants.professionalDevelopmentDropDownButtonErrorMessage);
        CnbRibbonElements.professionalDevelopmentDropDownButton.click();
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.oneNoteForTeachersTrainingLinkButton), 12000, CnbRibbonConstants.oneNoteForTeachersTrainingLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.classNotebookAddInGuideLinkButton), 12000, CnbRibbonConstants.classNotebookAddInGuideLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.oneNoteEducationBlogLinkButton), 12000, CnbRibbonConstants.oneNoteEducationBlogLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.microsoftEducatorCommunityLinkButton), 12000, CnbRibbonConstants.microsoftEducatorCommunityLinkButtonErrorMessage);
        CnbRibbonElements.microsoftEducatorCommunityLinkButton.sendKeys(protractor.Key.ESCAPE);
    };

    verifyHelpAndFeedbackLinks  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.helpAndFeedbackDropDownButton), 12000, CnbRibbonConstants.helpAndFeedbackDropDownButtonErrorMessage);
        CnbRibbonElements.helpAndFeedbackDropDownButton.click();
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.sendFeedbackLinkButton), 12000, CnbRibbonConstants.sendFeedbackLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.viewKnowledgeBaseLinkButton), 12000, CnbRibbonConstants.viewKnowledgeBaseLinkButtonErrorMessage);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.suggestAFeatureLinkButton), 12000, CnbRibbonConstants.suggestAFeatureLinkButtonErrorMessage);
        CnbRibbonElements.suggestAFeatureLinkButton.sendKeys(protractor.Key.ESCAPE);
    };

    //#endregion

     //#region Distribute Page Properties

     clickDistributePageButton  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.distributePageButton), 12000, CnbRibbonConstants.distributePageButtonErrorMessage);
        CnbRibbonElements.distributePageButton.click();
    };

    clickOfficePanelSignIn  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.officePanelSignIn), 12000, CnbRibbonConstants.officePanelSignInErrorMessage);
        CnbRibbonElements.officePanelSignIn.click();
    };

    clickAllowPopup  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.allowPopUp), 12000, CnbRibbonConstants.allowPopUpErrorMessage);
        CnbRibbonElements.allowPopUp.click();
    };

    chooseClassNotesSection  () {
        browser.wait(this.EC.visibilityOf(CnbRibbonElements.classNotesSectionDropDownList), 30000, CnbRibbonConstants.classNotesSectionErrorMessage);
        CnbRibbonElements.classNotesSectionDropDownList.click();
    };

    clickDistributeButton  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.distributeButton), 12000, CnbRibbonConstants.distributeButtonErrorMessage);
        CnbRibbonElements.distributeButton.click();
    };

    verifyDistributePageSuccessMessage  () {
        this.verifyTaskSuccessOrFailureStatus(CnbRibbonElements.loadingStatus, CnbRibbonElements.successMessage, CnbRibbonElements.failedStatus,CnbRibbonConstants.DistributePageFailedErrorMessage );
    };

    //#endregion

    //#region Distribute New Section Properties

    clickDistributeNewSectionButton  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.distributeNewSectionButton), 12000, CnbRibbonConstants.distributeNewSectionButtonErrorMessage);
        CnbRibbonElements.distributeNewSectionButton.click();
    };

    enterNewSectionName  (newSectionName:string) {
        browser.wait(this.EC.visibilityOf(CnbRibbonElements.distributeNewSectionNameInput), 12000, CnbRibbonConstants.distributeNewSectionNameInputErrorMessage);
        CnbRibbonElements.distributeNewSectionNameInput.sendKeys(newSectionName+this.timeStamp);
    };

    clickDistributeNewSectionCreateButton  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.distributeNewSectionCreateButton), 12000, CnbRibbonConstants.distributeNewSectionCreateButtonErrormessage);
        CnbRibbonElements.distributeNewSectionCreateButton.click();
    };

    verifyDistributeNewSectionSuccessMessage  () {
        this.verifyTaskSuccessOrFailureStatus(CnbRibbonElements.loadingStatus, CnbRibbonElements.successMessage, CnbRibbonElements.failedStatus, CnbRibbonConstants.DistributeNewSectionFailedErrorMessage);
    };
    //#endregion

    //#region Review Student Work Properties

    clickReviewStudentWorkButton  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.reviewStudentWorkButton), 12000, CnbRibbonConstants.reviewStudentWorkButtonErrorMessage);
        CnbRibbonElements.reviewStudentWorkButton.click();
    };

    clickStudentSectionDropDown  () {
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.studentSectionDropDownOption), 12000, CnbRibbonConstants.studentSectionDropDownOptionErrorMessage);
        CnbRibbonElements.studentSectionDropDownOption.click();
    };

    chooseClassNotesSectionFromDropDown  () {
        browser.sleep(6000);
        browser.wait(this.EC.visibilityOf(CnbRibbonElements.classNotesSection), 12000, CnbRibbonConstants.reviewStudentWorkClassNotesSectionErrorMessage);
        CnbRibbonElements.classNotesSection.click();
    };

    chooseDistributedPageFromDropDown  () {
        this.waitForSpinnerLoadingComplete(CnbRibbonElements.reviewStudentWorkTabSpinner);
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.chooseDistributedPageDropDown), 12000, CnbRibbonConstants.chooseDistributedPageDropDownErrorMessage);
        CnbRibbonElements.chooseDistributedPageDropDown.click();
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.distributedPageDropDownItems), 12000, CnbRibbonConstants.distributedPageDropDownItemsErrorMessage);
        this.selectedDistributedPageOnReviewStudentWork = CnbRibbonElements.distributedPageDropDownItems.getText();
        CnbRibbonElements.distributedPageDropDownItems.click();
        browser.wait(this.EC.elementToBeClickable(CnbRibbonElements.studentNamesFirst), 12000, CnbRibbonConstants.studentNamesListErrorMessage);
        CnbRibbonElements.studentNamesFirst.click();
    };

    verifyReviewStudentWorkSuccessOrFailure  () {
        browser.sleep(8000);
        expect(CnbRibbonElements.selectedPageTitle.getAttribute(CnbRibbonConstants.getTitleAttributeText)).toEqual(this.selectedDistributedPageOnReviewStudentWork);
    };
    //#endregion


    //#region Common Properties
    switchToWebAppFrame  () {
        browser.wait(this.EC.presenceOf(CnbRibbonElements.webApplicationFrame), 12000, CnbRibbonConstants.webApplicationFrameErrorMessage);
        browser.switchTo().frame(CnbRibbonElements.webApplicationFrame.getWebElement());
    };

    switchToInnerIframe  () {
        browser.sleep(8000)
        browser.switchTo().frame(2);
    };

    switchToDefaultContent  () {
        browser.switchTo().defaultContent();
    };

    getTitle  () {
        return browser.getTitle();
    };

    waitForSpinnerLoadingComplete  (spinnerElementId:any) {
        browser.wait(function () {
            return spinnerElementId.isDisplayed().then(function (result:boolean) { return !result });
        }, 120000, CnbRibbonConstants.waitForSpinnerLoadingErrorMessage);
    };

    verifyTaskSuccessOrFailureStatus  (spinnerId:any, successId:any, failedId:any, errorMessage:any) {
        this.waitForSpinnerLoadingComplete(spinnerId);
        var statusSuccessMessageDisplayed = this.EC.visibilityOf(successId);
        var statusErrorMessageNotDisplay = this.EC.not(this.EC.visibilityOf(failedId));
        browser.wait(this.EC.and(statusSuccessMessageDisplayed, statusErrorMessageNotDisplay), 12000, errorMessage);
    };

    closeExistingPanel  () {
        this.switchToDefaultContent();
        this.switchToWebAppFrame();
        CnbRibbonElements.panelCloseButton.isPresent().then((result:any)=> {
            if (result) {
                CnbRibbonElements.panelCloseButton.click();
            }
        });
    };
    //#endregion


}