import LoginPage from '../objects/loginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    beforeEach(function() {

        cy.loginAs('User');
        loginPage.visit();
    })

    /*
    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })*/

    it('Should be able to login with role User', function () {

        /*loginPage.visit();
        loginPage.getElementById("loginForm.userId").click({force:true});
        loginPage.getSpecificUserFromDropdown("Demo User").click();
        loginPage.getElementById("loginForm.role").click({force:true});
        loginPage.getSpecificUserFromDropdown("User").click();
        loginPage.getSubmitButton().click();*/

        cy.url().should('include', '/time-logging');
        loginPage.getElementByClass('page__title').contains('Timesheets');
        loginPage.getElementByClass("calendar").should('be.visible');
        loginPage.getElementByClass("tile.form").should('be.visible');
        loginPage.getElementByClass("user-info__title").contains('Demo User');
        loginPage.getElementByClass("main-nav").should('have.length', 1);
    })

    it('Should validate todays date', function () {

        loginPage.getElementByClass("calendar--today").find('span').contains(new Date().getDate());
    })
})