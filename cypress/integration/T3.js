import TasksPage from '../objects/TasksPage';
import LoginPage from '../objects/loginPage';
import CreateTasks from '../objects/CreateTasks';
import TaskURL from '../objects/URL_check';
const tasksURL = new TaskURL();
const createTasks = new CreateTasks();
const tasksPage = new TasksPage();
const loginPage = new LoginPage();

describe('Sourcebooks login', function() {
    beforeEach(function() {
        cy.loginAs("Admin");
        loginPage.visit();
    })

    it('Should be able to create new task with Admin', function () {

        function newID(string_length){
            let text = '';
            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

            for (let i=0; i<string_length; i++){
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;

        }
        let Naujas = newID(8)

        tasksPage.getTasksTab();
        tasksPage.getNewTasksButton().contains('Create Task').click();
        createTasks.getTasksNameField().type(Naujas);
        createTasks.getTasksDescriptionField().type('Aprasymas');
        createTasks.getBillToClientDropDown().click();
        createTasks.getFromDropDownOptionYes().click();
        createTasks.getHourlyRateField().click()
        createTasks.getClearHourlyRateField().clear();
        createTasks.getRandomMathNumber().type(5);
        createTasks.getSelectSaveButton().click();
        tasksURL.getURL().should('not.include', 'create');
        tasksPage.getTasksTab();
        tasksURL.getNewTaskByFilterFromTasksList().first().type(Naujas);
        tasksURL.getNewTaskIsDisplayed().contains(Naujas);
    })

})