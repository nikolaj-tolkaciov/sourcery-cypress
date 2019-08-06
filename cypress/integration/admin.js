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

    let min = 0;
    let max = 100;
    let random = Math.random() * (+max - +min) + +min;
    let randomTask = Math.floor(random);
    let randomRate = random.toFixed(2);

    taskPage
      .getTaskNameInput()
      .type('Admin task ' + randomTask)
      .should('have.value', 'Admin task ' + randomTask);
    taskPage
      .getTaskDescriptionInput()
      .type('Description of admin task ' + randomTask)
      .should('have.value', 'Description of admin task ' + randomTask);
    taskPage.getBillToClientDropDown().click();
    taskPage.getBillToClientDropDownOption('Yes').click();
    taskPage
      .getHourlyRate()
      .clear()
      .type(randomRate);
    taskPage.getSaveButton().click();

    taskPage.visit();
    cy.url().should('include', '/tasks');
    cy.url().should('not.include', '/create');
    taskPage.getNameFilter().type('Admin task ' + randomTask);
    taskPage
      .getDescriptionFilter()
      .type('Description of admin task ' + randomTask);
    taskPage.getTaskList().should('have.length', 1);
  });
});
