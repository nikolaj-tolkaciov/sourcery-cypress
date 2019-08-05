
import PageComponents from '../objects/pageComponents';
const pageComponents = new PageComponents()
describe('New task creation', function() {

        beforeEach(function() {
            cy.loginAs("Admin")
            cy.visit('/tasks')
    })
    it ('Admin should be able to create new task', function(){

        cy.contains('Create Task').click()
        cy.get('[id="taskDetailsForm.name"]').click();
        cy.get('[id="taskDetailsForm.name"]').type('homework2');
        cy.get('[id="taskDetailsForm.description"]').type('helo123');
        cy.get('[class= "Select-value"]').click()
        cy.get('[id="react-select-2--option-0"]').click()

        cy.get('[id="taskDetailsForm.rate"]').clear();

        cy.get('[id="taskDetailsForm.rate"]').type('5');
        pageComponents.getSubmitButton().click();

        cy.wait(1000);
        cy.url().should('to.not.equal',('/tasks/create'));

        cy.visit('/tasks');
        cy.get('.field__text').first().click().type("homework2");
        cy.get('[title="homework2"]').should('exist');
        cy.get('[row-index="1"]').should('not.exist');

    })
})
