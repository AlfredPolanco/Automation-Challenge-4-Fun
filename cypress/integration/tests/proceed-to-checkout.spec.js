import { clickOnSignInButton } from '../actions/home-actions';
import { validateMyAccountPage } from '../actions/my-account-actions';
import { fillLoginForm } from '../actions/auth-actions';
import {
    clickProceedToCheckoutCartButton,
    typeOnMessageBox,
    clickOnTermCheckbox,
    clickOnPaymentBankWireButton,
    clickOnConfirmOrderButton
} from '../actions/shopping-cart-actions';
import {
    hoverOverDresses,
    selectSummerDresses,
    validateSummerDressesCategory,
    selectSortByFilter,
    clickOnAddToCart,
    clickProceedToCheckoutButton,
    closeCartConfirmationModal
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
      hoverOverDresses();
      selectSummerDresses();
      validateSummerDressesCategory();
      selectSortByFilter('Price: Lowest first');
      clickOnAddToCart(1);
      closeCartConfirmationModal();
      clickOnAddToCart(2);
      clickProceedToCheckoutButton();
    });

    it('Proceed to checkout', () => {
        clickProceedToCheckoutCartButton();
        typeOnMessageBox();
        clickProceedToCheckoutCartButton();
        clickOnTermCheckbox();
        clickProceedToCheckoutCartButton();
        clickOnPaymentBankWireButton();
        clickOnConfirmOrderButton();
    });
});