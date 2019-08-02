import LoginPage from '../objects/loginPage';
import Common from '../objects/common';

const loginPage = new LoginPage();
const common = new Common();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible');
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        cy.wait(2000); // for reason js sometimes doesn't load my client
        common.visit();
        // loginPage.getSpecificUrl('/time-logging');
        common.getPageTitle().contains('Timesheets');
        common.getCalendar().should('be.visible');
        common.getPageTitle().should('be.visible');
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(2);
    })

    it('Should validate what date is selected as “Today” on Time Logging page', function () {
        common.getCalendarTodaysDate();
    })

    it('Should verify all user roles can log in and should see appropriate tabs - USER', function () {
    
        loginPage.visit();
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(1);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');      
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - TEAM LEAD', function () {
    
        loginPage.visit();
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(2);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');          
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - MANAGER', function () {
    
        loginPage.visit();
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(5);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');    
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - ACCOUNTANT', function () {
    
        loginPage.visit();
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(5);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - ADMIN', function () {
    
        loginPage.visit();
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(6);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
    })
    
})