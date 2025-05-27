describe('Auxiliary functions', () => {
  context('Desktop layout', () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
      cy.visit('/');
    });

    it('When the DEL button is clicked, then should delete the last character', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTest('result-display').should('contain.text', '99');
      cy.getByDataTestId('numpad-id-DEL').click();
      cy.getByDataTest('result-display').should('contain.text', '9');
    });

    it('When the RESET button is clicked, then should delete ALL the characteres', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTest('result-display').should('contain.text', '99');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });
  });

  context('Mobile layout', () => {
    beforeEach(() => {
      cy.setMobileViewport();
      cy.visit('/');
    });

    it('When the DEL button is clicked, then should delete the last character', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTest('result-display').should('contain.text', '99');
      cy.getByDataTestId('numpad-id-DEL').click();
      cy.getByDataTest('result-display').should('contain.text', '9');
    });

    it('When the RESET button is clicked, then should delete ALL the characteres', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTest('result-display').should('contain.text', '99');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });
  });
});
