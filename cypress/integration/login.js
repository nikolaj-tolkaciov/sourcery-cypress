import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';

const loginPage = new LoginPage()
const timeLoggingPage = new TimeLoggingPage()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
    
        loginPage.visit()

        loginPage.getValidationError().should('not.visible')
        loginPage.getSelectedItemSubmit().click()
        loginPage.getValidationError().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit()
        loginPage.getUserID().click({force:true});
        loginPage.getUserOption("Asta Radžiuvienė").click();
        loginPage.getRoleForm().click({force:true});
        loginPage.getUserRoleOption("User").click();
        loginPage.getSelectedItemSubmit().click();
        
        timeLoggingPage.getUrl()
        timeLoggingPage.getPageTitle().contains('Timesheets')
        timeLoggingPage.getCalendar().should('be.visible')
        timeLoggingPage.getTitleForm().should('be.visible')
        timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
        timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 1);
        timeLoggingPage.showTodaysDate().contains(new Date().getDate());
       
    })

it('Should be able to login with role User', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getUserRoleOption("User").click();
    loginPage.getSelectedItemSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 1);
    timeLoggingPage.showTodaysDate().contains(new Date().getDate());
    timeLoggingPage.getActiveTab().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
})

it('Should be able to login with role Team Lead', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getUserRoleOption("Team Lead").click();
    loginPage.getSelectedItemSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 2);
    timeLoggingPage.showTodaysDate().contains(new Date().getDate());;
    timeLoggingPage.getActiveTab().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
    timeLoggingPage.getTab().contains('Time Entries');
   
})

it('Should be able to login with role Manager', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});;
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getUserRoleOption("Manager").click();
    loginPage.getSelectedItemSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 5);
    timeLoggingPage.showTodaysDate().contains(new Date().getDate());
    timeLoggingPage.getActiveTab().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
    timeLoggingPage.getTab().contains('Time Entries');
    timeLoggingPage.getTab().contains('Invoices');
    timeLoggingPage.getTab().contains('Projects');
    timeLoggingPage.getTab().contains('Clients');

})
it('Should be able to login with Accountant', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getUserRoleOption("Accountant").click();
    loginPage.getSelectedItemSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 5);
    timeLoggingPage.showTodaysDate().contains(new Date().getDate());
    timeLoggingPage.getActiveTab().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
    timeLoggingPage.getTab().contains('Time Entries');
    timeLoggingPage.getTab().contains('Invoices');
    timeLoggingPage.getTab().contains('Projects');
    timeLoggingPage.getTab().contains('Clients');

})

it('Should be able to login with Admin', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getUserRoleOption("Admin").click()
    loginPage.getSelectedItemSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 6);
    timeLoggingPage.showTodaysDate().contains(new Date().getDate());
    timeLoggingPage.getActiveTab().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
    timeLoggingPage.getTab().contains('Time Entries');
    timeLoggingPage.getTab().contains('Invoices');
    timeLoggingPage.getTab().contains('Projects');
    timeLoggingPage.getTab().contains('Clients');
    timeLoggingPage.getTab().contains('Tasks');
})
})