import LoginPage from '../objects/loginPage'
import Timelog from '../objects/timelog'

const loginPage = new LoginPage();
const timelog = new Timelog();
describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit('/');
        loginPage.getvalidationerror().should('not.visible')
        loginPage.submitlogin().click();
        loginPage.getvalidation().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabel().click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Olga Pikul');
        cy.get('.main-nav').find('li').should('have.length', 1);
        cy.get('.calendar--today').contains(new Date().getDate());
        cy.get('.main-nav__link.main-nav__link--active').contains('Time Logging').should ('have.css','color','rgb(64, 76, 237)');
    })
    it('Should be able to login with role Team Lead', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Olga Pikul"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Olga Pikul');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.calendar--today').contains(new Date().getDate());
        cy.get('.main-nav__link.main-nav__link--active').contains('Time Logging').should ('have.css','color','rgb(64, 76, 237)');
    })
    it('Should be able to login with role Manager', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Olga Pikul"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Olga Pikul');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.calendar--today').contains(new Date().getDate());
        cy.get('.main-nav__link.main-nav__link--active').contains('Time Logging').should ('have.css','color','rgb(64, 76, 237)');
        

    })
    it('Should be able to login with role Accountant', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Olga Pikul"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Olga Pikul');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.calendar--today').contains(new Date().getDate());
        cy.get('.main-nav__link.main-nav__link--active').contains('Time Logging').should ('have.css','color','rgb(64, 76, 237)');
    })
    it('Should be able to login with role Admin', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Olga Pikul"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Olga Pikul');
        cy.get('.main-nav').find('li').should('have.length', 6);
        cy.get('.calendar--today').contains(new Date().getDate());
        cy.get('.main-nav__link.main-nav__link--active').contains('Time Logging').should ('have.css','color','rgb(64, 76, 237)');
    })
})