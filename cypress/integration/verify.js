import LoginPage from '../objects/loginPage';
import VerifyPage from '../objects/verifyPage';

const loginPage = new LoginPage();
const verifyPage = new VerifyPage();

describe('Sourcebooks login', function() {

    it('Should be able to login with role User', function () {

        loginPage.visit();
        cy.get('[id="loginForm.userId"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Saulė Raudytė").click();
        cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("User").click();
        loginPage.getSubmitButton().click();

        cy.get('.user-info__title').contains('Saule Raudyte');
        cy.get('.main-nav').find('li').should('have.length', 1);
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Admin', function () {

        loginPage.visit();
        cy.get('[id="loginForm.userId"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Saulė Raudytė").click();
        cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Admin").click();
        loginPage.getSubmitButton().click();

        cy.get('.user-info__title').contains('Saule Raudyte');
        cy.get('.main-nav').find('li').should('have.length', 6);
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Accountant', function () {

        loginPage.visit();
        cy.get('[id="loginForm.userId"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Saulė Raudytė").click();
        cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Accountant").click();
        loginPage.getSubmitButton().click();

        cy.get('.user-info__title').contains('Saule Raudyte');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        cy.get('[id="loginForm.userId"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Saulė Raudytė").click();
        cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Team Lead").click();
        loginPage.getSubmitButton().click();

        cy.get('.user-info__title').contains('Saule Raudyte');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit();
        cy.get('[id="loginForm.userId"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Saulė Raudytė").click();
        cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getSpecificUserFromDropdown("Manager").click();
        loginPage.getSubmitButton().click();

        cy.get('.user-info__title').contains('Saule Raudyte');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })
})