// This file will contain all automated test cases
import { userInfo } from '../../support/helper';
import { clickOnSignInButton } from '../actions/home-actions';
import { fillLoginForm } from '../actions/auth-actions';
import { typeEmailAddress, fillPersonalInformationForm } from '../actions/auth-actions';
import { validateMyAccountPage, clickOnSignOutButton } from '../actions/my-account-actions';
import {
    hoverOverDresses,
    selectSummerDresses,
    validateSummerDressesCategory,
    selectSortByFilter,
    clickOnAddToCart,
} from '../actions/dresses-actions';

describe('E2E-1: Automation Challenge', () => {

    it('Visit page', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.url().should('eq', 'http://automationpractice.com/index.php')
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

    it('Sign Out', () => {
        clickOnSignOutButton();
    });

    it('Log in', () => {
        clickOnSignInButton();
        fillLoginForm(Cypress.env('email'),Cypress.env('password'));
        validateMyAccountPage();
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

    it('Add to cart the second dress', () => {
        hoverOverDresses();
        selectSummerDresses();
        validateSummerDressesCategory();
        selectSortByFilter('Price: Lowest first');
        clickOnAddToCart();
    });
});