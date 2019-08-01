describe('Sourcebooks login', function() {

    it('Admin can create new Task', function(){
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Valentinas Kasteckis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();
        cy.visit('/tasks');
        cy.get('[type="button"]').contains("Create Task").click();
        cy.get('[id="taskDetailsForm.name"]').type("ZDAROVA");
        cy.get('[id="taskDetailsForm.description"]').type("ZDAROVA CE YRA DESCRIPTIONAS");
        cy.get('.Select-value-label').click();
        cy.get('.Select-option').contains('Yes').click();
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(10);
        cy.get('.btn').contains("Save").click();
        cy.visit('/tasks');
        cy.get(".field__text--small").first().type("ZDAROVA");
        cy.get('[title="ZDAROVA CE YRA DESCRIPTIONAS"]').contains("ZDAROVA CE YRA DESCRIPTIONAS");
    })
})