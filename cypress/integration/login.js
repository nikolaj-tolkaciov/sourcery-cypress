//import './support/commands.js';
describe('Sourcebooks login', function() {

    let role = 'Team Lead';
    var today = new Date();
    //let Roles = ['User','Team Lead','Manager','Accountant','Admin'];

    it('Should be able to login with role ' + role, function () {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Modestas Kmieliauskas"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get(`[aria-label="${role}"]`).click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Modestas Kmieliauskas');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.calendar--today').contains(today.getDate());
       cy.get('.main-nav__link--active').should('have.css','color','rgb(64, 76, 237)');
    })
})