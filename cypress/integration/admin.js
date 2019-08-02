import LoginPage from '../objects/loginPage';
import TaskPage from '../objects/TaskPage';

const loginPage = new LoginPage();
const taskPage = new TaskPage();

describe('Tests related to Admin role', function() {
  beforeEach(function() {
    cy.loginAs('Admin');
    loginPage.visit();
  });

  it('Admin should be able to create new task', function() {
    taskPage.visit();
    taskPage.getCreateTaskButton().click();

    cy.url().should('include', 'tasks/create');
    taskPage
      .getTaskNameInput()
      .type('Admin task ')
      .should('have.value', 'Admin task 3');
    taskPage
      .getTaskDescriptionInput()
      .type('Description of admin task')
      .should('have.value', 'Description of admin task');
    taskPage.getBillToClientDropDown().click();
    taskPage.getBillToClientDropDownOption('Yes').click();
    taskPage
      .getHourlyRate()
      .clear()
      .type(Math.random() * 100);
    taskPage.getSaveButton().click();

    taskPage.visit();
    cy.url().should('include', '/tasks');
    cy.url().should('not.include', '/create');
    taskPage.getNameFilter().type('Admin task 2');
    taskPage.getDescriptionFilter().type('Description of admin task');
    taskPage.getTaskList().should('have.length', 1);
  });
});
