import TasksPage from '../objects/tasksPage';
import TaskDetailsPage from '../objects/taskDetailsPage';

const tasksPage = new TasksPage();
const taskDetailsPage = new TaskDetailsPage();

describe('Create task', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to create new task with role admin', function () {
        tasksPage.visit();
        tasksPage.pressCreateNewButton();

        var newTask = taskDetailsPage.createNewTask();

        cy.url().should('not.include', 'create');
        tasksPage.visit();
        tasksPage.assertTaskExists(newTask);
    })
})