import LoginPage from '../objects/loginPage';
import General from '../objects/general';
import TimeLogging from '../objects/timeLogging';
import CreateClient from '../objects/createClient';
import CreateProject from '../objects/createProject';
import TimeEntries from '../objects/timeEntries';
import CreateInvoice from '../objects/createInvoice';

const loginPage = new LoginPage();
const general = new General();
const timeLogging = new TimeLogging();
const createClient = new CreateClient();
const createProject = new CreateProject();
const timeEntries = new TimeEntries();
const createInvoice = new CreateInvoice();

let date = new Date();
const projectName = 'Wonder Project';
const taskName = 'Task a';
const description = 'Description' + date.getTime();
const loggedHours = '0.50';
const month = date.getMonth() + 1;
let todaysDate;
let todaysDate2;

if (month < 10) {
    todaysDate =  date.getFullYear() + '-0' + month + '-' + date.getDate();
    todaysDate2 =  '0' + month + '/' + date.getDate() + '/' + date.getFullYear();
} else {
    todaysDate =  date.getFullYear() + '-' + month + '-' + date.getDate();
    todaysDate2 =  month + '/' + date.getDate() + '/' + date.getFullYear();
}

describe('Sourcebook admin actions', function() {
    
    beforeEach(function() {
        cy.loginAs('Admin');
        loginPage.visit();
    })
    

    it('Validate today\'s date', function () {

        timeLogging.getTodaysDate().contains(new Date().getDate());
    })

    it('Admin creates new client', function() {

        //Go to clients page
        general.getItemFromMenu('clients').click();
        general.getButton().contains('Create Client').click();

        //Create unique organization name
        const orgName = 'TestOrg' + new Date().getTime();

        //Fill form fields and submit
        createClient.getOrganizationField().type(orgName);
        createClient.getFirstNameField().type('Name');
        createClient.getLastNameField().type('LastName');
        createClient.getEmailField().type('emaill@gmail.com');
        general.getSubmitButton().click();

        //Check if client was created
        general.getUrl().should('not.include', 'create');
        general.getItemFromMenu('clients').click();
        general.getFilterFields().first().type(orgName);
        general.getDisplayedItems().contains(orgName);
    })

    it('Admin creates new project', function() {

        //Go to projects page
        general.getItemFromMenu('projects').click();
        general.getButton().contains('Create Project').click();

        //Create unique project name
        const projectName = 'TestPrj' + new Date().getTime();

        //Fill form fields and submit
        createProject.getNameField().type(projectName);
        createProject.openClientDropDown().click();
        general.getSpecificValueFromDropDown('HeyHeyHouHou').click();
        createProject.openManagerDropDown().click();
        general.getSpecificValueFromDropDown('Stugyte, Kamile (kamile.stugyte@sourcebooks.com)').click();
        createProject.getAddButton('Add Tasks').click();
        createProject.getCheckBox(1503).click();
        general.getButton().contains('Add').click();
        createProject.getAddButton('Add Members').click();
        createProject.getCheckBox(24).next().click();
        general.getButton().contains('Add').click();
        general.getSubmitButton().click();

        //Check if project was created
        general.getUrl().should('not.include', 'create');
        general.getItemFromMenu('projects').click();
        general.getFilterFields().first().type(projectName);
        general.getDisplayedItems().contains(projectName);
    })

    it('Admin logs time', function() {

        //Go to time logging page
        general.getItemFromMenu('time-logging').click();

        //log a project
        timeLogging.getTodaysCell().click();
        timeLogging.getProjectDropDown().click();
        general.getSpecificValueFromDropDown(projectName).click();
        timeLogging.getTaskDropDown().click();
        general.getSpecificValueFromDropDown(taskName).click();
        timeLogging.getDescriptionField().type(description);
        timeLogging.getHoursField().clear().type(loggedHours);
        general.getButton().contains('Log Hours').click();
        cy.wait(500);

        //delete all logged projects that day
        timeLogging.getAllCheckBoxes().click();
        timeLogging.getDeleteButton().click();
        timeLogging.getDelConfirmButton().click();

        //log a project
        timeLogging.getTodaysCell().click();
        timeLogging.getProjectDropDown().click();
        general.getSpecificValueFromDropDown(projectName).click();
        timeLogging.getTaskDropDown().click();
        general.getSpecificValueFromDropDown(taskName).click();
        timeLogging.getDescriptionField().type(description);
        timeLogging.getHoursField().clear().type(loggedHours);
        general.getButton().contains('Log Hours').click();
        cy.wait(500);


        //check if new record appears and data is correct
        timeLogging.getProjectsRows().should('have.length', 1);
        timeLogging.getLoggedHours().last().contains(loggedHours);
        timeLogging.getProjectNames().last().contains(projectName);
        timeLogging.getTaskNames().last().contains(taskName);
        timeLogging.getDescriptions().last().contains(description);       

    })

    it('Admin checks entered time entry', function() {

        //Go to time entries page
        general.getItemFromMenu('time-entries').click();

        //Filter time entries
        timeEntries.getProjectField().click();
        timeEntries.getCheckBox(2437).click();
        general.getButton().contains('Save').click();
        timeEntries.getEmployeeField().click();
        timeEntries.getCheckBox(24).click();
        general.getButton().contains('Save').click();
        timeEntries.getFromField().clear().type(todaysDate2);
        timeEntries.getToField().clear().type(todaysDate2);
        timeEntries.getTaskField().click();
        general.getSpecificValueFromDropDown('Task a').click();
        timeEntries.getFilterButton().click();

        //Check
        timeEntries.getTableRows().should('have.length', 1);  
        timeEntries.getProjectNames().contains(projectName); 
        timeEntries.getDates().contains(todaysDate);
        timeEntries.getEmployees().contains('Stugyte, Kamile');
        timeEntries.getTaskNames().contains(taskName);
        timeEntries.getHours().contains(loggedHours);
        timeEntries.getDescriptions().contains(description);
    })

    it('Admin creates new invoice', function() {

        //Go to invoices page
        general.getItemFromMenu('invoices').click();

        let invoiceNumber = '' + new Date().getTime() + '';
        invoiceNumber = invoiceNumber.substring(5);

        //Create invoice
        general.getButton().contains('Create Invoice').click();
        createInvoice.getInvoiceNumberField().type(invoiceNumber);
        createInvoice.getClientNameField().click();
        general.getSpecificValueFromDropDown('TestOrg1564751071135').click();
        general.getSubmitButton().click();

        //Check if invoice was created
        general.getUrl().should('not.include', 'create');

    })
})