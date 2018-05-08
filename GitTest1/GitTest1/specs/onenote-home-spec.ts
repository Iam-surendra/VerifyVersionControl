import {OneNoteHomePage} from '../pages/onenote-home-page';
import {OneNoteHomeConstants} from '../constants/onenote-home-constants';

describe('OneNote Home Page', ()  =>{
    let oneNoteHomePage = new OneNoteHomePage();
    it('should open given notebook in OneNote online',()=> {
        oneNoteHomePage.clickOnClassNoteBookTab();
        oneNoteHomePage.clickOnCNBook();
        expect(oneNoteHomePage.getCurrentPageTitle()).toEqual(OneNoteHomeConstants.oneNoteOnlinePageTitle);
    });
});