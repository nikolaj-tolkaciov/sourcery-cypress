import LoginPage from  '../objects/loginPage';
import Task from '../objects/task';
var login = new LoginPage();
var task = new Task();

describe('Sourcebooks creates task', function() {
      it('T-3: Admin creates new task', function () {
        task.visitTasks();
        login.userDropDown().click({force:true});
        login.getUser("Dainius Gaidamavičius").click();
        login.getRoleDropDown().click({force:true});
        login.getRoleOption("Admin").click();
        login.getSubmitButton().click();
        task.getCreateTaskButton().click();
        let taskName = task.getRandomTaskName();
        task.getTaskNameForm().type(taskName);
        task.getTaskDescriptionForm().type('TASK11');
        task.getTaskBillDrop().next().click();
        task.inputTaskBillOption("Yes").click();
        task.getTaskRateForm().clear();
        task.getTaskRateForm().type(Math.random() * 5);
        task.getTaskSubmitButton().click();
        cy.url().should('not.contain', 'create');
        task.visitTasks()
        task.getTaskNameFieldForFiltering().type(taskName);
        task.getViewPortWrapper().should('have.length', 1);
    }) 

})