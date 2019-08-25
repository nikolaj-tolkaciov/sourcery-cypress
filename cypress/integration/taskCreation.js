import Common from '../objects/common';
import TaskPage from '../objects/taskPage';

const common = new Common();
const taskPage = new TaskPage();
const todaysDate = Cypress.moment().format('YYYY-DD-MM')

describe('Sourcebooks task creation by an Admin (T-3)', function() {

    it('Should be able to login with an Admin role, create a new task, and check if the new task is created', function () {

        cy.visit('/');
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Admin").click();
        common.getButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');

        cy.visit('/tasks');
        taskPage.getCreateTasksButton().click({force:true});
        taskPage.getTaskNameField().type('TestName' + ' ' + todaysDate);
        taskPage.getDescriptionField().type('TestDescription' + ' ' + todaysDate);
        taskPage.getBillToClientDropdownAndSelectYes().click();
        taskPage.getHourlyRateField().clear().type('1.111');
        common.getButton().click();

        cy.visit('/tasks');
        taskPage.getTaskNameSearchField().type('TestName' + ' ' + todaysDate);
        cy.wait(2000);
        taskPage.getCreatedTaskName().contains('TestName' + ' ' + todaysDate);               
    })
   
})