import commonItems from '../objects/commonItems';

const common = new commonItems()

describe('Sourcebooks login', function() {
    
    beforeEach(function () {
        cy.loginAs("Admin");
        cy.url();
    })

        it('Admin should create a new task', function () {

            const taskName = Math.ceil(Math.random()*100000);
    
            common.visit();
            cy.get('[href="/tasks"]').click();
            cy.get('.btn').click();
            cy.get('[id="taskDetailsForm.name"]').type(taskName);
            cy.get('[id="taskDetailsForm.description"]').type("Testing task creating");
            cy.get('[aria-selected="true"]').click({ force: true }).get('[aria-label="Yes"]').click({ force: true });
            cy.get('[id="taskDetailsForm.rate"]').clear().type("3.000");
            cy.get('[type="submit"]').click({force:true});
    
            cy.wait(1000);
            cy.url().should('to.not.equal',('/tasks/create'));

        cy.visit('/tasks');
        cy.get('[class="field--filter"]').first().find('input').type(taskName);
        cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').should('have.length', 1);
    })
}) 