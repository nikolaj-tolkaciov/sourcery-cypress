import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import Page from '../objects/pageComponents';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const page = new Page();

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
        loginPage.visitLoginPage();
        loginPage.getUserField().click({force:true});
        loginPage.getUserOptionFromDropdown(user).click();
        loginPage.getRoleField().click({force:true});
        loginPage.getRolesOptionFromDropdown(roles[i]).click();
        page.getButtonByType(buttonSubmit).click();

        timeLoggingPage.assertPageTimeLogginDisplayed();
        page.getUserProfileButton().contains(user);
        page.getNavList().find('li').should('have.length', tabs[i]);
        page.getActiveNavMenuOption().contains(titlePageTimeLogging);
        page.getActiveNavMenuOption().should('have.css', 'color')
            .and('eq', colorActiveNavOption)
        timeLoggingPage.getTodayCalendarCell()
            .find(timeLoggingPage.getDayNumberOfCalendarCell()).contains(date.getDate());
    })
}
})