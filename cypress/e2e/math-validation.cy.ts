describe('Validate all possible math', () => {
  context('While using desktop size', () => {
    beforeEach(() => {
      cy.viewport(1440, 900);
      cy.visit('/');
    });

    it('When clicked on 1 + 5 and =, then should display 6 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-1').click();
      cy.getByDataTestId('numpad-id-+').click();
      cy.getByDataTestId('numpad-id-5').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '6');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 2.4 + 3.7 and =, then should display 6.1 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-2').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-4').click();
      cy.getByDataTestId('numpad-id-+').click();
      cy.getByDataTestId('numpad-id-3').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-7').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '6.1');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 8 - 5 and =, then should display 3 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-8').click();
      cy.getByDataTestId('numpad-id--').click();
      cy.getByDataTestId('numpad-id-5').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '3');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 6.5 - 0.5 and =, then should display 6 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-6').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-5').click();
      cy.getByDataTestId('numpad-id--').click();
      cy.getByDataTestId('numpad-id-0').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-5').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '6');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 9 * 6 and =, then should display 54 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-x').click();
      cy.getByDataTestId('numpad-id-6').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '54');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 9.6 * 6.9 and =, then should display 66.24 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-6').click();
      cy.getByDataTestId('numpad-id-x').click();
      cy.getByDataTestId('numpad-id-6').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '66.24');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 9 / 6 and =, then should display 1.5 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-/').click();
      cy.getByDataTestId('numpad-id-6').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should('contain.text', '1.5');
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });

    it('When clicked on 9.2 / 6.7 and =, then should display 1.373134328358209 as result and be reseted when reset button is clicked', () => {
      cy.getByDataTestId('numpad-id-9').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-2').click();
      cy.getByDataTestId('numpad-id-/').click();
      cy.getByDataTestId('numpad-id-6').click();
      cy.getByDataTestId('numpad-id-.').click();
      cy.getByDataTestId('numpad-id-7').click();
      cy.getByDataTestId('numpad-id-=').click();
      cy.getByDataTest('result-display').should(
        'contain.text',
        '1.373134328358209',
      );
      cy.getByDataTestId('numpad-id-reset').click();
      cy.getByDataTest('result-display').should('contain.text', '0');
    });
  });
});
