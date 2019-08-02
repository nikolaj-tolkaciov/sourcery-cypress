import LoginPage from "../objects/loginPage";
import TimeLoggingPage from "../objects/timeLoggingPage";
import TaskPage from "../objects/taskPage";
import ClientPage from "../objects/clientPage";

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const taskPage = new TaskPage();
const clientPage = new ClientPage();

describe('Sourcebooks testing', function () {

    var today = new Date();
    const userName = 'Modestas Kmieliauskas';
    const urlTimeLogging = '/time-logging';
    const roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
    const Tabs = ['1', '2', '5', '5', '6'];
    const activeTabColor = 'rgb(64, 76, 237)';
    let randomString = Math.random().toString(36);

    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    for (let i = 4; i < roles.length; i++) {
        it('Should be able to login with role ' + roles[i] +
            ', check current day and active tab color', function () {

                loginPage.visit();
                loginPage.getUserDropDown().click({ force: true });
                loginPage.getUserOption(userName).click();
                loginPage.getRoleDropDown().click({ force: true });
                loginPage.getRoleOption(roles[i]).click();
                loginPage.getSubmitButton().click();

                timeLoggingPage.assertUrl();
                timeLoggingPage.getPageTitle().contains('Timesheets');
                timeLoggingPage.getCalendarSelector().should('be.visible');
                timeLoggingPage.getTileForm().should('be.visible');
                timeLoggingPage.getUserInfoTitle().contains(userName);
                timeLoggingPage.getMainNav().find('li').should('have.length', Tabs[i]);
                timeLoggingPage.getCalendarToday().contains(today.getDate());
                timeLoggingPage.getActiveMainNav().should('have.css', 'color', activeTabColor);
            })
    }
    it('Should be able to create new task as admin', function () {
        const taskName = randomString;
        cy.loginAs('Admin');
        taskPage.visit();
        taskPage.getCreateTaskButton().click();
        taskPage.getTaskNameField().type(taskName);
        taskPage.getTaskDescriptionField().type(randomString);
        taskPage.getBillToClientDropdown().click({ force: true });
        taskPage.getBillToClientOption().click();
        taskPage.getHourlyRateField().clear().type(Math.random() * 50);
        taskPage.getSubmitButton().click();
        taskPage.assertNotCreateUrl();
        taskPage.visit();
        taskPage.getFilterField().type(taskName);
        taskPage.getTaskItem().contains(taskName);
    })

    it('Should be able to create new client as admin', function () {
        const organizationName = randomString;
        cy.loginAs('Admin');
        clientPage.visit();
        clientPage.getCreateClientButton().click();
        clientPage.getClientOrganizationField().type(organizationName);
        clientPage.getClientFirstnameField().type(randomString);
        clientPage.getClientLastnameField().type(randomString);
        clientPage.getClientEmailField().type('superuser@gmail.com');
        clientPage.getSubmitClientButton().click();
        clientPage.assertNotCreateUrl();
        clientPage.visit();
        clientPage.getFilterField().type(organizationName);
        clientPage.getClientItem().contains(organizationName);
    })
})