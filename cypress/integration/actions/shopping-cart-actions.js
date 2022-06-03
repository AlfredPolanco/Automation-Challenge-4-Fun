// This file contains all actions from the Shopping Cart page

import { shoppingCartElements } from "../pageElements/shopping-cart-elements";

//Clicks on the Proceed to checkout button
export function clickProceedToCheckoutCartButton() {
    cy.waitUntil(() => cy.get(shoppingCartElements.shoppingCartTable.selector)
    .should('be.visible'),{
      timeout: 1500,
      interval: 100,
    });
    cy.get(shoppingCartElements.proceedToCheckoutCartButton.selector).click();
}

//Types in instructions for the order message box
export function typeOnMessageBox() {
  cy.get(shoppingCartElements.orderMessageBox.selector)
    .type(shoppingCartElements.orderMessageBox.text);
}

//Clicks on Terms and Conditions checkbox
export function clickOnTermCheckbox() {
  cy.get(shoppingCartElements.termsOfServiceCheckBox.selector).click();
}

//Clicks on Pay with Bank Wire button
export function clickOnPaymentBankWireButton() {
  cy.get(shoppingCartElements.paymentBankWire.selector).click();
  checkForBankWireConfirmationMessage();
}

//Validates Bank Wire confirmation message
function checkForBankWireConfirmationMessage() {
  cy.get(shoppingCartElements.InfoBox.selector)
    .should('contain', shoppingCartElements.InfoBox.bankWireText)
}

//Clicks on Confirm Order button
export function clickOnConfirmOrderButton() {
  cy.get(shoppingCartElements.confirmMyOrderButton.selector).click();
  checkForOrderConfirmationMessage();
}

//Validates Order Confirmation message
function checkForOrderConfirmationMessage() {
  cy.get(shoppingCartElements.InfoBox.selector)
    .should('contain', shoppingCartElements.InfoBox.text)
}
