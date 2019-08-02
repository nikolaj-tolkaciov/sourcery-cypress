import LoginPage from '../objects/loginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    beforeEach(function() {

        cy.loginAs('User');
        loginPage.visit();
    })

    /*it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })*/

    it('Should be able to login with role User', function () {

        cy.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets')
        loginPage.getCalendar().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.getUserInfoTitle().contains('Saulė Raudytė');
        loginPage.getMainNav().find('li').should('have.length', 1);
    })

    it('Should validate todays date', function () {

        loginPage.getCalendarToday().find('span').contains(new Date().getDate());
    })
})