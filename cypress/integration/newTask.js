import LoginPage from '../objects/loginPage'
import CreatingNewTaskPage from '../objects/creatingNewTaskPage'

const loginPage = new LoginPage()
const creatingNewTaskPage = new CreatingNewTaskPage()

describe('Sourcebooks creating task by admin', function() {
	
    it('Should be able to login with role Admin and create new task', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Admin').click()
        loginPage.getSubmit().click()
                  
        creatingNewTaskPage.getTasks().contains("Tasks").click();
        creatingNewTaskPage.getNewTask().contains("Create Task").click();
        creatingNewTaskPage.getTaskName().type("Reading")
        creatingNewTaskPage.getDescription().type("Abr abr abr")
        creatingNewTaskPage.getBillToClient().contains("No").click()
        creatingNewTaskPage.getChooseYes().contains("Yes").click()
        creatingNewTaskPage.getHourlyRate().clear('0.000').type("5")
        creatingNewTaskPage.getClickSave().contains("Save").click()
        creatingNewTaskPage.getTasksForChecking().contains("Tasks").click()
        creatingNewTaskPage.getFilter().type("Reading")
        creatingNewTaskPage.getCheckingIfDisplayed("Reading").contains("Reading")
        
        
    })
})
