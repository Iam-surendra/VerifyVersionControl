import { LmsSisHelpersPage } from '../pages/lms-sis-helpers-page';
var testData = require('../test-data.json');

var IsConnectedToLMS = false;
var IsNotebookMapped = false;
var IsStudentsMapped = false;
var IsAssignmentCreated = false;

describe('Canvas Lms', () => {
    let lmsSisHelperPage = new LmsSisHelpersPage();

    it('how to connect to link should redirected to canvas video tutorial page', function () {
        lmsSisHelperPage.closeExistingPanel();
        lmsSisHelperPage.clickConnectionDropDownButton();
        lmsSisHelperPage.chooseLmsSisFromDropDown(testData.lmsList[1]);
        lmsSisHelperPage.ClickHowToConnectLMSOrSISLinkButton();
        lmsSisHelperPage.clickAllowPopup();
        lmsSisHelperPage.switchToWindow(1);
        lmsSisHelperPage.verifyHowToConnectCanvasLinkPageTitle();
        lmsSisHelperPage.switchToWindow(0);
        lmsSisHelperPage.switchToWebAppFrame();
    });

    it('should connect to canvas lms', function () {
        lmsSisHelperPage.clickConnectionDropDownButton();
        lmsSisHelperPage.chooseLmsSisFromDropDown(testData.lmsList[1]);
        lmsSisHelperPage.clickSignInToLmsButton();
        lmsSisHelperPage.clickAllowPopup();
        lmsSisHelperPage.switchToWindow(1);
        lmsSisHelperPage.verifyCanvasLoginPage();
        lmsSisHelperPage.enterCanvasTenantUrl(testData.canvasTenantUrl);
        lmsSisHelperPage.clickCanvasSubmitButton();
        lmsSisHelperPage.enterCanvasEmail(testData.canvasEmail);
        lmsSisHelperPage.enterCanvasPassword(testData.canvasPassword);
        lmsSisHelperPage.clickCanvasLoginButton();
        lmsSisHelperPage.clickCanvasAuthorizeButton();
        lmsSisHelperPage.switchToWindow(0);
        lmsSisHelperPage.switchToWebAppFrame();
        IsConnectedToLMS = lmsSisHelperPage.verifyManageClassButtonIsEnabled();
    });

    it('manage classes button should redirected to Canvas', function () {
        if (IsConnectedToLMS) {
            lmsSisHelperPage.ClickManageClassButton();
            lmsSisHelperPage.browserSleep(8000);
            lmsSisHelperPage.switchToWindow(1);
            lmsSisHelperPage.verifyPageLink(testData.canvasManageClassesButtonLink);
        }
        else {
            pending();
        }
    });

    it('should map classNotebook to canvas course', function () {
        if (IsConnectedToLMS) {
            lmsSisHelperPage.switchToWindow(0);
            lmsSisHelperPage.switchToWebAppFrame();
            lmsSisHelperPage.clickConnectionDropDownButton();
            lmsSisHelperPage.clickMapClassNotebookMenuItem();
            lmsSisHelperPage.switchToInnerIframe();
            IsNotebookMapped = lmsSisHelperPage.mapClassNoteBookWithGivenCourseName(testData.canvasMapCourseName);
        }
        else {
            pending();
        }
    });

    it('should map students for canvas lms', function () {
        if (IsNotebookMapped) {
            lmsSisHelperPage.switchToWebAppFrame();
            lmsSisHelperPage.clickConnectionDropDownButton();
            lmsSisHelperPage.clickMapStudentsMenuItem();
            lmsSisHelperPage.switchToInnerIframe();
            lmsSisHelperPage.mapFirstStudent();
            IsStudentsMapped = lmsSisHelperPage.clickMapStudentsOkButton();
        }
        else {
            pending();
        }
    });

    it('should create assignment For canvas lms', function () {
        if (IsStudentsMapped) {
            lmsSisHelperPage.switchToWebAppFrame();
            lmsSisHelperPage.addNewPage(testData.canvasPageTitle);
            lmsSisHelperPage.clickCreateAssignmentButton();
            lmsSisHelperPage.switchToInnerIframe();
            lmsSisHelperPage.chooseDateFromDatePicker();
            lmsSisHelperPage.chooseTime();
            lmsSisHelperPage.chooseSectionInCreatInDropDown();
            lmsSisHelperPage.clickAssignmentCreateButton();
            IsAssignmentCreated = lmsSisHelperPage.verifyCreateAssignmentSuccessMessage();
        }
        else {
            pending();
        }
    });

    it('should be review the student work', function () {
        if (IsAssignmentCreated) {
            lmsSisHelperPage.closeExistingPanel();
            lmsSisHelperPage.clickReviewStudentWorkButton();
            lmsSisHelperPage.switchToInnerIframe();
            lmsSisHelperPage.clickStudentSectionDropDown();
            lmsSisHelperPage.chooseSectionFromDropDown();
            lmsSisHelperPage.chooseDistributedPageFromDropDown(testData.canvasPageTitle);
            lmsSisHelperPage.clickEnterGradesCheckbox();
            lmsSisHelperPage.enterGradesValue();
            lmsSisHelperPage.clickSubmitGradesButton();
            lmsSisHelperPage.verifyReviewStudentGradesSuccessMessage();
            lmsSisHelperPage.switchToDefaultContent();
            lmsSisHelperPage.switchToWebAppFrame();
            lmsSisHelperPage.closeExistingPanel();
        }
        else {
            pending();
        }
    });

});