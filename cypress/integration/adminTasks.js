import TaskPage from '../pages/TaskPage'
import { getRandomName } from '../helpers/constants'

describe('Task creation', () => {

    it('admin should be able to add new tasks', () => {
        cy.loginAs('Admin')
        TaskPage.visit()
        TaskPage.getCreateButton().click()

        cy.url().should('include', '/tasks/create');
        
        const taskName = getRandomName()
        const description = getRandomName()
        TaskPage.getTaskNameInput().type(taskName)
        TaskPage.getDescriptionInput().type(description)

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
        TaskPage.getDescriptionFilter().type(description)
        TaskPage.getTaskList().should('have.length', 1)
        
    })

})