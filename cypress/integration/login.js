import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import Common from '../objects/common';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
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
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        cy.wait(2000); // for reason js sometimes doesn't load my client
        timeLoggingPage.visit();
        // loginPage.getSpecificUrl('/time-logging');
        common.getPageTitle().contains('Timesheets');
        timeLoggingPage.getCalendar().should('be.visible');
        common.getPageTitle().should('be.visible');
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(2);
    })

    it('Should validate what date is selected as “Today” on Time Logging page', function () {
        timeLoggingPage.getCalendarTodaysDate();
    })

    it('Should verify all user roles can log in and should see appropriate tabs - USER', function () {
    
        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(1);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');      
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - TEAM LEAD', function () {
    
        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(2);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');          
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - MANAGER', function () {
    
        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(5);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');    
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - ACCOUNTANT', function () {
    
        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(5);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
    })
    
    it('Should verify all user roles can log in and should see appropriate tabs - ADMIN', function () {
    
        loginPage.visit();
        loginPage.getUserDropDown().click({force:true});
        loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        loginPage.getRoleDropDown().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');
        loginPage.getElementCountOfNavigationBar(6);
        loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
    })
    
})