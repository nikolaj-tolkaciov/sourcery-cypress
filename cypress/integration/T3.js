describe('Sourcebooks login', function() {

    it('T-3: Admin creates new task', function () {
        cy.visit('/tasks');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dainius Gaidamavičius"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click();
        cy.get('[type="button"]').click();
        let taskName = 'Task' + String(Math.random()*10000)
        cy.get('[id = "taskDetailsForm.name"]').type(taskName);
        cy.get('[id = "taskDetailsForm.description"]').type('TASK11');
        cy.get('label').contains('Bill to Client').next().click();
        cy.get('[aria-label="Yes"]').click();
        cy.get('[id = "taskDetailsForm.rate"]').clear();
        cy.get('[id = "taskDetailsForm.rate"]').type(Math.random() * 5);
        cy.get('[type="submit"]').click();
        cy.url().should('not.contain', 'create');
        cy.get('[type="button"]').click();
        cy.visit('/tasks');
        cy.get('[class = "field--filter"]').first().find('input').type(taskName);
        cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').should('have.length', 5);
    }) 
 
})