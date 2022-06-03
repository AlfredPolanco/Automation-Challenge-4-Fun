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
    cy.wait(3000);
}

// Clicks the add to cart button on a desired dress
export function clickOnAddToCart(dressLocation) {
    cy.get(dressesElements.addToCart.selector)
        .eq(dressLocation)
        .click({force:true});
    shoppingCartModal();
}
// Closes the confirmation modal after adding item to cart
export function closeCartConfirmationModal() {
    cy.wait(2000);
    cy.get(dressesElements.cartConformationModal.selector).click();
}

// Clicks on Continue Shopping after adding item to cart
export function clickContinueShoppingButton() {
    cy.wait(1000);
    cy.get(dressesElements.continueShopping.selector).click();
}

// Clicks on Proceed to Checkout after adding item to cart
export function clickProceedToCheckoutButton() {
    cy.wait(1000);
    cy.get(dressesElements.proceedToCheckout.selector).click();
}

// Validates that the item was added to the Shopping cart
function shoppingCartModal() {
    cy.waitUntil(() => cy.get(dressesElements.shoppingCartLayer.selectorConfirmation)
    .should('be.visible'),{
      timeout: 1500,
      interval: 100,
    });
    cy.get(dressesElements.shoppingCartLayer.selector)
        .should('be.visible');
}