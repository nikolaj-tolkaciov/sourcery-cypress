import chaiColors from 'chai-colors';
chai.use(chaiColors)

describe('Sourcebooks login', function() {
    const user='Demo User'

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get(`[aria-label="${user}"]`).click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User');
        cy.get('.main-nav').find('li').should('have.length', 2);
    })
    it('should check if today date is correct', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Demo User"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        const today = Cypress.moment().format('D')
        cy.get('.calendar--today').contains(today);
    })

    let roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin']
    let tabsAmount = [1, 2, 5, 5, 6];

    for(let i=0; i< roles.length; i++ ){
        it('User:' + roles[i] + ' logs in and can see ' + tabsAmount[i] + ' tab(s)', function () {
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get(`[aria-label="${user}"]`).click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get(`[aria-label="${roles[i]}"]`).click();
            cy.get('[type="submit"]').click();

            cy.url().should('include', '/time-logging');
            cy.get('.page__title').contains('Timesheets');
            cy.get('.user-info__title').contains(user);
            cy.get('.main-nav').find('li').should('have.length', tabsAmount[i] );
            cy.get('.main-nav__link--active').contains('Time Logging')
            .should('have.css', 'color')
            .and('be.colored', '#404ced')
            cy.contains(user).click();
            cy.contains('Log Out').click();
        })
    }
})