import LoginPage from '../objects/loginPage';
import General from '../objects/general';
import TimeLogging from '../objects/timeLogging';
import CreateTasks from '../objects/createTasks';
import CreateClient from '../objects/createClient';

const loginPage = new LoginPage();
const general = new General();
const timeLogging = new TimeLogging();
const createTasks = new CreateTasks();
const createClient = new CreateClient();

describe('Sourcebook admin tasks', function() {

    beforeEach(function() {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    /*it('Validate today\'s date', function () {

        timeLogging.getTodaysDate().contains(new Date().getDate());
    })

    it('Admin creates new task', function() {

        //Go to tasks page
        general.getItemFromMenu('tasks').click();
        general.getRegularButton().click();

        //Create unique task name
        let taskName = 'TestTask' + new Date().getTime();

        //Fill form fields and submit
        createTasks.getField('name').type(taskName);
        createTasks.getField('description').type('Description');
        createTasks.getBillableField().click();
        general.getSpecificValueFromDropDown('Yes').click();
        createTasks.getField('rate').clear().type(2);
        general.getSubmitButton().click();

        //Check if task was created
        general.getUrl().should('not.include', 'create');
        general.getItemFromMenu('tasks').click();
        general.getFilterFields().first().type(taskName);
        general.getDisplayedItems().contains(taskName);
    })*/

    it('Admin creates new client', function() {

        //Go to clients page
        general.getItemFromMenu('clients').click();
        general.getRegularButton().click();

        //Create unique organization name
        let orgName = 'TestOrg' + new Date().getTime();

        //Fill form fields and submit
        createClient.getField('organization').type(orgName);
        createClient.getField('contacts_firstName_0').type('Name');
        createClient.getField('contacts_lastName_0').type('LastName');
        createClient.getField('contacts_email_0').type('emaill@gmail.com');
        general.getSubmitButton().click();

        //Check if client was created
        general.getUrl().should('not.include', 'create');
        general.getItemFromMenu('clients').click();
        general.getFilterFields().first().type(orgName);
        general.getDisplayedItems().contains(orgName);
    })
})