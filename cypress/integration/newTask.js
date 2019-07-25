
describe('Sourcebooks login', function() {

    it('Should create new task', function () {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Vitalij Janukevič"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get(`[aria-label="Admin"]`).click();
        cy.get('[type="submit"]').click();


        let taskName = Math.random().toString(36).substring(2, 15)
    
        cy.get('.main-nav__link' + '[href="/tasks"]').should('be.visible');
        cy.get('.main-nav__link' + '[href="/tasks"]').click({force:true});
        cy.get('.btn').should('be.visible');
        cy.get('.btn').click({force:true});
        cy.get('[id="taskDetailsForm.name"]').type(`${taskName}`);
        console.log(taskName)
        cy.get('[id="taskDetailsForm.description"]').type('Description');
        cy.get('.Select-value').click({force:true});
        cy.get('[role="option"]').contains("Yes").click({force:true});
        cy.get('[id="taskDetailsForm.rate"]').should('not.be.disabled');
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(`${Math.random()*10}`);
        cy.get(' .btn' + '[type=submit]').click({force:true});
        cy.url().should('include', 'tasks/create');
        cy.get('.main-nav__link' + '[href="/tasks"]').click({force:true});
        
        //cy.get('[col-id="name"]').trigger('mouseover', {force:true}).get('.ag-header-cell ag-column-hover').within(() => {
           // cy.get(????).type(`${taskName}`);
       // })
       
        
      
        
        cy.get('.ellipsis' + `[title=${taskName}]`).should('be.visible')

    })

})