import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import TasksPage from '../objects/tasksPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const tasksPage = new TasksPage();

describe('Sourcebooks login', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    it('should create new task', function () {

        let taskName = Math.random().toString(36).substring(2, 15)
        let taskDescription = Math.random().toString(36).substring(2, 15)

        timeLoggingPage.getNavigationPanelTasks().should('be.visible');
        timeLoggingPage.getNavigationPanelTasks().click({force:true});
        tasksPage.getCreateTaskButton().should('be.visible');
        tasksPage.getCreateTaskButton().click({force:true});
        tasksPage.getCreateTaskNameInputField().type(`${taskName}`);

        //console.log(taskName) // to check for filtering later
        //console.log(taskDescription) // to check for filtering

        tasksPage.getCreateTaskDescriptionInputField().type(`${taskDescription}`);
        tasksPage.getBillableDropdown().click({force:true});
        tasksPage.getYesFromBillableDropdown().click({force:true});
        tasksPage.getBillableInputField().should('not.be.disabled');
        tasksPage.getBillableInputField().clear();
        tasksPage.getBillableInputField().type(`${Math.random()*10}`);
        tasksPage.getSaveButton().click({force:true});
        timeLoggingPage.urlIncludesCheck('tasks/create');
        timeLoggingPage.getNavigationPanelTasks().click({force:true});
        tasksPage.getTaskNameInputField().type(taskName);
        tasksPage.getTaskDescriptionInputField().type(taskDescription);
        tasksPage.checkIfFilteredTaskIsVisible(taskName).should('be.visible')

    })

})