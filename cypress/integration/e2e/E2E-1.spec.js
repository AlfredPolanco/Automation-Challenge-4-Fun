// This file will contain all automated test cases
import { userInfo } from '../../support/helper';
import { fillLoginForm } from '../actions/auth-actions';
import { clickOnSignInButton, clickOnHomeButton } from '../actions/home-actions';
import { typeEmailAddress, fillPersonalInformationForm } from '../actions/auth-actions';
import { validateMyAccountPage, clickOnSignOutButton } from '../actions/my-account-actions';
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

describe('E2E-1: Automation Challenge', () => {

    before(() => {
        cy.visit('/');
        clickOnSignInButton();
        fillLoginForm(Cypress.env('email'),Cypress.env('password'));
        validateMyAccountPage();
    });

    beforeEach(() => {
        cy.getCookies().then(cookies => {
            const namesOfCookies = cookies.map(c => c.name);
            Cypress.Cookies.preserveOnce(...namesOfCookies);
        })
        Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    })

    afterEach(() => {
        cy.saveLocalStorage();
      });

    it('Visit page', () => {
        clickOnHomeButton();
        cy.visit('/');
        cy.url().should('eq', 'http://automationpractice.com/index.php')
    });

    it('Hover over a dress', () => {
        hoverOverDresses();
    });

    it('Select summer dresses', () => {
        hoverOverDresses();
        selectSummerDresses();
        validateSummerDressesCategory();
    });

    it('Sort by lowest first', () => {
        hoverOverDresses();
        selectSummerDresses();
        validateSummerDressesCategory();
        selectSortByFilter('Price: Lowest first');
    });

    it('Adds to cart the second dress and third dress', () => {
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

    it('Sign Out', () => {
        clickOnSignOutButton();
    });

    it('Create an account', () => {
        clickOnSignInButton();
        typeEmailAddress(userInfo.userData.email);
        fillPersonalInformationForm(
            userInfo.userData.firstName,
            userInfo.userData.lastName,
            userInfo.userData.password,
            userInfo.userData.dayOfBirth,
            userInfo.userData.monthOfBirth,
            userInfo.userData.yearOfBirth,
            userInfo.userData.company,
            userInfo.userData.address,
            userInfo.userData.city,
            userInfo.userData.state,
            userInfo.userData.postalCode,
            userInfo.userData.moreInfo,
            userInfo.userData.phoneNumber
        );
        validateMyAccountPage();
    });
});