import TaskPage from '../helpers/TaskPage'

// T-3
describe('Task creation', () => {

    it('admin should be able to add new tasks', () => {
        cy.loginAs('Admin')
        TaskPage.visit()
        TaskPage.getCreateButton().click()

        cy.url().should('include', '/tasks/create');
        
        const randomName = Math.random().toString(36).substring(9);
        TaskPage.getTaskNameInput().type(randomName)
        TaskPage.getDescriptionInput().type(randomName)

        const billToClient = TaskPage.getBillToClient()
        billToClient.should('have.length', 1)
        billToClient.click()
        TaskPage.getBillToClientOption('Yes').click()

        TaskPage.getHourlyRate().type(Math.random() * 15)

        TaskPage.getSubmitButton().click()
        
        cy.url().should('include', '/tasks')
        cy.url().should('not.include', '/create')

        TaskPage.visit()
		TaskPage.getNameFilter().type(randomName)
		TaskPage.getTaskList().should('have.length', 1)
    })

})