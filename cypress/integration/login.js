import LoginPage from '../obj/loginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role Team Lead', function () {
        loginPage.visit();
        loginPage.openUpUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Valentinas Kasteckis").click();
        loginPage.openUpRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        loginPage.checkIfWeAreInSpecificURL('/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.checkIfInfoTitleIsSpecific("Valentinas Kasteckis");
        loginPage.checkNavigationMenuLength(2);
    })

    it('Date should match todays date', function() {
        
        loginPage.checkIfTodaysDateIsCorrect();
    })

    it('I can login as a User', function(){
        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "User");
        loginPage.checkIfWeAreInSpecificURL('/time-logging');
        loginPage.getPageTitle().contains('Timesheets')
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.checkIfInfoTitleIsSpecific("Valentinas Kasteckis");
        loginPage.checkNavigationMenuLength(1);
        loginPage.checkSelectedButtonColor();
    })   

    it('I can login as a Team Lead', function(){
        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "Team Lead");
        loginPage.checkIfWeAreInSpecificURL('/time-logging');
        loginPage.getPageTitle().contains('Timesheets')
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.checkIfInfoTitleIsSpecific("Valentinas Kasteckis");
        loginPage.checkNavigationMenuLength(2);
        loginPage.checkSelectedButtonColor();
    })

    it('I can login as a Manager', function(){
        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "Manager");
        loginPage.checkIfWeAreInSpecificURL('/time-logging');
        loginPage.getPageTitle().contains('Timesheets')
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.checkIfInfoTitleIsSpecific("Valentinas Kasteckis");
        loginPage.checkNavigationMenuLength(5);
        loginPage.checkSelectedButtonColor();
    })

    it('I can login as a Accountant', function(){
        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "Accountant");
        loginPage.checkIfWeAreInSpecificURL('/time-logging');
        loginPage.getPageTitle().contains('Timesheets')
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.checkIfInfoTitleIsSpecific("Valentinas Kasteckis");
        loginPage.checkNavigationMenuLength(5);
        loginPage.checkSelectedButtonColor();
    })

    it('I can login as a Admin', function(){
        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "Admin");
        loginPage.checkIfWeAreInSpecificURL('/time-logging');
        loginPage.getPageTitle().contains('Timesheets')
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.checkIfInfoTitleIsSpecific("Valentinas Kasteckis");
        loginPage.checkNavigationMenuLength(6);
        loginPage.checkSelectedButtonColor();
    })
})