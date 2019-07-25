import LoginPage from '../objects/loginPage';   //.. - objects up
import TimeLogging from '../objects/timeLogging';

describe('Sourcebooks login', function() {
    it('Should display validation for empty user after attemted login', function () {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.getValidationError().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getValidationError().should('be.visible');
    })
    it('Should be able to login with role User', function () {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserOption("Berta Rėja Butvilaitė").click();
        loginPage.getRole().click({force:true});
        loginPage.getRoleOption("User").click();
        loginPage.getSubmitButton().click();
        const timeLogging = new TimeLogging();
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getTileForm().should('be.visible');
        timeLogging.getUserInfo().contains('Berta Reja Butvilaite');
        timeLogging.getMainNav().should('have.length', 1);
    })
}) 

