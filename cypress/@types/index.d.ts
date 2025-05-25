/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<> {
    getByDataTest<HTMLElement>(string): Chainable<JQuery<HTMLElement>>;
  }
}
