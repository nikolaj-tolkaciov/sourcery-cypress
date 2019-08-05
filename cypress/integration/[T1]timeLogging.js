import TimeLoggingPage from '../obj/timeLogging/timeLoggingPage';
import LoginPage from '../obj/loginPage';
import Common from '../obj/common';

const timeLoggingPage = new TimeLoggingPage();
const loginPage = new LoginPage();
const common = new Common();

const today = new Date();
const date = today.getDate();

describe('[T1] Sourcebooks testTimeLogging', function() {
    it('Should be displaying todays date in Time Logging page', function () {
        cy.loginAs("Admin");
        loginPage.visit();

        timeLoggingPage.getCalendarToday().contains(date);
    })
})
