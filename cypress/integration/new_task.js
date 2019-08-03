import LoginPage from '../objects/loginPage'
import Tasks from '../objects/tasks'

describe('Sourcebooks login', function() {

    const loginPage = new LoginPage()  
    const tasks = new Tasks();  

    beforeEach(() => {
        cy.loginAs("Admin")
        loginPage.visit()
    })

    it('Should create new task', function () {

        var fieldText = [Math.random().toString(20).substring(2,6), Math.random().toString(20).substring(2,16)]

        tasks.tasksButton().click();
        tasks.createTasks().click();
        tasks.taskName().type(fieldText[0])
        tasks.taskDescription().type(fieldText[1])
        tasks.selectBill().click()
        tasks.selectYes().click()
        tasks.hourlyRate().clear()
        tasks.hourlyRate().type(`${Math.random()}`)
        tasks.saveButton().click();
        tasks.tasksButton().click();
        tasks.searchByName().type(fieldText[0])
        tasks.checkIfDisplayed(fieldText[0]).should('be.visible')
    })
})