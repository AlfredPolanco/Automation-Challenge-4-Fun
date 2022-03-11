// This page contains all dresses actions
import { dressesElements } from "../pageElements/dresses-elements";

export function hoverOverDresses() {
    cy.get(dressesElements.dresses.selector)
        .eq(1).invoke('show').should('be.visible');
}