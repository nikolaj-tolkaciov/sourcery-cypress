import LoginPage from '../objects/loginPage';
import CreatePage from '../objects/createPage';

const loginPage = new LoginPage();
const createPage = new CreatePage();

describe('Sourcebooks login', function() {

    beforeEach(function() {

        cy.loginAs('Admin');
    })

    it('Admin should create a new task', function () {

        const taskName = 'task ' + Date.now();

        loginPage.visit("/tasks");
        createPage.getButton().click();
        createPage.getElementById("taskDetailsForm.name").type(taskName);
        createPage.getElementById("taskDetailsForm.description").type("Writing first automated test on thursday.");
        createPage.getSelectedLabel().click({ force: true }).get('[aria-label="Yes"]').click({ force: true });
        createPage.getElementById("taskDetailsForm.rate").clear().type("5.000");
        loginPage.getSubmitButton().click();

        
        createPage.checkUrl().should('to.not.equal',('/tasks/create'));
        
        loginPage.visit("/tasks");
        createPage.getFieldText().first().click().type(taskName);
        createPage.getTaskName(taskName).should('exist');
    })
})