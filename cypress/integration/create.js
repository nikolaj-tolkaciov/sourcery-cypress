describe('Sourcebooks login', function() {

    it('Admin should create a new task', function () {

        const taskName = Math.ceil((Math.random())*10000);

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Saulė Raudytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.get('[href="/tasks"]').click();
        cy.get('.btn').click();
        cy.get('[id="taskDetailsForm.name"]').type(taskName);
        cy.get('[id="taskDetailsForm.description"]').type("Writing first automated test on thursday.");
        cy.get('[aria-selected="true"]').click({ force: true }).get('[aria-label="Yes"]').click({ force: true });
        cy.get('[id="taskDetailsForm.rate"]').clear().type("5.000");
        cy.get('[type="submit"]').click({force:true});

        cy.wait(1000);
        cy.url().should('to.not.equal',('/tasks/create'));
        
        cy.visit('/tasks');
        cy.get('.field__text').first().click().type(taskName);
        cy.get('[title=' + taskName + ']').should('exist');
    })
})