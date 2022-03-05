import { clickOnSignInButton } from '../actions/home-actions';
import { typeEmailAddress } from '../actions/auth-actions';
import { userInfo } from '../../support/helper';

context('Automation Challenge 4 Fun', () => {
    beforeEach(() => {
        cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit('/');
      cy.wait(1000);
    });

    it('Create an account', () => {
        clickOnSignInButton();
        typeEmailAddress(userInfo.userData.email);
    });
});