import TaskPage from '../objects/taskPage';
const taskPage = new TaskPage();

import Common from '../objects/common';
const common = new Common();

describe('Sourcebooks admin tasks', function() {

    beforeEach(function(){
        cy.loginAs("Admin");
        cy.visit('/');
    })

    const title = "hello worlds" + Date.now();

    it('Admin creates new task', function() {
        common.getNavLink("Tasks").click();
        taskPage.createTaskButtonClick();
        taskPage.getTaskDetailsFormName().click().type(title);
        taskPage.getTaskDetailsFormDescription().click().type('hello worlds description');
        taskPage.getTaskBillableDropDown().click({ force: true });
        taskPage.getYesFromDropDown().click();
        taskPage.getTaskDetailsFormRate().click().clear().type('1');
        common.getSubmitButton().click();
        common.getNavLink("Tasks").click();
        common.urlShouldNotInclude("/create")
        taskPage.getTaskNameField().click().type(title);
        taskPage.validateTaskIsFiltered(title);
    })
})