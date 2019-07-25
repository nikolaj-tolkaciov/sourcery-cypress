import LoginPage from '../objects/loginPage';
import Checks from '../objects/checks';

const login = new LoginPage();
const check = new Checks();

describe('Sourcebooks admin', function() {
    beforeEach(() => {
        cy.loginAs("Admin");
        login.visit();
    })

    it('Admin creates a task', function() {
        var task = [Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15)] 

        check.click('[href="/tasks"]');
        check.click('.btn');
        check.inputText('[id="taskDetailsForm.name"]', task[0]);
        check.inputText('[id="taskDetailsForm.description"]', task[1]);
        check.click('[class="Select-value"]');
        check.contentCheck('[role="option"]', "Yes").click();
        check.inputNumber('[id="taskDetailsForm.rate"]', '2');
        check.click('[class="btn"]');

        check.click('[href="/tasks"]');
        check.searchTaskName('[type="text"]', task[0]);
        check.visibilityCheck('[role="row"]');
    })

    it('Admin creates a client', function() {
        var task = [Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15)]
        task[3] += "@gmail.com";
        console.log(task[3]);

        check.click('[href="/clients"]');
        check.click('.btn');
        check.inputText('[id="clientDetailsForm.organization"]' ,task[0]);
        check.inputText('[id="clientDetailsForm.contacts_firstName_0"]', task[1]);
        check.inputText('[id="clientDetailsForm.contacts_lastName_0"]', task[2]);
        check.inputText('[id="clientDetailsForm.contacts_email_0"]', task[3]);
        check.click('[class="btn"]');

        check.click('[href="/clients"]');
        check.searchTaskName('[type="text"]', task[0]);
        check.visibilityCheck('[role="row"]');
    })
})