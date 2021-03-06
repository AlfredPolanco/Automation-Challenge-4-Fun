import { homePageElements } from "../pageElements/home-page-elements";

// This function clicks on the Create an user button
export function clickOnSignInButton() {
    cy.get(homePageElements.signInButton.selector).click();
}

export function clickOnLogo() {
    cy.get(homePageElements.logo.selector).click();
}

//Clicks the home button
export function clickOnHomeButton() {
    cy.get(homePageElements.homeButton.selector).click();
}