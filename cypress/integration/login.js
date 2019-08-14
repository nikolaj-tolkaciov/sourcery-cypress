import LoginPage from '../objects/loginPage'
import CreateTask from '../objects/createTask'
const loginPage = new LoginPage()
const createTask = new CreateTask()

describe('Sourcebooks login', function() {
    
    it('Admin creates a new task', function () {
      
        loginPage.visit()
        loginPage.getLoginForm().click({force:true});
        loginPage.getUser().click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getUserRole().click();
        loginPage.submit().click();
        createTask.getTasks().click();
        createTask.createTask().click();
        createTask.getDetailsForm().click({force:true});
        createTask.typeTaskName()
        createTask.getDescriptionForm().click({force:true});
        createTask.typeDescription()
        createTask.setBill_to_Client().click({force:true});
        createTask.selectBill_to_Client().click();
        createTask.typeRate();
        loginPage.submit().click();
        createTask.getTasks().click();
        createTask.search_for_Tasks();
        createTask.check_TaskName_Exist();
    })
})