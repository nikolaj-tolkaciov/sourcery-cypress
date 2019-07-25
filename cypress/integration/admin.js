import LoginPage from '../objects/loginPage';
import Checks from '../objects/checks';

const login = new LoginPage();
const check = new Checks();

describe('Sourcebooks admin', function() {
    it('Admin creates a task', function() {
        var task = [Math.random().toString(36).substring(2, 15), Math.random().toString(36).substring(2, 15)] 

        login.visit();
        login.getUserDropdown("Raminta Urbonavičiūtė").click();
        login.getRoleDropdown("Admin").click();
        login.submit().click();

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
})