import LoginPage from '../objects/loginpage'
import TimeLoggingPage from '../objects/timeloggingpage'
const loginPage = new LoginPage();
const timeLogging = new TimeLoggingPage();
const userName = 'Aistė Špukienė'

describe('Sourcebooks login', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit();
        loginPage.getValidationError().should('not.visible')
        loginPage.submitLoginButton().click();
        loginPage.getValidation().should('be.visible')
    })
    
    it('Should be able to login with role User', function () {
        loginPage.visit('/');
        loginPage.clickUserField().click({force:true});
        loginPage.findUserName(userName).click();
        loginPage.clickRoleField().click({force:true});
        loginPage.findUserRole('User').click();
        loginPage.submitLoginButton().click();

        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTimeFillingForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 1)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit('/');
        loginPage.clickUserField().click({force:true});        
        loginPage.findUserName('Aistė Špukienė').click();
        loginPage.clickRoleField().click({force:true});
        loginPage.findUserRole('Team Lead').click();
        loginPage.submitLoginButton().click();

        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTimeFillingForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 2)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Manager', function () {
        loginPage.visit('/');
        loginPage.clickUserField().click({force:true});
        loginPage.findUserName(userName).click();
        loginPage.clickRoleField().click({force:true});
        loginPage.findUserRole('Manager').click();
        loginPage.submitLoginButton().click();
        
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTimeFillingForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 5)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Accountant', function () {
        loginPage.visit('/');
        loginPage.clickUserField().click({force:true});
        loginPage.findUserName(userName).click();
        loginPage.clickRoleField().click({force:true});
        loginPage.findUserRole('Accountant').click();
        loginPage.submitLoginButton().click();
        
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTimeFillingForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 5)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Admin', function () {
        loginPage.visit('/');
        loginPage.clickUserField().click({force:true});
        loginPage.findUserName(userName).click();
        loginPage.clickRoleField().click({force:true});
        loginPage.findUserRole('Admin').click();
        loginPage.submitLoginButton().click();

        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTimeFillingForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 6)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})