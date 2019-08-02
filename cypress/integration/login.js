import LoginPage from '../objects/LoginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
    
        loginPage.visit();

        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible');
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown('User').click();
        loginPage.getSubmitButton().click();

        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        loginPage.getFormTitle().should('be.visible');
        loginPage.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 1);
    })
})