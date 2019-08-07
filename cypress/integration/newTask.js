import LoginPage from '../objects/loginPage';
import CreatingNewTaskPage from '../objects/creatingNewTaskPage';

const loginPage = new LoginPage();
const creatingNewTaskPage = new CreatingNewTaskPage();



describe('Sourcebooks login and new Task creating', function() {
    
    it('Should be able to login with role Admin', function() {
   
        loginPage.visit();
        loginPage.getUserForm().click({force:true});
        loginPage.getUserOption("Ugne Lekstutiene").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getLabel('Admin').click();
        loginPage.getSubmit().click();
                  
    })

    it('Should be able to create a new Task', function() {

        var task = 'Task ' + Date.now();
        var description = 'Auto description ' + Date.now();
                
        creatingNewTaskPage.getTasks().contains("Tasks").click();
        creatingNewTaskPage.getNewTask().contains("Create Task").click();
        creatingNewTaskPage.getTaskName().type(task);
        creatingNewTaskPage.getDescription().type(description);
        creatingNewTaskPage.getBillToClient().contains("No").click();
        creatingNewTaskPage.getChooseYes().contains("Yes").click();
        creatingNewTaskPage.getHourlyRate().clear('0.000').type("5");
        creatingNewTaskPage.getClickSave().contains("Save").click();
        creatingNewTaskPage.getTasksForChecking().contains("Tasks").click();
        creatingNewTaskPage.getFilter().type(task);
        creatingNewTaskPage.getCheckingIfTaskDisplayed().should('be',(task));

    })
})





