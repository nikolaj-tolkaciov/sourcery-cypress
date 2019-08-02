import LoginPage from '../objects/LoginPage';
import TimeLoggin from '../objects/TimeLoggin';
import Common from '../objects/Common';
const common = new Common();
const timeLoggin = new TimeLoggin();
const loginPage = new LoginPage();

describe('Sourcebooks login', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with user Jaunius Mykolaitis to role Admin', function () {

        loginPage.visit();
        loginPage.getUserDropdown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getRoleDropdown().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();

        timeLoggin.validateUrl();
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        common.getUserName().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 6);

        timeLoggin.getMainNavActiveLinkColor().should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        timeLoggin.getTodaysDay().find('span').contains(new Date().getDate());
    
    })

    it('Should be able to login with user Jaunius Mykolaitis to role User', function () {

        loginPage.visit();
        loginPage.getUserDropdown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getRoleDropdown().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();

        timeLoggin.validateUrl();
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        common.getUserName().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 1);

        timeLoggin.getMainNavActiveLinkColor().should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        timeLoggin.getTodaysDay().find('span').contains(new Date().getDate());
    
    })
    it('Should be able to login with user Jaunius Mykolaitis to role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserDropdown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getRoleDropdown().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        timeLoggin.validateUrl();
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        common.getUserName().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 2);

        timeLoggin.getMainNavActiveLinkColor().should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        timeLoggin.getTodaysDay().find('span').contains(new Date().getDate());
    
    })
    it('Should be able to login with user Jaunius Mykolaitis to role Manager', function () {

        loginPage.visit();
        loginPage.getUserDropdown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getRoleDropdown().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();

        timeLoggin.validateUrl();
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        common.getUserName().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 5);

        timeLoggin.getMainNavActiveLinkColor().should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        timeLoggin.getTodaysDay().find('span').contains(new Date().getDate());
    
    })
    it('Should be able to login with user Jaunius Mykolaitis to role Accountant', function () {

        loginPage.visit();
        loginPage.getUserDropdown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Jaunius Mykolaitis").click();
        loginPage.getRoleDropdown().click({force:true});
        loginPage.getSpecificUserRoleFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();

        timeLoggin.validateUrl();
        timeLoggin.getPageTitle().contains('Timesheets')
        timeLoggin.getCalendar().should('be.visible')
        timeLoggin.getTimeTile().should('be.visible')
        common.getUserName().contains('Jaunius Mykolaitis');
        timeLoggin.getMainNavWithSpecificLength().should('have.length', 5);

        timeLoggin.getMainNavActiveLinkColor().should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        timeLoggin.getTodaysDay().find('span').contains(new Date().getDate());
    
    })
})