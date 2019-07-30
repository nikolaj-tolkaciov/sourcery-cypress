import LoginPage from '../objects/loginPage';   
import TimeLogging from '../objects/timeLogging';

describe('Sourcebooks login', function() {
    it('Should display validation for empty user after attemted login', function () {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.getValidationError().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getValidationError().should('be.visible');
    })
    const roles = [['User', 1], ['Team Lead', 2], ['Manager', 5], ['Accountant',5], ['Admin',6]];
    for(let x = 0; x < 5; x++){
        it(roles[x][0] + ' can log in', function () {
            const loginPage = new LoginPage();
            loginPage.visit();
            loginPage.getUserID().click({force:true});
            loginPage.getUserOption("Berta Rėja Butvilaitė").click();
            loginPage.getRole().click({force:true});
            loginPage.getRoleOption(roles[x][0]).click();
            loginPage.getSubmitButton().click();

            const timeLogging = new TimeLogging();
            timeLogging.getCalendar().should('be.visible');
            timeLogging.getPageTitle().contains('Timesheets');
            timeLogging.getTileForm().should('be.visible');
            timeLogging.getUserInfo().contains('Berta Reja Butvilaite');
            timeLogging.getMainNav().should('have.length', roles[x][1]);
        })
    }
}) 