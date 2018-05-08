import {  CnbRibbonConstants} from '../constants/cnb-ribbon-constants';
import {element, by,$,$$} from 'protractor';

export class CnbRibbonElements {
    //#region Class NoteBook Ribbon Control Elements
     static webApplicationFrame = element(by.id(  CnbRibbonConstants.webApplicationFrameId));
     static classNoteBookRibbon = element(by.cssContainingText(  CnbRibbonConstants.classNoteBookRibbonClass,  CnbRibbonConstants.classNoteBookRibbonClassText));
     static cnbRibbonPinButton = element(by.id(  CnbRibbonConstants.cnbRibbonPinButtonId));
     static  distributePageButton = element(by.id(  CnbRibbonConstants.distributePageButtonId));
     static distributeNewSectionButton = element(by.id(  CnbRibbonConstants.distributeNewSectionButtonId));
     static createClassNotebookLinkButton = element(by.id( CnbRibbonConstants.createClassNotebookLinkButtonId));
     static addOrRemoveStudentsLinkButton = element(by.id(  CnbRibbonConstants.addOrRemoveStudentsLinkButtonId));
     static  addOrRemoveTeachersLinkButton = element(by.id(  CnbRibbonConstants.addOrRemoveTeachersLinkButtonId));
     static  manageNotebooksLinkButton = element(by.id(  CnbRibbonConstants.manageNotebooksLinkButtonId));
     static professionalDevelopmentDropDownButton = element(by.id(  CnbRibbonConstants.professionalDevelopmentDropDownButtonId));
     static  oneNoteForTeachersTrainingLinkButton = element(by.id(  CnbRibbonConstants.oneNoteForTeachersTrainingLinkButtonId));
     static  classNotebookAddInGuideLinkButton = element(by.id(  CnbRibbonConstants.classNotebookAddInGuideLinkButtonId));
     static  oneNoteEducationBlogLinkButton = element(by.id(  CnbRibbonConstants.oneNoteEducationBlogLinkButtonId));
     static  microsoftEducatorCommunityLinkButton = element(by.id(  CnbRibbonConstants.microsoftEducatorCommunityLinkButtonId));
     static  helpAndFeedbackDropDownButton = element(by.id(  CnbRibbonConstants.helpAndFeedbackDropDownButtonId));
     static  sendFeedbackLinkButton = element(by.id(  CnbRibbonConstants.sendFeedbackLinkButtonId));
     static  viewKnowledgeBaseLinkButton = element(by.id(  CnbRibbonConstants.viewKnowledgeBaseLinkButtonId));
     static  suggestAFeatureLinkButton = element(by.id(  CnbRibbonConstants.suggestAFeatureLinkButtonId));
     static  panelCloseButton = $(CnbRibbonConstants.panelCloseButtonParentCss).element(by.css(  CnbRibbonConstants.panelCloseButtonCSS));
    //#endregion

    //#region Distribute Page  Elements
    static officePanelSignIn = element(by.id(  CnbRibbonConstants.officePanelSignInId));
    static  allowPopUp = element(by.buttonText(  CnbRibbonConstants.allowPopUpId));
    static  classNotesSection = element(by.cssContainingText('.sectionSpan', 'Class Notes'));
    static  distributeButton = element(by.id(  CnbRibbonConstants.distributeButtonId));
    static  successMessage = element(by.id(  CnbRibbonConstants.successMessageId));
    static  failedStatus = element(by.id(  CnbRibbonConstants.failedStatusId));
    static  loadingStatus = element(by.id(  CnbRibbonConstants.loadingStatusId));
    //#endregion

    //#region Distribute New Section Elements
    static  distributeNewSectionNameInput = element(by.id( CnbRibbonConstants.distributeNewSectionNameInputId));
    static  distributeNewSectionCreateButton = element(by.id( CnbRibbonConstants.distributeNewSectionCreateButtonId));
    //#endregion

    //#region Review Student work Elements
    static  reviewStudentWorkButton = element(by.id( CnbRibbonConstants.reviewStudentWorkButtonId));
    static  studentSectionDropDownOption = element(by.id( CnbRibbonConstants.studentSectionDropDownOptionId));
    // classNotesSectionDropDownList = element.all(by.css('.ms-Dropdown-items li')).get(1);
    static  classNotesSectionDropDownList = element.all(by.css('.ms-Dropdown-items li')).get(2);
    static  reviewStudentWorkTabSpinner = element(by.id( CnbRibbonConstants.reviewStudentWorkTabSpinnerId));
    static  chooseDistributedPageDropDown = element(by.id( CnbRibbonConstants.chooseDistributedPageDropDownId));
    static  distributedPageDropDownItems = element.all(by.css( CnbRibbonConstants.distributedPageDropDownItemsLiCss)).get(1);
    static  studentNamesFirst = element.all(by.css( CnbRibbonConstants.studentNamesFirstLiCss)).get(0);
    static  selectedPageTitle = $$( CnbRibbonConstants.selectedPageTitleId).get(0);
    //#endregion
};