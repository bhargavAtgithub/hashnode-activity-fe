describe('Redirect to activity check', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/');

    cy.location('pathname').should('eq', '/activity');
  });
});

describe('link check', () => {
  it('passes', () => {
    cy.get(
      ':nth-child(3) > .activity-containers__AllActivitiesContainer-sc-f2df69d6-3 > :nth-child(1) > a > .text-styles__TextStylesContainer-sc-194ee6e8-0'
    ).click();
  });
});
