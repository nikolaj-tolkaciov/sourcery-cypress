import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();

function prepareSUT () {
    let roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
    let tabs = [1, 2, 5, 5, 6];
    let user = 'Modestas Kmieliauskas';
    let date = new Date();
    let buttonSubmit = "submit";
    let titlePageTimeLogging = "Time Logging";
    let colorActiveNavOption = 'rgb(64, 76, 237)';

    return { roles, tabs, user, date, buttonSubmit, titlePageTimeLogging, colorActiveNavOption }    
}

describe('Sourcebooks login', function() {

    const { roles, tabs, user, date, buttonSubmit, titlePageTimeLogging, colorActiveNavOption } = prepareSUT();

    for(let i = 0; i < roles.length; i++) {
    it(`Verify user with role "${roles[i]}" log in, see selected date and see appropriate tab number`, function() {
        loginPage.visit();
        loginPage.getUserFieldSelectorById().click({force:true});
        loginPage.getUserOptionFromDropdown(user).click();
        loginPage.getRoleFieldSelectorById().click({force:true});
        loginPage.getRolesOptionFromDropdown(roles[i]).click();
        loginPage.getButtonByType(buttonSubmit).click();

        timeLoggingPage.assertPageTimeLogginDisplayed();
        timeLoggingPage.getUserProfileButtonSelector().contains(user);
        timeLoggingPage.getNavListSelector().find('li').should('have.length', tabs[i]);
        timeLoggingPage.getActiveNavMenuOptionSelector().contains(titlePageTimeLogging);
        timeLoggingPage.getActiveNavMenuOptionSelector().should('have.css', 'color')
            .and('eq', colorActiveNavOption)
        timeLoggingPage.getTodayCalendarCell()
            .find(timeLoggingPage.getDayNumberOfCalendarCellSelector()).contains(date.getDate());
    })
}
})