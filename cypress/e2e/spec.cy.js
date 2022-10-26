/// <reference types="cypress" />

const { _ } = Cypress;

describe('Activities check', () => {
  it('Check each activity', () => {
    cy.visit('http://localhost:3001//activity');

    let totalLinks = 0;
    cy.get('[data-testid=activity_id]').then(($activities) => {
      totalLinks = $activities.length;
      for (let i = 0; i < totalLinks; i++) {
        let type = '';
        let id = '';

        cy.get('[data-testid=activity_id]')
          .eq(i)
          .within(() => {
            cy.get('[data-testid=activity_type]')
              .invoke('text')
              .then((activityType) => {
                type = activityType;
                console.log(activityType);
              });
            cy.get('a')
              .invoke('removeAttr', 'target')
              .invoke('attr', 'href')
              .then((href) => console.log(href));
            cy.get('a').invoke('removeAttr', 'target').click();
          });

        cy.wait(2000);
        cy.url().then((currentUrl) => {
          if (type === 'Commented') {
            id = currentUrl.split('#')[1];
            console.log(id);
            cy.get(`#${id}`).should('be.visible');
          }
        });

        cy.go('back');
      }
    });

    // cy.get('[data-testid=activity_id]').each((item) => {
    //   cy.get(item).within(() => {
    //     let obj = {
    //       url: '',
    //       type: '',
    //     };
    //     cy.get('[data-testid=activity_type]')
    //       .invoke('text')
    //       .then((activityType) => (obj.type = activityType));
    //     cy.get('a').invoke('removeAttr', 'target').click();
    //     cy.wait(2000);
    //     cy.go('back');
    //   });
    // });
  });
});
