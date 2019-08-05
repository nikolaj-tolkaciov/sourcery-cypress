import TimeEntriesPage from '../obj/timeEntries/timeEntriesPage';
import TimeLoggingPage from '../obj/timeLogging/timeLoggingPage';
import LoginPage from '../obj/loginPage';
import Common from '../obj/common';

const timeEntriesPage = new TimeEntriesPage();
const timeLoggingPage = new TimeLoggingPage();
const loginPage = new LoginPage();
const common = new Common();

let project = 'pro';
let task = '04';
let description1 = `description1_${common.makeId()}`;
let description2 = `description2_${common.makeId()}`;
let hoursLogged = 0.1;

const projectId = 2420;
const date = new Date();'08/01/2019';
let mont = date.getMonth() + 1;
let day = date.getDate();
if (mont < 10) {
    mont = `0${mont}`;
}
if (day < 10) {
    day = `0${day}`;
}
const dateFormated = `${mont}/${day}/${date.getFullYear()}`;

describe('[T6-T7] Sourcebooks testTimeEntries', function() {
    it('[T6] Should be available for Admin to log time', function () {
        cy.loginAs("Admin");
        loginPage.visit();

        timeLoggingPage.getCalendarToday().click();
        timeLoggingPage.getProjectDropdown().click();
        timeLoggingPage.getProjectFromDropdown(project).click();
        timeLoggingPage.getTaskDropdown().click();
        timeLoggingPage.getTaskFromDropdown(task).click();
        timeLoggingPage.getFormDescription().type(description1);
        timeLoggingPage.getFormHours().type(hoursLogged);
        timeLoggingPage.getSubmitButton().click();
        cy.wait(1000);

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

    it('[T7] Should be available for Admin to check Time Entry', function() {
        cy.loginAs("Admin");
        timeEntriesPage.visit();

        timeEntriesPage.getProjectInput().click();
        timeEntriesPage.getModuleProjectCheckbox(projectId).click();
        timeEntriesPage.getModuleSaveButton().click();
        timeEntriesPage.getEmploeeInput().click();
        timeEntriesPage.getModuleEmploeeCheckbox(31).click();
        timeEntriesPage.getModuleSaveButton().click();
        timeEntriesPage.getTimeFromInput().clear();
        timeEntriesPage.getTimeFromInput().type(dateFormated);
        timeEntriesPage.getTimeToInput().clear();
        timeEntriesPage.getTimeToInput().type(dateFormated);
        timeEntriesPage.getTaskInput().click();
        timeEntriesPage.getTaskFromDropdown(task).click();
        timeEntriesPage.getFilterButton().click();

        timeEntriesPage.getFilteredList().should('have.length', 2);
        timeEntriesPage.checkProjectsNames(project);
        timeEntriesPage.checkProjectsDates();
        timeEntriesPage.checkEmploees('Lastauskas, Marius');
        timeEntriesPage.checkTasks(task);
        timeEntriesPage.checkHours(hoursLogged.toFixed(2));
        timeEntriesPage.checkNotes(description1, description2);
    })
})