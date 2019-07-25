import LoginPage from '../objects/logingPage'
import TimeLogingPage from '../objects/timeLogingPage'
const loginPage = new LoginPage()
const timeLogingPage = new TimeLogingPage()
describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        

        loginPage.visit();
        
        loginPage.getValidationError().should('not.visible')
        loginPage.getSubmit().click()
        loginPage.getValidationError().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getLabel('User').click();
        loginPage.getSubmit().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getLength().find('li').should('have.length', 1);
        timeLogingPage.getTimeLoggingColor().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getLabel("Team Lead").click();
        loginPage.getSubmit().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getLength().find('li').should('have.length', 2);
        timeLogingPage.getTimeLoggingColor().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getLabel("Manager").click();
        loginPage.getSubmit().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getLength().find('li').should('have.length', 5);
        timeLogingPage.getTimeLoggingColor().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getLabel("Accountant").click();
        loginPage.getSubmit().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getLength().find('li').should('have.length', 5);
        timeLogingPage.getTimeLoggingColor().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getLabel("Admin").click();
        loginPage.getSubmit().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getLength().find('li').should('have.length', 6);
        timeLogingPage.getTimeLoggingColor().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })
})