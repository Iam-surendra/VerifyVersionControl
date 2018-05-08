import {OneNoteHomeElements} from '../elements/onenote-home-elements';
import{OneNoteHomeConstants} from'../constants/onenote-home-constants';
import {browser,protractor} from 'protractor';

export class OneNoteHomePage{
    EC:any;
    constructor(){
        this.EC = protractor.ExpectedConditions;
    }

   clickOnClassNoteBookTab () {
        browser.wait(this.EC.elementToBeClickable(OneNoteHomeElements.classNotebookTab), 12000, OneNoteHomeConstants.classNotebookTabErrorMessage);
        OneNoteHomeElements.classNotebookTab.click();
    };

   clickOnCNBook () {
        browser.wait(this.EC.elementToBeClickable(OneNoteHomeElements.CNBook), 12000, OneNoteHomeConstants.CLassNoteBookErrorMessage);
        OneNoteHomeElements.CNBook.click();
    };

   getCurrentPageTitle ():any {
        return browser.getTitle();
    };

}