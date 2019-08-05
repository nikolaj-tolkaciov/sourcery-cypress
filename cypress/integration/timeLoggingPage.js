import LoginPage from '../Objects/loginPage'
import TimeLogging from '../Objects/timeLogging'
const loginPage = new LoginPage();
const timeLogging = new TimeLogging();
const userName = 'Ieva Stakneviciute';

describe('Timesheets', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    it('Should be ontime logging page', function () {
        timeLogging.check();
    })
})