import TasksPage from '../obj/tasks/tasksPage';
import TaskCreatePage from '../obj/tasks/taskCreatePage';
import TaskEditPage from '../obj/tasks/taskEditPage';
import Common from '../obj/common';

const tasksPage = new TasksPage();
const taskCreatePage = new TaskCreatePage();
const taskEditPage = new TaskEditPage();
const common = new Common();

describe('Sourcebook testTasks', function() {
    it('Should be able to create new task as Admin', function () {
        cy.loginAs("Admin");

        const taskName = common.makeId();
        const description = 'desc_' + common.makeId();

        tasksPage.visit();
        tasksPage.getCreateTaskButton().click();
        taskCreatePage.getFormName().type(taskName);
        taskCreatePage.getFormDescription().type(description);
        taskCreatePage.getBillableDropdown().click();
        taskCreatePage.getBillableFromDropdown('Yes').click();
        taskCreatePage.getFormRate().clear();
        taskCreatePage.getFormRate().type(Math.random() * 10);
        taskCreatePage.getSubmitButton().click();

        taskEditPage.checkUrl();
        tasksPage.visit();
        tasksPage.getNameFilter().type(taskName);
        tasksPage.getFilteredList().should('have.length', 1);
        tasksPage.checkFilteredElementName(taskName);
        tasksPage.checkFilteredElementDescription(description);
    })
})