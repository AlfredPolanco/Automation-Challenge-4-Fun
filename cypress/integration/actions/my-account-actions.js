// This file contains all actions from the My Account page
import { myAccountElements } from "../pageElements/my-account-elements"

// Validates that user is at my account page
export function validateMyAccountPage() {
    cy.get(myAccountElements.myAccountHeader.selector)
        .should('have.text', myAccountElements.myAccountHeader.text);
}

// Clicks the Sign Out button
export function clickOnSignOutButton() {
    cy.get(myAccountElements.logOutButton.selector).click();
}