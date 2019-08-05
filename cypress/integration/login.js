import LoginPage from '../objects/loginPage'
import TimeLog from '../objects/timelog'

const loginPage = new LoginPage();
const timeLog = new TimeLog();
describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit('/');
        loginPage.getValidationError().should('not.visible')
        loginPage.submitLoginButton().click();
        loginPage.getValidation().should('be.visible')
    })

    it('Should be able to login with user role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});

        loginPage.roleLabelUser('User').click();
        loginPage.submitOption().click();

        timeLog.includeTimeLog();
        timeLog.getPageTitle().contains('Timesheets')
        timeLog.getCalendar().should('be.visible')
        timeLog.getTimeEntryForm().should('be.visible')
        timeLog.getUserTitle().contains("Olga Pikul")
        timeLog.getNavigationTabs().should('have.length', 1);
        timeLog.calendarToday().contains(new Date().getDate());
        timeLog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
       

    })

    it('Should be able to login with Team Lead role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});

        loginPage.roleLabelUser('Team Lead').click();
        loginPage.submitOption().click();

        timeLog.includeTimeLog();
        timeLog.getPageTitle().contains('Timesheets')
        timeLog.getCalendar().should('be.visible')
        timeLog.getTimeEntryForm().should('be.visible')
        timeLog.getUserTitle().contains("Olga Pikul")
        timeLog.getNavigationTabs().should('have.length', 2);
        timeLog.calendarToday().contains(new Date().getDate());
        timeLog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')

    })
    it('Should be able to login with manager role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});

        loginPage.roleLabelUser('Manager').click();
        loginPage.submitOption().click();

        timeLog.includeTimeLog();
        timeLog.getPageTitle().contains('Timesheets')
        timeLog.getCalendar().should('be.visible')
        timeLog.getTimeEntryForm().should('be.visible')
        timeLog.getUserTitle().contains("Olga Pikul")
        timeLog.getNavigationTabs().should('have.length', 5);
        timeLog.calendarToday().contains(new Date().getDate());
        timeLog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
     

    })

    it('Should be able to login with Accountant role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});

        loginPage.roleLabelUser('Accountant').click();
        loginPage.submitOption().click();

        timeLog.includeTimeLog();
        timeLog.getPageTitle().contains('Timesheets')
        timeLog.getCalendar().should('be.visible')
        timeLog.getTimeEntryForm().should('be.visible')
        timeLog.getUserTitle().contains("Olga Pikul")
        timeLog.getNavigationTabs().should('have.length', 5);
        timeLog.calendarToday().contains(new Date().getDate());
        timeLog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    

    })
    it('Should be able to login with Admin role', function () {

        loginPage.visit('/');
        loginPage.getUserId().click({force:true});
        loginPage.getUserOption('Olga Pikul').click();
        loginPage.getRole().click({force:true});

        loginPage.roleLabelUser('Admin').click();
        loginPage.submitOption().click();

        timeLog.includeTimeLog();
        timeLog.getPageTitle().contains('Timesheets')
        timeLog.getCalendar().should('be.visible')
        timeLog.getTimeEntryForm().should('be.visible')
        timeLog.getUserTitle().contains("Olga Pikul")
        timeLog.getNavigationTabs().should('have.length', 6);
        timeLog.calendarToday().contains(new Date().getDate());
        timeLog.getSelectedTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
  })
})