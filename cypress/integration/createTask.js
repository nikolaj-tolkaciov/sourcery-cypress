import TaskPage from "../objects/taskPage";

const taskPage = new TaskPage();
let taskName = Math.random().toString(36);

describe('Sourcebooks create task', function () {
    it('Should be able to create new task as admin', function () {
        cy.loginAs('Admin');
        taskPage.visit();
        taskPage.getCreateTaskButton().click();
        taskPage.getTaskNameField().type(taskName);
        taskPage.getTaskDescriptionField().type(Math.random().toString(36));
        taskPage.getBillToClientDropdown().click({ force: true });
        taskPage.getBillToClientOption().click();
        taskPage.getHourlyRateField().clear().type(Math.random()*10000);
        taskPage.getSubmitButton().click();
        taskPage.assertNotContainCreateUrl();
        taskPage.visit();
        taskPage.getFilterField().type(taskName);
        taskPage.getTaskItem().contains(taskName);
    })
})