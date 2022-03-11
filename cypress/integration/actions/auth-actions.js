// This file contain all Login page actions
import { authPageElements } from "../pageElements/auth-page-elements";

// Validates that user is currently at Authentication page
function validateAuthHeader() {
    cy.get(authPageElements.authHeader.selector)
        .should('have.text', authPageElements.authHeader.text);
}

// Clicks Create an account button
function clickSubmitCreateButton() {
    cy.get(authPageElements.submitCreateButton.selector).click();
}

// Types email to create account
export function typeEmailAddress(email) {
    cy.waitUntil(() => cy.get(authPageElements.authHeader.selector)
    .should('be.visible'),{
      timeout: 1500,
      interval: 100,
    });
    cy.get(authPageElements.emailInput.selector)
        .type(email)
    clickSubmitCreateButton();
}

// Types the email address and password to log in
export function fillLoginForm(email, password) {
    cy.waitUntil(() => cy.get(authPageElements.authHeader.selector)
    .should('be.visible'),{
      timeout: 1500,
      interval: 100,
    });
    cy.get(authPageElements.loginForm.emailLogin.selector)
        .type(email);
    cy.get(authPageElements.loginForm.passwordLogin.selector)
        .type(password);
    cy.get(authPageElements.loginForm.submitLogin.selector)
        .type(password);
};

// Fills the personal information form
export function fillPersonalInformationForm(
    firstName,
    lastName,
    password,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    company,
    address,
    city,
    state,
    postalCode,
    additionalInfo,
    phoneNumber) {
    cy.waitUntil(() => cy.get(authPageElements.authHeader.selector)
    .should('be.visible'),{
      timeout: 1500,
      interval: 100,
    });
    cy.get(authPageElements.personalInformationForm.gender.selector).click()
    cy.get(authPageElements.personalInformationForm.customerFirstName.selector)
        .type(firstName);
    cy.get(authPageElements.personalInformationForm.customerLastName.selector)
        .type(lastName);
    cy.get(authPageElements.personalInformationForm.customerPassword.selector)
        .type(password);
    cy.get(authPageElements.personalInformationForm.customerDayOfBirth.selector)
        .select(dayOfBirth);
    cy.get(authPageElements.personalInformationForm.customerMonthOfBirth.selector)
        .select(monthOfBirth);
    cy.get(authPageElements.personalInformationForm.customerYearOfBirth.selector)
        .select(yearOfBirth);
    cy.get(authPageElements.personalInformationForm.addressCompany.selector)
        .type(company);
    cy.get(authPageElements.personalInformationForm.address1.selector)
        .type(address);
    cy.get(authPageElements.personalInformationForm.city.selector)
        .type(city);
    cy.get(authPageElements.personalInformationForm.state.selector)
        .select(state);
    cy.get(authPageElements.personalInformationForm.postalCode.selector)
        .type(postalCode);
    cy.get(authPageElements.personalInformationForm.additionalInfo.selector)
        .type(additionalInfo);
    cy.get(authPageElements.personalInformationForm.phoneNumber.selector)
        .type(phoneNumber);
    cy.get(authPageElements.personalInformationForm.submitAccountButton.selector).click();
}
