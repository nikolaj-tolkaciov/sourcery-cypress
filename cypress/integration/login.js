import LoginPage from '../objects/loginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        loginPage.getSpecificUrl('/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getCalendar().should('be.visible');
        loginPage.getPageTitle().should('be.visible');
        loginPage.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(2);

    })

    it('Should validate what date is selected as “Today” on Time Logging page', function () {
        loginPage.getCalendarTodaysDate();
    })

})