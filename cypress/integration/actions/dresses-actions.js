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

// Uses the Sort By filter
export function selectSortByFilter(filter) {
    cy.get(dressesElements.sortByFilter.selector)
        .select(filter);
}

// Selects the add to cart button
export function clickOnAddToCart() {
    cy.wait(2000);
    cy.get(dressesElements.addToCart.selector)
        .eq(1)
        .click();
    shoppingCartModal();
}

// Validates that the item was added to the Shopping cart
function shoppingCartModal() {
    cy.get(dressesElements.shoppingCartLayer.selector)
        .should('be.visible');
}