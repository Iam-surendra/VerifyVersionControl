export class LmsSisConstants {
    /*ID/Paths for all the LMS/SIS Related controls*/

    //#region Connections ID/Paths
    static connectionsDropDownButtonId = '3595d24d-1b54-4075-b64f-cae6bdb151b4connections-Large';
    static connectionsDropDownItemId = '3595d24d-1b54-4075-b64f-cae6bdb151b4connections.connections-Menu16';
    static selectYourLMSOrSISDropDownButtonId = 'ServiceDropdown-option';
    static selectYourLMSOrSISDropDownListId = '#ServiceDropdown-list li';
    static signInToLmsButtonId = 'SignInButton';
    static allowPopUpButtonText = 'Allow';
    static webApplicationFrameId = 'WebApplicationFrame';
    static howToConnectLmsOrSisLinkButtonId = 'HowToConnectLink';
    static manageClassButtonId = '3595d24d-1b54-4075-b64f-cae6bdb151b4manageClasses-Large';
    static successMessageId = 'SuccessfulStatus';
    static failedStatusId = 'FailedStatus';
    static loadingStatusId = 'LoadingStatus';
    static panelCloseButtonParentCss = '.WACTaskPaneEntry[style*="block"]';
    static panelCloseButtonChildCss = '.cui-taskPaneCloseButton';
    static monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    //#endregion

    //#region Map ClassNoteBook ID/Paths
    static mapClassNotebooksMenuItemId = '3595d24d-1b54-4075-b64f-cae6bdb151b4connections.mapClassNotebooks-Menu16';
    static selectCourseDropDownButtonId = 'ClassDropdown-option';
    static selectCourseDropDownListId = '#ClassDropdown-list li';
    static mapCourseOkButtonId = 'MapButton';
    //#endregion

    //#region map students
    static mapStudentsMenuItemId = '3595d24d-1b54-4075-b64f-cae6bdb151b4connections.mapStudents-Menu16';
    static selectStudentsDropDownButtonId = '#undefined-option';
    static selectStudentsDropDownListId = '#undefined-list li';
    static mapStudentsOkButtonId = 'SaveButton';
    //#endregion

    //#region Create Assignment ID/Paths
    static addPageButtonId = 'AddPage';
    static addPageTitleId = '#WACViewPanel_EditingElement .NormalTextRun';
    static createAssignmentButtonId = '3595d24d-1b54-4075-b64f-cae6bdb151b4createAssignment-Large';
    static inputDatePickerId = "#DatePickerInput";
    static timeDropDownButtonId = 'TimeDropdown-option';
    static timeDropDownItemButtonId = '#TimeDropdown-list li';
    static createInButtonId = 'StudentSectionDropdown-option';
    static createInItemButtonId = '#StudentSectionDropdown-list li';
    static assignmentCreateButtonId = 'CreateAssignmentButton';
    //#endregion

    //#region Review Student work with grades ID/Paths
    static reviewStudentWorkButtonId = '3595d24d-1b54-4075-b64f-cae6bdb151b4reviewStudentWork-Large';
    static studentSectionDropDownOptionId = 'StudentSectionDropdown-option';
    static classNotesSectionLi = '.ms-Dropdown-items li';
    static reviewStudentWorkTabSpinnerId = 'PageLoading';
    static chooseDistributedPageDropDownId = 'DistributedPageDropdown-option';
    static distributedPageDropDownItemsLi = '#DistributedPageDropdown li';
    static studentNamesFirstLi = '#StudentInfoList li';
    static enterGradesCheckboxId = '#EnterGrades label';
    static enterGradesValueInputClass = '.gradePointsInput';
    static submitGradesButtonId = 'SubmitGradesButton';
    //#endregion

    //#region Black Baud LMS ID/Paths
    static blackBaudLoginFormId = 'loginForm';
    static blackBaudTenantUrlName = 'tenantUrl';
    static blackBaudUserName = 'userName';
    static blackBaudUserPasswordName = 'userPassword';
    static blackBaudSubmitButtonId = 'submit';
    static blackBaudLmsHowToConnectPageTitle = 'OfficeMix : Blackbaud';
    //#endregion

    //#region canvas LMS ID/Paths
    static canvasLoginFormId = 'loginForm';
    static canvasLmsHowToConnectPageTitle = 'OfficeMix : Canvas';
    static canvasTenantUrlName = 'tenantUrl';
    static canvasSubmitButtonId = 'submit';
    static canvasEmailId = 'pseudonym_session_unique_id';
    static canvasPasswordId = 'pseudonym_session_password';
    static canvasLoginButtonCss = '.Button--login';
    static canvasAuthorizeButtonName = 'commit';
    //#endregion


    /*Error messages for all the LMS/SIS Related controls*/

    //#region Connections Error Messages
    static loadingSpinnerErrorMessage = 'spinner Still loading';
    static connectionsDropDownButtonErrorMessage = 'connections drop down button is not available';
    static connectionsDropDownItemErrorMessage = 'connections drop down item button is not available';
    static selectYourLMSOrSISDropDownButtonErrorMessage = 'Select Your LMS or SIS Drop Down Button is not available';
    static signInToLmsButtonErrorMessage = 'sign in to lms button is not available';
    static allowPopUpButtonErrorMessage = 'Alert is not getting present'
    static webApplicationFrameErrorMessage = 'WebApplication Frame is not found';
    static howToConnectLmsOrSisLinkButtonErrorMessage = 'How To Connect LMS or SIS Link Button is not available';
    static manageClassButtonErrorMessage = 'manage classes button is not enabled';
    //#endregion

    //#region Map ClassNoteBook Error Messages
    static mapClassNotebooksMenuItemErrorMessage = 'Map Class Notebook Menu Item is not available';
    static selectCourseDropDownButtonErrorMessage = 'Select Course Drop Down Button is not available';
    static mapCourseOkButtonErrorMessage = 'Map course Ok Button is not available';
    //#endregion

    //#region map students Error Messages
    static mapStudentsMenuItemErrorMessage = 'Map Students Menu Item is not available';
    static selectStudentsDropDownButtonErrorMessage = 'students drop down is not available';
    static selectStudentsDropDownListErrorMessage = 'student drop down list is not available';
    static mapStudentsOkButtonErrorMessage = 'map students ok button is not available';
    //#endregion

    //#region Create Assignment Error Messages
    static addPageButtonErrorMessage = 'Add Page button  is not available';
    static createAssignmentButtonErrorMessage = 'create assignment button id is not available in CNB Ribbon';
    static inputDatePickerErrorMessage = 'Date picker is not available';
    static timeDropDownButtonErrorMessage = 'time drop down button is not available in the assignment panel';
    static timeDropDownItemButtonErrorMessage = 'time drop down item button id is not available in the assignment panel';
    static createInButtonErrorMessage = 'Create in button id is not available';
    static createInItemButtonErrorMessage = 'Create in item button id is not available';
    static assignmentCreateButtonErrorMessage = 'Create assignment button is not available';
    static createAssignmentFailedErrorMessage = 'unable to create assignment';
    //#endregion

    //#region Review Student work with grades Error Messages
    static reviewStudentWorkButtonErrorMessage = 'Review student work button is missing on cnb ribbon';
    static studentSectionDropDownOptionErrorMessage = 'Review student work student sections dropdown is not available / clickable at this time';
    static classNotesSectionErrorMessage = 'Class Notes Section is not available on the drop down';
    static chooseDistributedPageDropDownErrorMessage = 'Distributed pages drop down is not available on the review student work tab';
    static studentNamesFirstErrorMessage = 'No students found';
    static enterGradesCheckboxErrorMessage = 'Enter Grades Checkbox is not available';
    static enterGradesValueInputErrorMessage = 'Enter Grades Checkbox is not available';
    static submitGradesButtonErrorMessage = 'Submit Grades Button is not enabled.';
    static reviewStudentWorkFailedErrorMessage = 'unable to review student work';
    //#endregion

    //#region Black Baud LMS Error Messages
    static blackBaudLoginFormErrorMessage = 'black Baud Login Form not opened';
    static blackBaudTenantUrlErrorMessage = 'Black Baud Tenant Url Text box is missing';
    static blackBaudUserNameErrorMessage = 'Black Baud User Name Text box is missing';
    static blackBaudUserPasswordErrorMessage = 'black Baud Password Text box is missing';
    static blackBaudSubmitButtonErrorMessage = 'black Baud Submit Button button is not available';
    //#endregion

    //#region canvas LMS Error Messages
    static canvasLoginFormErrorMessage = 'canvas Login Form not opened';
    static canvasTenantUrlErrorMessage = 'Canvas Tenant Url Text box is missing';
    static canvasSubmitButtonErrorMessage = 'Canvas Submit button is missing';
    static canvasEmailErrorMessage = 'Canvas Email Text box is missing';
    static canvasPasswordErrorMessage = 'Canvas Password Text box is missing';
    static canvasLoginButtonErrorMessage = 'Canvas Login Button is not available';
    static canvasAuthorizeButtonErrorMessage = 'Canvas Authorize Button is not available';
    //#endregion

}