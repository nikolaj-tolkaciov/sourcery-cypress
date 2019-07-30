import LoginPage from '../objects/loginPage'
import Timelog from '../objects/timelog'

const loginPage = new LoginPage();
const timelog = new Timelog();
describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit('/');
        loginPage.getvalidationerror().should('not.visible')
        loginPage.submitloginbutton().click();
        loginPage.getvalidation().should('be.visible')
    })

    it('Should be able to login with user role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeluser('User').click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.getCalendar().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 1);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with Team Lead role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeluser('Team Lead').click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.getCalendar().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 2);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
    it('Should be able to login with manager role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeluser('Manager').click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.getCalendar().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 5);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with Accountant role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeluser('Accountant').click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.getCalendar().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 5);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
    it('Should be able to login with Admin role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeluser('Admin').click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.getCalendar().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 6);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
})