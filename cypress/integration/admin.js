import LoginPage from '../objects/loginPage';
import Checks from '../objects/checks';

const login = new LoginPage();
const check = new Checks();
const participantNum = 43; //later change to change from hard coded version
const clientNum = 84;
const taskNum = 499;
const projNum = 132;

var randParticNum = Math.round(Math.random() * (participantNum - 1));
var randTask = Math.round(Math.random() * taskNum); //TO DO to make not hardcoded 
var randClient = Math.round(Math.random() * clientNum); //TO DO get the length from DOM
var randProject =Math.round(Math.random() * projNum);

function isTimeLogged(nameTitle) {
    return cy.get(nameTitle).should('exist')
}

function loggedTime(nameTitle) {
    if(isTimeLogged(nameTitle)) {
        return cy.get(nameTitle).text();
    }
    else {
        return 0;
    }
}


describe('Sourcebooks admin', function() {
    beforeEach(() => {
        cy.loginAs("Admin");
        login.visit();
    })

    /*it('Admin should be able to create a task', function() {
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
    })*/

    it('Admin should log time', function() {
        var task = Math.random().toString(36).substring(2, 15)

        var hours = (Math.round(Math.random() * 23) + Math.random()).toFixed(2)
        


        check.click('[href="/time-logging"]');
        check.click('.calendar--today');

        cy.get('.Select-control').eq(0).click().get('.Select-option').eq(0).click();
        cy.get('.Select-control').eq(1).click().get('[role="listbox"]').eq(0).click();

        check.inputText('[id="timeLoggingForm.notes"]', task);

        check.inputText('[id="timeLoggingForm.hours"]', hours);

        check.click('[type="submit"]');

        cy.get('.calendar--today')
        console.log(`laikas: ${loggedTime('.calendar__label')}`);
    })
})