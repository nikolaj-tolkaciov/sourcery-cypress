import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage'

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible');
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        cy.wait(2000); // for reason js sometimes doesn't load my client
        timeLoggingPage.visit();
        // loginPage.getSpecificUrl('/time-logging');
        timeLoggingPage.getPageTitle().contains('Timesheets');
        timeLoggingPage.getCalendar().should('be.visible');
        timeLoggingPage.getPageTitle().should('be.visible');
        timeLoggingPage.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(2);
    })

    it('Should validate what date is selected as “Today” on Time Logging page', function () {
        timeLoggingPage.getCalendarTodaysDate();
    })
    
})