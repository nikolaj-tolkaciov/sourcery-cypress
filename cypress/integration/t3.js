describe('Sourcebooks login', function() {

    it('Admin can create new Task', function(){
        let taskName = "DIS IS NEW TASK NAME";
        let taskDescription = "MY NAME JEFF";
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Valentinas Kasteckis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();
        cy.visit('/tasks');

        cy.get(".field__text--small").first().type(taskName);
        cy.get('.ag-body-container').find('div').should('have.length', 0);

        cy.get('[type="button"]').contains("Create Task").click();
        cy.get('[id="taskDetailsForm.name"]').type(taskName);
        cy.get('[id="taskDetailsForm.description"]').type(taskDescription);
        cy.get('.Select-value-label').click();
        cy.get('.Select-option').contains('Yes').click();
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(10);
        cy.get('.btn').contains("Save").click();
        cy.visit('/tasks');
        cy.get(".field__text--small").first().type(taskName);
        cy.get('[title="' + taskDescription + '"]').contains(taskDescription);
    })
})