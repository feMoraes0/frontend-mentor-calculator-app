describe('Initial application state', () => {
  context('Desktop layout', () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
      cy.visit('/');
    });

    it('Should validate initial result display and quantity of buttons', () => {
      cy.getByDataTest('result-display').should('contains.text', '0');
      cy.getByDataTest('numpad-buttons').should('have.length', 18);
    });
  });

  context('Mobile layout', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
      cy.visit('/');
    });

    it('Should validate initial result display and quantity of buttons', () => {
      cy.getByDataTest('result-display').should('contains.text', '0');
      cy.getByDataTest('numpad-buttons').should('have.length', 18);
    });
  });
});
