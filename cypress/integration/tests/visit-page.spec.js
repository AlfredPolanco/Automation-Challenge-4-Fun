context('Automation Challenge 4 Fun', () => {
    beforeEach(() => {
        cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit('/');
      cy.wait(1000);
    });

    it('Visit page', () => {
        cy.url().should('eq', 'http://automationpractice.com/index.php')
    });
});