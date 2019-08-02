import LoginPage from '../objects/LoginPage';
import TimeLoggin from '../objects/TimeLoggin';
const timeLoggin = new TimeLoggin();
const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserIDLogin().click({force:true});
        loginPage.getSpecificUserFromDropDown("Demo User").click();
        loginPage.getLoginFormRole().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();

        timeLoggin.urlIncludeTimeLogging().should('include', '/time-logging');
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        timeLoggin.getUserInfoFromTitle().contains('Demo User');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 1);
    })
})