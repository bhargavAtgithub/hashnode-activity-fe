/// <reference types="cypress" />

describe('Theme toggle test', () => {
  it('Toggle the theme of the application', () => {
    cy.visit('http://localhost:3001/activity');
    cy.get('[data-testid=theme-toggle-button').click();
  });
});
