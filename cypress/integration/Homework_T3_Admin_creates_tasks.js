import PageComponents from '../objects/pageComponents';
const pageComponents = new PageComponents();

import TaskPage from '../objects/taskPage';
const taskPage = new TaskPage();

import CreatTask from '../objects/creatTask';
const creatTask = new CreatTask();

describe('New task creation', function() {

    beforeEach(function() {
        cy.loginAs("Admin")
        taskPage.visit()
    })

    it('Admin should creat a new task', function() {
        
        const title = Math.random().toString(36).substr(2)
        const taskDescription = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
        
        taskPage.getCreatTaskButton().click()
        creatTask.getTaskNameField().click().type(title)
        creatTask.getDescriptionField().click().type(taskDescription)
        creatTask.getBillToClientSelect().click()
        creatTask.getBillToClientYesOption().click()
        creatTask.getHourlyRateField().click().clear().type((Math.random() * 100).toFixed(3))
        pageComponents.getSubmitButton().click()

        cy.wait(1000)
        cy.url().should('not.include', '/create') 

        taskPage.visit()
        taskPage.getTaskNameField().click().type(title)
        taskPage.getDescriptionField().click().type(taskDescription)
        expect(cy.get(`[title=${title}]`)).to.exist
        expect(cy.get(`[title=${taskDescription}]`)).to.exist

    })
})
