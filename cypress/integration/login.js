import LoginPage from '../objects/loginPage'

describe('Sourcebooks login', function() {

    it('Admin creates new task', function () {

        const loginPage = new LoginPage();
        loginPage.visit()
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dmitrij Kovner"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.get('.main-nav__link').contains("Tasks").click();
        cy.contains("Create Task").click();
        cy.get('[id="taskDetailsForm.name"]').type("Namer");
        cy.get('[id="taskDetailsForm.description"]').type("Descriptioner");
        cy.get('.Select-value').click();
        cy.get('[aria-label="Yes"]').click();
        cy.get('.btn').contains("Save").click();   
        cy.get('.main-nav__link').contains("Tasks").click();
        cy.url().should('not.contain', "create");
        cy.get('.field__text--small').first().type("Namer");
        cy.wait(1000);
        cy.get('.ellipsis').contains("Namer");
    })

})