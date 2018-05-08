export  class CnbRibbonConstants{
    /*ID/Paths for all the cnb ribbon controls*/ 

//#region Class NoteBook Ribbon Control ID/Paths
static webApplicationFrameId = "WebApplicationFrame";
static cnbRibbonPinTitleText = "Collapse the Ribbon";
static classNoteBookRibbonClass =".cui-tt-span";
static  classNoteBookRibbonClassText ="Class Notebook";
static cnbRibbonPinButtonId="RibbonPinButton-Small";
static distributePageButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4distributePage-Large";
static distributeNewSectionButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4distributeSection-Large";
static reviewStudentWorkButtonId = "3595d24d-1b54-4075-b64f-cae6bdb151b4reviewStudentWork-Large";
static createClassNotebookLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4openTabForCreateClassNotebook-Medium";
static addOrRemoveStudentsLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4openTabForManageStudent-Medium";
static addOrRemoveTeachersLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4openTabForManageTeacher-Medium";
static manageNotebooksLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4openTabForGetNotebookLink-Medium";
static professionalDevelopmentDropDownButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4professionalDevelopmentId-Large";
static oneNoteForTeachersTrainingLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4professionalDevelopment.teacherTraining-Menu16";
static classNotebookAddInGuideLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4professionalDevelopment.addinGuide-Menu16";
static oneNoteEducationBlogLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4professionalDevelopment.educationBlog-Menu16";
static microsoftEducatorCommunityLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4professionalDevelopment.educationCommunity-Menu16";
static helpAndFeedbackDropDownButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4sendfeedbackId-Large";
static sendFeedbackLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4HelpAndFeedBack.sendfeedback-Menu16";
static viewKnowledgeBaseLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4HelpAndFeedBack.viewKnowledge-Menu16";
static suggestAFeatureLinkButtonId="3595d24d-1b54-4075-b64f-cae6bdb151b4HelpAndFeedBack.suggestFeature-Menu16";
static panelCloseButtonParentCss = ".WACTaskPaneEntry[style*=\"block\"]";
static panelCloseButtonCSS=".cui-taskPaneCloseButton";
static getTitleAttributeText='title';
//#endregion

//#region Distribute Page  ID/Paths
 static officePanelSignInId ="SignInButton";
 static allowPopUpId = "Allow";
 static classNotesSectionClass = ".sectionSpan";
 static classNotesSectionClassText = "Class Notes";
 static distributeButtonId="DistributePageButton";
 static successMessageId="SuccessfulStatus";
 static failedStatusId="FailedStatus";
 static loadingStatusId="LoadingStatus";
 //#endregion

 //#region Distribute New Section ID/Paths
 static distributeNewSectionNameInputId = "SectionNameInput";
 static distributeNewSectionCreateButtonId = "DistributeSectionButton";
//#endregion

//#region Review Student work ID/Paths
static studentSectionDropDownOptionId = "StudentSectionDropdown-option";
static classNotesSectionLiCss = ".ms-Dropdown-items li";
static reviewStudentWorkTabSpinnerId = "PageLoading";
static chooseDistributedPageDropDownId = "DistributedPageDropdown-option";
static distributedPageDropDownItemsLiCss = "#DistributedPageDropdown-list li";
static studentNamesFirstLiCss = "#StudentInfoList li";
static selectedPageTitleId = ".undefined,.active mainItem__wrapper___2fpxM";
//#endregion


/*Error messages for all the cnb ribbon controls*/ 


//#region Class NoteBook Ribbon Control Error Messages
static webApplicationFrameErrorMessage = 'WebApplication Frame is not found';
static classNoteBookRibbonErrorMessage ='ClassNoteBook Ribbon is not available';
static cnbRibbonPinButtonErrorMessage='cnb ribbon pin is missing / cnb ribbon is not open';
static distributePageButtonErrorMessage='Distribute page button is missing on cnb ribbon';
static distributeNewSectionButtonErrorMessage='Distribute new section button is missing on cnb ribbon';
static reviewStudentWorkButtonErrorMessage = 'Review student work button is missing on cnb ribbon';
static createClassNotebookLinkButtonErrorMessage='Create ClassNoteBook Link is not available';
static addOrRemoveStudentsLinkButtonErrorMessage='Add Or Remove Students Link is not available';
static addOrRemoveTeachersLinkButtonErrorMessage='Add Or Remove Teachers Link is not available';
static manageNotebooksLinkButtonErrorMessage='Manage Notebook Link is not available';
static professionalDevelopmentDropDownButtonErrorMessage='Professional Development DropDown Button is not available';
static oneNoteForTeachersTrainingLinkButtonErrorMessage='OneNote For Teachers Training Link is not available';
static classNotebookAddInGuideLinkButtonErrorMessage='Class Notebook Add In Guide Link is not available';
static oneNoteEducationBlogLinkButtonErrorMessage='OneNote Education Blog Link is not available';
static microsoftEducatorCommunityLinkButtonErrorMessage='Microsoft Educator Community Link is not available';
static helpAndFeedbackDropDownButtonErrorMessage='Help And Feedback DropDown Button is not available';
static sendFeedbackLinkButtonErrorMessage='Send Feedback Link is not available';
static viewKnowledgeBaseLinkButtonErrorMessage='View Knowledge Base Link is not available';
static suggestAFeatureLinkButtonErrorMessage='Suggest A Feature Link is not available';
//#endregion

//#region Distribute Page Error Messages
static officePanelSignInErrorMessage ='office panel sign in missing on distribute page panel';
static allowPopUpErrorMessage = 'Allow or deny Alert is not getting present';
static classNotesSectionErrorMessage ='Class Notes section is not available';
static distributeButtonErrorMessage='distribute button is missing on distribute page panel';
static DistributePageFailedErrorMessage ='Unable to distribute the page'
//#endregion

//#region Distribute New Section Error Messages
static distributeNewSectionNameInputErrorMessage = 'Distribute new section name textBox is missing';
static distributeNewSectionCreateButtonErrormessage = 'Create distribute new section button is not clickable at this time';
static DistributeNewSectionFailedErrorMessage='Unable to distribute new section';
//#endregion

//#region Review Student work Error Messages

static studentSectionDropDownOptionErrorMessage = 'Review student work student sections dropdown is not available';
static reviewStudentWorkClassNotesSectionErrorMessage = 'Class Notes Section is not available on the review student work drop down';
static waitForSpinnerLoadingErrorMessage = 'spinner Still loading';
static chooseDistributedPageDropDownErrorMessage = 'Distributed pages drop down is not available on the review student work tab';
static distributedPageDropDownItemsErrorMessage = 'No pages found on Distributed pages drop down on the review student work tab';
static studentNamesListErrorMessage = 'No students found';
//#endregion

}