import LoginPage from '../objects/loginPage';
import TasksPage from '../objects/tasksPage';
import TimeLog from '../objects/timelog';


const loginPage = new LoginPage();
const timeLog = new TimeLog();
const tasksPage = new TasksPage();

describe('Sourcebooks login', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    it('should create new task', function () {

        let taskName = Math.random().toString(36).substring(2, 15)
        let taskDescription = Math.random().toString(36).substring(2, 15)

        timeLog.getNavigationPanelTasks().click({force:true});
        tasksPage.getCreateTaskButton().click({force:true});
        tasksPage.getCreateTaskNameInputField().type(`${taskName}`);
        tasksPage.getCreateTaskDescriptionInputField().type(`${taskDescription}`);
        tasksPage.getBillableDropdown().click({force:true});
        tasksPage.getYesFromBillableDropdown().click({force:true});
        tasksPage.getHourlyRateInputField().should('not.be.disabled');
        tasksPage.getHourlyRateInputField().clear();
        tasksPage.getHourlyRateInputField().type(`${Math.random()*10}`);
        tasksPage.getSaveButton().click({force:true});
        timeLog.urlIncludesCheck();
        timeLog.getNavigationPanelTasks().click({force:true});
        tasksPage.getTaskNameInputField().type(taskName);
        tasksPage.getTaskDescriptionInputField().type(taskDescription);
        tasksPage.checkIfFilteredTaskIsVisible(taskName).should('be.visible')

    })

})