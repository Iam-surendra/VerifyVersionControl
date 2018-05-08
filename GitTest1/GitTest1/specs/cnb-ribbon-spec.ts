import {CnbRibbonPage} from '../pages/cnb-ribbon-page';
import {CnbRibbonConstants} from '../constants/cnb-ribbon-constants';
var testData = require('../test-data.json');

describe('ClassNoteBook Ribbon Controls', ()  =>{
    let cnbRibbonPage=new CnbRibbonPage();

    it('classNoteBook ribbon should be available', ()  =>{
        cnbRibbonPage.waitForPageCompleteLoad();
        cnbRibbonPage.switchToWebAppFrame();
        cnbRibbonPage.clickClassNoteBookRibbon();
        cnbRibbonPage.pinCnbRibbon();
        expect(cnbRibbonPage.getPinCnbRibbonTitle()).toEqual(CnbRibbonConstants.cnbRibbonPinTitleText);
    });

    it('all the given link buttons should be available on class note book ribbon', ()  =>{
        cnbRibbonPage.verifyManageNotebookLinks();
        cnbRibbonPage.verifyProfessionalDevelopmentLinks();
        cnbRibbonPage.verifyHelpAndFeedbackLinks();
    });

    it('should distribute the page', ()  =>{
        cnbRibbonPage.clickDistributePageButton();
        cnbRibbonPage.switchToInnerIframe();
        cnbRibbonPage.clickOfficePanelSignIn();
        cnbRibbonPage.clickAllowPopup();
        cnbRibbonPage.chooseClassNotesSection();
        cnbRibbonPage.clickDistributeButton();
        cnbRibbonPage.verifyDistributePageSuccessMessage();
    });

    it('should distribute new section', ()  =>{
        cnbRibbonPage.closeExistingPanel();
        cnbRibbonPage.clickDistributeNewSectionButton();
        cnbRibbonPage.switchToInnerIframe();
        cnbRibbonPage.enterNewSectionName(testData.distributeNewSectionName);
        cnbRibbonPage.clickDistributeNewSectionCreateButton();
        cnbRibbonPage.verifyDistributeNewSectionSuccessMessage();
    });

    it('should review student work', ()  =>{
        cnbRibbonPage.closeExistingPanel();
        cnbRibbonPage.clickReviewStudentWorkButton();
        cnbRibbonPage.switchToInnerIframe();
        cnbRibbonPage.clickStudentSectionDropDown();
        cnbRibbonPage.chooseClassNotesSectionFromDropDown();
        cnbRibbonPage.chooseDistributedPageFromDropDown();
        cnbRibbonPage.switchToDefaultContent();
        cnbRibbonPage.switchToWebAppFrame();
        cnbRibbonPage.verifyReviewStudentWorkSuccessOrFailure();
    });
});