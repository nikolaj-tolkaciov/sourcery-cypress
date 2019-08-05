import TimeLoggingPage from '../obj/timeLogging/timeLoggingPage';
import LoginPage from '../obj/loginPage';
import Common from '../obj/common';

const timeLoggingPage = new TimeLoggingPage();
const loginPage = new LoginPage();
const common = new Common();

describe('Sourcebooks testTimeLogging', function() {
    it('Should be available for Admin to log time entry', function () {
        cy.loginAs("Admin");
        loginPage.visit();
        
        let project = 'pro';
        let task = '04';
        let description1 = `description1_${common.makeId()}`;
        let description2 = `description2_${common.makeId()}`;
        let hoursLogged = 0.1;

        timeLoggingPage.getCalendarToday().click();
        timeLoggingPage.getProjectDropdown().click();
        timeLoggingPage.getProjectFromDropdown(project).click();
        timeLoggingPage.getTaskDropdown().click();
        timeLoggingPage.getTaskFromDropdown(task).click();
        timeLoggingPage.getFormDescription().type(description1);
        timeLoggingPage.getFormHours().type(hoursLogged);
        timeLoggingPage.getSubmitButton().click();

        timeLoggingPage.getAllTimeLogsCheckbox().click({force: true});
        timeLoggingPage.getDeleteButton().click({force: true});
        timeLoggingPage.getDeleteConfirmButton().click();

        timeLoggingPage.getFormDescription().type(description1);
        timeLoggingPage.getFormHours().type(hoursLogged);
        timeLoggingPage.getSubmitButton().click();
        timeLoggingPage.getTodayHoursRecord().contains(hoursLogged.toFixed(2));
        timeLoggingPage.getLoggedTimes().should('have.length', 1);
        timeLoggingPage.getFirstLoggedTimeProject(project).contains(project);
        timeLoggingPage.getFirstLoggedTimeTask().contains(task);
        timeLoggingPage.getFirstLoggedTimeDescription(description1).contains(description1);
        timeLoggingPage.getFirstLoggedTimeHours().contains(hoursLogged.toFixed(2));

        timeLoggingPage.getFormDescription(description2).type(description2);
        timeLoggingPage.getFormHours().type(hoursLogged);
        timeLoggingPage.getSubmitButton().click();
        timeLoggingPage.getTodayHoursRecord().contains((hoursLogged * 2).toFixed(2));
        timeLoggingPage.getLoggedTimes().should('have.length', 2);


    })

    it('Should be displaying todays date in Time Logging page', function () {
        cy.loginAs("Admin");
        loginPage.visit();
        const today = new Date();
        const date = today.getDate();

        timeLoggingPage.getCalendarToday().contains(date);
    })
})
