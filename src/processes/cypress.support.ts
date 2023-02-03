import { mount } from 'cypress/angular';

declare global {
  // eslint-disable-next-line
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
