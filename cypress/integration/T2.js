import LoginPage from '../objects/LoginPage';
import TimeLoggin from '../objects/TimeLoggin';
const timeLoggin = new TimeLoggin();
const loginPage = new LoginPage();

describe('Sourcebooks login', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with user Jaunius_Mykolaitis to role Admin', function () {

        loginPage.visit();
        loginPage.getUserIDLogin().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getLoginFormRole().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();

        timeLoggin.urlIncludeTimeLogging().should('include', '/time-logging');
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        timeLoggin.getUserInfoFromTitle().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 6);

        timeLoggin.getMainNavActiveLinkColor();
        timeLoggin.getTodaysDay();
    
    })

    it('Should be able to login with user Jaunius_Mykolaitis to role User', function () {

        loginPage.visit();
        loginPage.getUserIDLogin().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getLoginFormRole().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();

        timeLoggin.urlIncludeTimeLogging().should('include', '/time-logging');
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        timeLoggin.getUserInfoFromTitle().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 1);

        timeLoggin.getMainNavActiveLinkColor();
        timeLoggin.getTodaysDay();
    
    })
    it('Should be able to login with user Jaunius_Mykolaitis to role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserIDLogin().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getLoginFormRole().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        timeLoggin.urlIncludeTimeLogging().should('include', '/time-logging');
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        timeLoggin.getUserInfoFromTitle().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 2);

        timeLoggin.getMainNavActiveLinkColor();
        timeLoggin.getTodaysDay();
    
    })
    it('Should be able to login with user Jaunius_Mykolaitis to role Manager', function () {

        loginPage.visit();
        loginPage.getUserIDLogin().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getLoginFormRole().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();

        timeLoggin.urlIncludeTimeLogging().should('include', '/time-logging');
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        timeLoggin.getUserInfoFromTitle().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 5);

        timeLoggin.getMainNavActiveLinkColor();
        timeLoggin.getTodaysDay();
    
    })
    it('Should be able to login with user Jaunius_Mykolaitis to role Accountant', function () {

        loginPage.visit();
        loginPage.getUserIDLogin().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getLoginFormRole().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();

        timeLoggin.urlIncludeTimeLogging().should('include', '/time-logging');
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        timeLoggin.getUserInfoFromTitle().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 5);

        timeLoggin.getMainNavActiveLinkColor();
        timeLoggin.getTodaysDay();
    
    })
})