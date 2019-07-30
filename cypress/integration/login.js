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

    it('Should be able to login with role User', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeluser().click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.calendarv().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 1);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
 
    it('Should be able to login with role Team Lead', function () {
        
        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabelteam().click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.calendarv().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 2);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabelmanager().click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.calendarv().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 5);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })
    it('Should be able to login with role Accountant', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabelaccountant().click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.calendarv().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 5);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
    it('Should be able to login with role Admin', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});
        loginPage.roleLabeladmin().click();
        loginPage.submitOption().click();

        timelog.includer();
        timelog.pagetitle().contains('Timesheets')
        timelog.calendarv().should('be.visible')
        timelog.getTimeEntryForm().should('be.visible')
        timelog.getUserTitle().contains("Olga Pikul")
        timelog.getNavigationTabs().should('have.length', 6);
        timelog.calendarToday().contains(new Date().getDate());
        timelog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
})
})