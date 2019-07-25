import LoginPage from '../Objects/loginPage'
import TimeLogging from '../Objects/timeLogging'
const loginPage = new LoginPage();
const timeLogging = new TimeLogging();
const userName = 'Ieva Stakneviciute';

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
               
        loginPage.visit();
        loginPage.getvalidationerror().should('not.visible');
        loginPage.submitlogin().click();
        loginPage.getvalidation().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserName(userName).click();
        loginPage.getName().click({force:true});
        loginPage.getUserRole('User').click();
        loginPage.getRole().click();

        timeLogging.check();
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTile().should('be.visible')
        timeLogging.getUserTitle().contains(userName)
        timeLogging.mainNav().should('have.length', 1);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserName('Ieva Stakneviciute').click();
        loginPage.getName().click({force:true});
        loginPage.getUserRole('Team Lead').click();
        loginPage.getRole().click();

        timeLogging.check();
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTile().should('be.visible')
        timeLogging.getUserTitle().contains(userName)
        timeLogging.mainNav().should('have.length', 2);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserName('Ieva Stakneviciute').click();
        loginPage.getName().click({force:true});
        loginPage.getUserRole('Manager').click();
        loginPage.getRole().click();

        timeLogging.check();
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTile().should('be.visible')
        timeLogging.getUserTitle().contains(userName)
        timeLogging.mainNav().should('have.length', 5);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Accountant', function () {

        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserName('Ieva Stakneviciute').click();
        loginPage.getName().click({force:true});
        loginPage.getUserRole('Accountant').click();
        loginPage.getRole().click();

        timeLogging.check();
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTile().should('be.visible')
        timeLogging.getUserTitle().contains(userName)
        timeLogging.mainNav().should('have.length', 5);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Admin', function () {

        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserName('Ieva Stakneviciute').click();
        loginPage.getName().click({force:true});
        loginPage.getUserRole('Admin').click();
        loginPage.getRole().click();

        timeLogging.check();
        timeLogging.getTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTile().should('be.visible')
        timeLogging.getUserTitle().contains(userName)
        timeLogging.mainNav().should('have.length', 6);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
})
