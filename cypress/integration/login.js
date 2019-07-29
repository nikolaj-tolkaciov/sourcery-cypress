import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';


const loginPage = new LoginPage()
const timeLoggingPage = new TimeLoggingPage()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
    

        loginPage.visit()

        loginPage.getValidationError().should('not.visible')
        loginPage.getSubmit().click()
        loginPage.getValidationError().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit()
        loginPage.getUserID().click({force:true});
        loginPage.getUserOption("Asta Radžiuvienė").click();
        loginPage.getRoleForm().click({force:true});
        loginPage.getOption("User").click();
        loginPage.getSubmit().click();
        
        timeLoggingPage.getUrl()
        timeLoggingPage.getPageTitle().contains('Timesheets')
        timeLoggingPage.getCalendar().should('be.visible')
        timeLoggingPage.getTitleForm().should('be.visible')
        timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
        timeLoggingPage.getMainNavigation().find('li').should('have.length', 1);
        timeLoggingPage.getToday().contains(new Date().getDate());
    })

it('Should be able to login with role User', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getOption("User").click();
    loginPage.getSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigation().find('li').should('have.length', 1);
    timeLoggingPage.getToday().contains(new Date().getDate());
    timeLoggingPage.getLinkActive().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
})

it('Should be able to login with role Team Lead', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getOption("Team Lead").click();
    loginPage.getSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigation().find('li').should('have.length', 2);
    timeLoggingPage.getToday().contains(new Date().getDate());;
    timeLoggingPage.getLinkActive().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
    timeLoggingPage.getTab().contains('Time Entries');

   
})

it('Should be able to login with role Manager', function () {

    loginPage.visit()
    loginPage.getUserID().click({force:true});;
    loginPage.getUserOption("Asta Radžiuvienė").click();
    loginPage.getRoleForm().click({force:true});
    loginPage.getOption("Manager").click();
    loginPage.getSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigation().find('li').should('have.length', 5);
    timeLoggingPage.getToday().contains(new Date().getDate());
    timeLoggingPage.getLinkActive().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
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
    loginPage.getOption("Accountant").click();
    loginPage.getSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigation().find('li').should('have.length', 5);
    timeLoggingPage.getToday().contains(new Date().getDate());
    timeLoggingPage.getLinkActive().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
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
    loginPage.getOption("Admin").click()
    loginPage.getSubmit().click();

    timeLoggingPage.getUrl()
    timeLoggingPage.getPageTitle().contains('Timesheets')
    timeLoggingPage.getCalendar().should('be.visible')
    timeLoggingPage.getTitleForm().should('be.visible')
    timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
    timeLoggingPage.getMainNavigation().find('li').should('have.length', 6);
    timeLoggingPage.getToday().contains(new Date().getDate());
    timeLoggingPage.getLinkActive().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)');
    timeLoggingPage.getTab().contains('Time Entries');
    timeLoggingPage.getTab().contains('Invoices');
    timeLoggingPage.getTab().contains('Projects');
    timeLoggingPage.getTab().contains('Clients');
    timeLoggingPage.getTab().contains('Tasks');
})
})