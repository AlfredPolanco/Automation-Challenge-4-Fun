// This page contains all dresses actions
import { dressesElements } from "../pageElements/dresses-elements";

export function hoverOverDresses() {
    cy.get(dressesElements.dresses.selector)
        .eq(1).invoke('show').should('be.visible');
}

// Clicks on the Summer Dresses section
export function selectSummerDresses() {
    cy.get(dressesElements.summerDresses.selector).click();
}

// Validates that the user is at Summer Dresses category
export function validateSummerDressesCategory() {
    cy.get(dressesElements.categoryName.selector)
        .contains(dressesElements.categoryName.text);
}