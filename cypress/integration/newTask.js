
describe('Sourcebooks login', function() {

    it('Should create new task', function () {
        
        cy.visit('/');
        cy.get('TASKS locator').should('be.visible');
        cy.get('TASKS locator').click({force:true});
        cy.get('Create task locator').should('be.visible');
        cy.get('Task Name input field locator').type('Name');
        cy.get('Task Name input field locator').type('Description');
        cy.get('Dropdown locator').click({force:true});
        cy.get(' Yes locator').click({force:true});
        cy.get('hourly rate locator').check('disabled: false');
        cy.get('Hourly rate locator').type(`${Math.random()*3}`);
        cy.get('save locator').check('disabled: false');
        cy.get(' Yes locator').click({force:true});
        cy.url().contains('tasks/create');
        cy.get('TASKS locator').click({force:true});
        cy.get('filter by name input locator').type('Name');
        cy.get('your task locator').should('be.visible')

    })

})