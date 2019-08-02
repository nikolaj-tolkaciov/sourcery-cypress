import LoginPage from '../objects/loginPage';
import TasksPage from '../objects/tasksPage';
import CreateTaskPage from '../objects/createTaskPage';

const loginPage = new LoginPage();
const tasksPage = new TasksPage();
const createTaskPage = new CreateTaskPage();

describe('Create task', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
        cy.visit('/')
    })

    it('Should be able to create new task with role admin', function () {
        tasksPage.visit();
        tasksPage.pressCreateNewButton();

        var newTask = createTaskPage.createNewTask();

        cy.url().should('not.include', 'create');
        tasksPage.visit();
        tasksPage.assertTaskExists(newTask);
    })
})