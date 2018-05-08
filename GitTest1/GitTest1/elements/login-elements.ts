import { LoginConstants } from '../constants/login-constants';
import {element, by,$} from 'protractor';

export class LoginElements {
    static oneNoteSignInButton = element(by.id(LoginConstants.oneNoteSignInButtonId));
    static signInFrame = element(by.id(LoginConstants.signInFrameId));
    static usernameTextBox = $(LoginConstants.usernameTextBoxCss);
    static passwordTextBox = element(by.id(LoginConstants.passwordTextBoxId));
    static nextButton = element(by.buttonText(LoginConstants.nextButtonText));
    static signInButton = element(by.id(LoginConstants.signInButtonId));
    static staySigInYesButton = element(by.id(LoginConstants.staySigInYesButtonId));
}