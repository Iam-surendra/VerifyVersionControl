import {OneNoteHomeConstants  } from '../constants/onenote-home-constants';
import {element, by} from 'protractor';

export class OneNoteHomeElements {
    static classNotebookTab = element(by.id(OneNoteHomeConstants.classNotebookTabId));
    static CNBook = element(by.linkText(OneNoteHomeConstants.CLassNoteBookId));
}