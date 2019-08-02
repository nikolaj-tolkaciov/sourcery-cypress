import TaskPage from '../helpers/TaskPage'
import { getRandomName } from '../helpers/constants'
// T-3
describe('Task creation', () => {

    it('admin should be able to add new tasks', () => {
        cy.loginAs('Admin')
        TaskPage.visit()
        TaskPage.getCreateButton().click()

        cy.url().should('include', '/tasks/create');
        
        const taskName = getRandomName()
        TaskPage.getTaskNameInput().type(taskName)
        TaskPage.getDescriptionInput().type(getRandomName())

        const billToClient = TaskPage.getBillToClient()
        billToClient.should('have.length', 1)
        billToClient.click()
        TaskPage.getBillToClientOption('Yes').click()

        TaskPage.getHourlyRate().type(Math.random() * 15)

        TaskPage.getSubmitButton().click()
        
        cy.url().should('include', '/tasks')
        cy.url().should('not.include', '/create')

        TaskPage.visit()
        TaskPage.getNameFilter().type(taskName)
        TaskPage.getTaskList().should('not.have.length', 0)
        
        // don't know how to find exact matches
        // so it only checks if list is not empty
        // because it returns all tasks that contain our task name
    })

})