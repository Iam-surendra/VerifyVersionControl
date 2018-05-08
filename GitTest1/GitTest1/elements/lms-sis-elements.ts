import { LmsSisConstants } from '../constants/lms-sis-constants';
import { element, by, $, $$ } from 'protractor';

export class LmsSisElements {
    //#region Connections Elements
    static connectionsDropDownButton = element(by.id(LmsSisConstants.connectionsDropDownButtonId));
    static connectionsDropDownItem = element(by.id(LmsSisConstants.connectionsDropDownItemId));
    static selectYourLMSOrSISDropDownButton = element(by.id(LmsSisConstants.selectYourLMSOrSISDropDownButtonId));
    static selectYourLMSOrSISDropDownList = element.all(by.css(LmsSisConstants.selectYourLMSOrSISDropDownListId));
    static signInToLmsButton = element(by.id(LmsSisConstants.signInToLmsButtonId));
    static allowPopUp = element(by.buttonText(LmsSisConstants.allowPopUpButtonText));
    static webApplicationFrame = element(by.id(LmsSisConstants.webApplicationFrameId));
    static howToConnectLmsOrSisLinkButton = element(by.id(LmsSisConstants.howToConnectLmsOrSisLinkButtonId));
    static manageClassButton = element(by.id(LmsSisConstants.manageClassButtonId));
    static successMessage = element(by.id(LmsSisConstants.successMessageId));
    static failedStatus = element(by.id(LmsSisConstants.failedStatusId));
    static loadingStatus = element(by.id(LmsSisConstants.loadingStatusId));
    static panelCloseButton = $(LmsSisConstants.panelCloseButtonParentCss).element(by.css(LmsSisConstants.panelCloseButtonChildCss));
    //#endregion

    //#region Map ClassNoteBook Elements
    static mapClassNotebooksMenuItem = element(by.id(LmsSisConstants.mapClassNotebooksMenuItemId));
    static selectCourseDropDownButton = element(by.id(LmsSisConstants.selectCourseDropDownButtonId));
    static selectCourseDropDownList = element.all(by.css(LmsSisConstants.selectCourseDropDownListId));
    static mapCourseOkButton = element(by.id(LmsSisConstants.mapCourseOkButtonId));
    //#endregion

    //#region map students
    static mapStudentsMenuItem = element(by.id(LmsSisConstants.mapStudentsMenuItemId));
    static selectStudentsDropDownButton = element.all(by.css(LmsSisConstants.selectStudentsDropDownButtonId)).get(0);
    static selectStudentsDropDownList = $$(LmsSisConstants.selectStudentsDropDownListId).get(1);
    static mapStudentsOkButton = element(by.id(LmsSisConstants.mapStudentsOkButtonId));
    //#endregion

    //#region Create Assignment
    static addPageButton = element(by.id(LmsSisConstants.addPageButtonId));
    static addPageTitle = element.all(by.css(LmsSisConstants.addPageTitleId)).get(0);
    static createAssignmentButton = element(by.id(LmsSisConstants.createAssignmentButtonId));
    static inputDatePicker = $(LmsSisConstants.inputDatePickerId);
    static timeDropDownButton = element(by.id(LmsSisConstants.timeDropDownButtonId));
    static timeDropDownItemButton = element.all(by.css(LmsSisConstants.timeDropDownItemButtonId)).last();
    static createInButton = element(by.id(LmsSisConstants.createInButtonId));
    static createInItemButton = element.all(by.css(LmsSisConstants.createInItemButtonId)).get(2);
    static assignmentCreateButton = element(by.id(LmsSisConstants.assignmentCreateButtonId));
    //#endregion

    //#region Review Student work with grades Elements
    static reviewStudentWorkButton = element(by.id(LmsSisConstants.reviewStudentWorkButtonId));
    static studentSectionDropDownOption = element(by.id(LmsSisConstants.studentSectionDropDownOptionId));
    static classNotesSection = element.all(by.css(LmsSisConstants.classNotesSectionLi)).get(2);
    static reviewStudentWorkTabSpinner = element(by.id(LmsSisConstants.reviewStudentWorkTabSpinnerId));
    static chooseDistributedPageDropDown = element(by.id(LmsSisConstants.chooseDistributedPageDropDownId));
    static distributedPageDropDownItems = element.all(by.css(LmsSisConstants.distributedPageDropDownItemsLi));
    static studentNamesFirst = element.all(by.css(LmsSisConstants.studentNamesFirstLi)).get(0);
    static enterGradesCheckbox = element(by.css(LmsSisConstants.enterGradesCheckboxId));
    static enterGradesValueInput = element(by.css(LmsSisConstants.enterGradesValueInputClass));
    static submitGradesButton = element(by.id(LmsSisConstants.submitGradesButtonId));
    //#endregion

    //#region Black Baud LMS Elements
    static blackBaudLoginForm = element(by.id(LmsSisConstants.blackBaudLoginFormId));
    static blackBaudTenantUrl = element(by.name(LmsSisConstants.blackBaudTenantUrlName));
    static blackBaudUserName = element(by.name(LmsSisConstants.blackBaudUserName));
    static blackBaudUserPassword = element(by.name(LmsSisConstants.blackBaudUserPasswordName));
    static blackBaudSubmitButton = element(by.id(LmsSisConstants.blackBaudSubmitButtonId));
    //#endregion

    //#region canvas LMS Elements
    static canvasLoginForm = element(by.id(LmsSisConstants.canvasLoginFormId));
    static canvasTenantUrl = element(by.name(LmsSisConstants.canvasTenantUrlName));
    static canvasSubmitButton = element(by.id(LmsSisConstants.canvasSubmitButtonId));
    static canvasEmail = element(by.id(LmsSisConstants.canvasEmailId));
    static canvasPassword = element(by.id(LmsSisConstants.canvasPasswordId));
    static canvasLoginButton = element(by.css(LmsSisConstants.canvasLoginButtonCss));
    static canvasAuthorizeButton = element(by.name(LmsSisConstants.canvasAuthorizeButtonName));
    //#endregion
}