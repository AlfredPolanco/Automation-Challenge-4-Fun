import { homePageElements } from "../pageElements/home-page-elements";

// This function clicks on the Create an user button
export function clickOnSignInButton() {
    cy.get(homePageElements.signInButton.selector)
        .click();
}