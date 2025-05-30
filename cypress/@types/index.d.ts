/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<> {
    getByDataTest<HTMLElement>(string): Chainable<JQuery<HTMLElement>>;
    getByDataTestId<HTMLElement>(string): Chainable<JQuery<HTMLElement>>;
    setMobileViewport(): Chainable<null>;
    setDesktopViewport(): Chainable<null>;
  }
}
