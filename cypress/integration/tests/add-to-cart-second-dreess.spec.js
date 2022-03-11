import { clickOnSignInButton } from '../actions/home-actions';
import { validateMyAccountPage } from '../actions/my-account-actions';
import { fillLoginForm } from '../actions/auth-actions';
import {
    hoverOverDresses,
    selectSummerDresses,
    validateSummerDressesCategory,
    selectSortByFilter,
    clickOnAddToCart
} from '../actions/dresses-actions';

context('Automation Challenge 4 Fun', () => {
    beforeEach(() => {
        cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit('/');
      cy.wait(1000);
      clickOnSignInButton();
      fillLoginForm(Cypress.env('email'),Cypress.env('password'));
      validateMyAccountPage();
    });

    it('Add to cart the second dress', () => {
        hoverOverDresses();
        selectSummerDresses();
        validateSummerDressesCategory();
        selectSortByFilter('Price: Lowest first');
        clickOnAddToCart();
    });
});