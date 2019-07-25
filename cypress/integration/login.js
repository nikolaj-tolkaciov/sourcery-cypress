import LoginPage from '../objects/loginPage'
import TimeLog from '../objects/timeLog'

const loginPage = new LoginPage()
const timeLog = new TimeLog()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit()
        loginPage.getValidationError().should('not.visible')
        loginPage.submitButton().click()
        loginPage.getValidationError().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit()
        loginPage.selectUserId().click({force:true})
        loginPage.getUserOption("Eglė Bucevičė").click()
        loginPage.selectRole().click({force:true})
        loginPage.getUserOption("User").click()
        loginPage.submitButton().click()

        timeLog.getUrl().should('include', '/time-logging')
        timeLog.selectPageTitle().contains('Timesheets')
        timeLog.selectCalendar().should('be.visible')
        timeLog.selectTitle().should('be.visible')
        timeLog.selectUserInfoTitle().contains('Egle Bucevice')
        timeLog.selectMainNavListElement().should('have.length', 1)
        timeLog.selectMainNavActiveLink().should('have.css', 'color', 'rgb(64, 76, 237)')
        timeLog.selectTodayInCalendar().contains(new Date().getDate())
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit()
        loginPage.selectUserId().click({force:true});
        loginPage.getUserOption("Eglė Bucevičė").click();
        loginPage.selectRole().click({force:true});
        loginPage.getUserOption("Team Lead").click();
        loginPage.submitButton().click();

        timeLog.getUrl().should('include', '/time-logging');
        timeLog.selectPageTitle().contains('Timesheets')
        timeLog.selectCalendar().should('be.visible')
        timeLog.selectTitle().should('be.visible')
        timeLog.selectUserInfoTitle().contains('Egle Bucevice');
        timeLog.selectMainNavListElement().should('have.length', 2);
        timeLog.selectMainNavActiveLink().should('have.css', 'color', 'rgb(64, 76, 237)');
        timeLog.selectTodayInCalendar().contains(new Date().getDate());
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit()
        loginPage.selectUserId().click({force:true});
        loginPage.getUserOption("Eglė Bucevičė").click();
        loginPage.selectRole().click({force:true});
        loginPage.getUserOption("Manager").click();
        loginPage.submitButton().click();

        timeLog.getUrl().should('include', '/time-logging');
        timeLog.selectPageTitle().contains('Timesheets')
        timeLog.selectCalendar().should('be.visible')
        timeLog.selectTitle().should('be.visible')
        timeLog.selectUserInfoTitle().contains('Egle Bucevice');
        timeLog.selectMainNavListElement().should('have.length', 5);
        timeLog.selectMainNavActiveLink().should('have.css', 'color', 'rgb(64, 76, 237)');
        timeLog.selectTodayInCalendar().contains(new Date().getDate());
    })

    it('Should be able to login with role Accountant', function () {

        loginPage.visit()
        loginPage.selectUserId().click({force:true});
        loginPage.getUserOption("Eglė Bucevičė").click();
        loginPage.selectRole().click({force:true});
        loginPage.getUserOption("Accountant").click();
        loginPage.submitButton().click();

        timeLog.getUrl().should('include', '/time-logging');
        timeLog.selectPageTitle().contains('Timesheets')
        timeLog.selectCalendar().should('be.visible')
        timeLog.selectTitle().should('be.visible')
        timeLog.selectUserInfoTitle().contains('Egle Bucevice');
        timeLog.selectMainNavListElement().should('have.length', 5);
        timeLog.selectMainNavActiveLink().should('have.css', 'color', 'rgb(64, 76, 237)');
        timeLog.selectTodayInCalendar().contains(new Date().getDate());
    })
    
    it('Should be able to login with role Admin', function () {

        loginPage.visit()
        loginPage.selectUserId().click({force:true});
        loginPage.getUserOption("Eglė Bucevičė").click();
        loginPage.selectRole().click({force:true});
        loginPage.getUserOption("Admin").click();
        loginPage.submitButton().click();

        timeLog.getUrl().should('include', '/time-logging');
        timeLog.selectPageTitle().contains('Timesheets')
        timeLog.selectCalendar().should('be.visible')
        timeLog.selectTitle().should('be.visible')
        timeLog.selectUserInfoTitle().contains('Egle Bucevice');
        timeLog.selectMainNavListElement().should('have.length', 6);
        timeLog.selectMainNavActiveLink().should('have.css', 'color', 'rgb(64, 76, 237)');
        timeLog.selectTodayInCalendar().contains(new Date().getDate());
    })
})
