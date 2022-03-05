// This file contain all Login page actions
import { authPageElements } from "../pageElements/auth-page-elements";

// Validates that user is currently at Authentication page
function validateAuthHeader() {
    cy.get(authPageElements.authHeader.selector)
    .should('have.text', authPageElements.authHeader.text);
}

// Clicks Create an account button
function clickSubmitCreateButton() {
    cy.get(authPageElements.submitCreateButton.selector)
        .click();
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