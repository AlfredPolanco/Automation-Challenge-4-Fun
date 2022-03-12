import { clickOnSignInButton } from '../actions/home-actions';
import { validateMyAccountPage } from '../actions/my-account-actions';
import { fillLoginForm } from '../actions/auth-actions';

context('Automation Challenge 4 Fun', () => {
    beforeEach(() => {
        cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit('/');
      cy.wait(1000);
    });

    it('Log in', () => {
      clickOnSignInButton();
      fillLoginForm(Cypress.env('email'),Cypress.env('password'));
      validateMyAccountPage();
    });
});