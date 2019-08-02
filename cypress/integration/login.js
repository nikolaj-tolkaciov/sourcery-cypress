import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import PageComponents from '../objects/pageComponents';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const pageComponents = new PageComponents();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.clickSubmit()
    })

    it('Should be able to login with role Team Lead and check today\'s date', function () {

        loginPage.visit();        
        loginPage.loginWithUserAndRole("Jelena Černyšova", "Team Lead")

        pageComponents.getUrl().should('include', '/time-logging');
        pageComponents.getPageTitle().contains('Timesheets')
        timeLoggingPage.getCalendar().should('be.visible')
        timeLoggingPage.getTileForm().should('be.visible')
        pageComponents.getLoggedInUser().contains('Jelena Cernyšova');
        pageComponents.getNavigationTabsList().should('have.length', 2)
        timeLoggingPage.assertDisplayedTodaysDay()
    })
})