import LoginPage from "../objects/loginPage";
import TimeLoggingPage from "../objects/timeLoggingPage";

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();

describe('Sourcebooks login', function () {

    var today = new Date();
    const userName = 'Modestas Kmieliauskas';
    const roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
    const Tabs = ['1', '2', '5', '5', '6'];
    const activeTabColor = 'rgb(64, 76, 237)';

    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    for (let i = 0; i < roles.length; i++) {
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
})