import Tasks from '../objects/tasks';
import LoginPage from '../objects/LoginPage';
import Common from '../objects/common';


const tasks = new Tasks();
const loginPage = new LoginPage();
const common = new Common();

describe('Sourcebooks task creation', function() {


    beforeEach(function () {

        cy.loginAs("Admin");
        loginPage.visit();
    })

    it('Admin should create a new task', function () {

        const taskName = "Task name " + Math.ceil((Math.random())*10000); 
        const descriptionName = "Description name " + Math.ceil((Math.random())*10000);       

        common.getMainNavigationBar().find('[href="/tasks"]').click(); 
        common.geturl().should('include', '/tasks');
        common.getPageTitle().contains('Tasks');
        tasks.getCreateTaskButton().click();
        tasks.getNameFromTaskDetailsForm().type(taskName);
        tasks.getDescriptionFromTaskDetailsForm().type("Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.");
        tasks.getBillToClientSelector().click({ force: true })
        tasks.getSelectionValueYes().click({ force: true });
        tasks.getRateFromTaskDetailsForm().clear().type("0.250");
        tasks.getSaveButton().click({force:true});

        cy.wait(1000);
        cy.url().should('to.not.equal', ('/tasks/create'));

        tasks.visit();
        tasks.getSearchFieldInputField().first().click().type(taskName);
        cy.get('[title=' + taskName + ']').should('exist');
        cy.get('[title=' + descriptionName + ']').should('exist');        
    })
})    