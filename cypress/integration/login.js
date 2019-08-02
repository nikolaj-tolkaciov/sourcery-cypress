import LoginPage from '../objects/loginPage';
const loginPage = new LoginPage();

import Common from '../objects/common';
const common = new Common();

import TimeLoggingPage from '../objects/timeLoggingPage';
const timeLoggingPage = new TimeLoggingPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        common.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        common.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Check login as Admin and check if the day is today', function () {

        common.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Admin").click();
        common.getSubmitButton().click();

        common.urlShouldInclude("/time-logging");
        common.getPageTitle("Timesheets");
        timeLoggingPage.getCalendar().should('be.visible');
        timeLoggingPage.getTileForm().should('be.visible');
        common.getUserInfoTitle("Edvinas Kveselys");
        common.getNavigationLength().should('have.length', 6);

        timeLoggingPage.validateTodaysDay();
    })

    it('Verify "User" can log in and should see appropriate tabs', function() {
        common.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("User").click();
        common.getSubmitButton().click();
        common.getUserInfoTitle("Edvinas Kveselys");
        common.getNavigationLength().should('have.length', 1);
        common.validateActiveNavLinkColor("rgb(64, 76, 237)");
        common.validateActiveNavLink("/time-logging");
    })

    it('Verify "Team Lead" can log in and should see appropriate tabs', function() {
        common.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        common.getSubmitButton().click();
        common.getUserInfoTitle("Edvinas Kveselys");
        common.getNavigationLength().should('have.length', 2);
        common.validateActiveNavLinkColor("rgb(64, 76, 237)");
        common.validateActiveNavLink("/time-logging");
    })

    it('Verify "Manager" can log in and should see appropriate tabs', function() {
        common.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Manager").click();
        common.getSubmitButton().click();
        common.getUserInfoTitle("Edvinas Kveselys");
        common.getNavigationLength().should('have.length', 5);
        common.validateActiveNavLinkColor("rgb(64, 76, 237)");
        common.validateActiveNavLink("/time-logging");
    })

    it('Verify "Accountant" can log in and should see appropriate tabs', function() {
        common.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Accountant").click();
        common.getSubmitButton().click();
        common.getUserInfoTitle("Edvinas Kveselys");
        common.getNavigationLength().should('have.length', 5);
        common.validateActiveNavLinkColor("rgb(64, 76, 237)");
        common.validateActiveNavLink("/time-logging");
    })

    it('Verify "Admin" can log in and should see appropriate tabs', function() {
        common.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Admin").click();
        common.getSubmitButton().click();
        common.getUserInfoTitle("Edvinas Kveselys");
        common.getNavigationLength().should('have.length', 6);
        common.validateActiveNavLinkColor("rgb(64, 76, 237)");
        common.validateActiveNavLink("/time-logging");
    })

})