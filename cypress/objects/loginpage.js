import LoginPage from '../objects/loginpage'
import TimeLogging from '../objects/timelogging'
const loginPage = new LoginPage();
const timeLogging = new TimeLogging();
const userName = 'Aistė Špukienė'

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit();
        loginPage.getValidationError().should('not.visible')
        loginPage.submitLogin().click();
        loginPage.getValidation().should('be.visible')
    })\
    

    it('Should be able to login with role User', function () {
        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserName(userName).click();
        loginPage.getUser().click({force:true});
        loginPage.getUserRole('User').click();
        loginPage.submitLogin().click();
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 1)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});        
        loginPage.getUserName('Aistė Špukienė').click();
        loginPage.getUser().click({force:true});
        loginPage.getUserRole('Team Lead').click();
        loginPage.submitLogin().click();
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 2)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Manager', function () {
        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserName('Aistė Špukienė').click();
        loginPage.getUser().click({force:true});
        loginPage.getUserRole('Manager').click();
        loginPage.submitLogin().click();
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 5)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Accountant', function () {
        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserName('Aistė Špukienė').click();
        loginPage.getUser().click({force:true});
        loginPage.getUserRole('Accountant').click();
        loginPage.submitLogin().click();
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 5)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Admin', function () {
        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserName('Aistė Špukienė').click();
        loginPage.getUser().click({force:true});
        loginPage.getUserRole('Admin').click();
        loginPage.submitLogin().click();
        timeLogging.check()
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        timeLogging.getUserTitle().contains('Aiste Špukiene');
        timeLogging.mainNav().should('have.length', 6)
        timeLogging.calendarToday().contains(new Date().getDate())
        timeLogging.activeLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})