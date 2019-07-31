import LoginPage from '../objects/loginPage';
import Checks from '../objects/checks';

const login = new LoginPage();
const check = new Checks();
const participantNum = 43; //later change to change from hard coded version
const clientNum = 84;
const taskNum = 499;

describe('Sourcebooks admin', function() {
    beforeEach(() => {
        cy.loginAs("Admin");
        login.visit();
    })

    it('Admin should be able to create a task', function() {
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

    it('Admin should be able to create a project', function() {
        var task = [Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15)]

        check.click('[href="/projects"]');
        check.click('.btn');
        check.inputText('[id="projectDetailsForm.name"]', task[0]);
        
        var randParticNum = Math.round(Math.random() * (participantNum - 1));
        var randTask = Math.round(Math.random() * taskNum); //TO DO to make not hardcoded 
        var randClient = Math.round(Math.random() * clientNum); //TO DO get the length from DOM
        
        check.forceClick('[id="projectDetailsForm.client"]');
        cy.get('[class="Select-menu-outer"]');
        check.clickCertainBtn('[role="option"]', randClient+1);

        check.forceClick('[id="projectDetailsForm.projectManager"]').type('Urbonaviciute, Raminta');
        check.click('[class="Select-menu-outer"]');

        check.clickCertainBtn('.btn', 1);
        cy.get('.tile__list-item' );
        check.clickCertainBtn('span.field__checkbox-fake', randTask+1);
        check.clickCertainBtn('.btn', 8);

        check.clickCertainBtn('.btn__secondary', 4);
        check.contentCheck('.tile__list-item', 'Urbonaviciute, Raminta').click()
        check.clickCertainBtn('.btn', 9);

        check.click('[type="Submit"]');
        check.click('[href="/projects"]');
    })
})