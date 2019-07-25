describe('Sourcebooks admin', function() {
    it('Admin creates a task', function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Raminta Urbonavičiūtė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get(`[aria-label="Admin"]`).click();
        cy.get('[type="submit"]').click();

        cy.get('[href="/tasks"]').click();
        cy.get('.btn').click();
        var name = "string";
        cy.get('[id="taskDetailsForm.name"]').type(name);
        cy.get('[id="taskDetailsForm.description"]').type('this description is created with automation test');
        cy.get('[class="Select-value"]').click();
        cy.get('[role="option"]').contains("Yes").click();
        cy.get('[id="taskDetailsForm.rate"]').clear().type('2');
        cy.get('[class="btn"]').click();

        cy.get('[href="/tasks"]').click();
        cy.get('[role="grid"]').contains("Billable").click();
        cy.get('[role="grid"]').contains("Billable").click();

        let buttons = document.querySelectorAll(".btn__square");
        console.log(buttons);
        //cy.get('.btn__square').within(buttons);
    })
})