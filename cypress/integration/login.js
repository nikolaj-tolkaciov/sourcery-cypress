import LoginPage from '../objects/logingPage'
import TimeLogingPage from '../objects/timeLogingPage'
const loginPage = new LoginPage()
const timeLogingPage = new TimeLogingPage()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit(); 
        loginPage.getValidationError().should('not.visible')
        loginPage.getSubmitButton().click()
        loginPage.getValidationError().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getRoleOfUser("User").click();
        loginPage.getSubmitButton().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getNavigationTabCount().should('have.length', 1);
        timeLogingPage.getActiveTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getRoleOfUser("Team Lead").click();
        loginPage.getSubmitButton().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getNavigationTabCount().should('have.length', 2);
        timeLogingPage.getActiveTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getRoleOfUser("Manager").click();
        loginPage.getSubmitButton().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getNavigationTabCount().should('have.length', 5);
        timeLogingPage.getActiveTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Accountant', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getRoleOfUser("Accountant").click();
        loginPage.getSubmitButton().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getNavigationTabCount().should('have.length', 5);
        timeLogingPage.getActiveTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })

    it('Should be able to login with role Admin', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getRoleOfUser("Admin").click();
        loginPage.getSubmitButton().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getNavigationTabCount().should('have.length', 6);
        timeLogingPage.getActiveTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })
})