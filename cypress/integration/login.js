import LoginPage from '../objects/loginPage';
const loginPage = new LoginPage();

import TaskPage from '../objects/taskPage';
const taskPage = new TaskPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Check login as Admin and if the day is today', function () {

        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();

        loginPage.urlShouldInclude("/time-logging");
        loginPage.getPageTitle("Timesheets");
        loginPage.getCalendar().should('be.visible');
        loginPage.getTileForm().should('be.visible');
        loginPage.getUserInfoTitle("Edvinas Kveselys");
        loginPage.getNavigationLength().should('have.length', 6);

        loginPage.getTodaysDay();
    })

    it('Verify "User" can log in and should see appropriate tabs', function() {
        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();
        loginPage.getUserInfoTitle("Edvinas Kveselys");
        loginPage.getNavigationLength().should('have.length', 1);
        loginPage.getActiveNavLinkColor("rgb(64, 76, 237)");
        loginPage.getActiveNavLink("/time-logging");
    })

    it('Verify "Team Lead" can log in and should see appropriate tabs', function() {
        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();
        loginPage.getUserInfoTitle("Edvinas Kveselys");
        loginPage.getNavigationLength().should('have.length', 2);
        loginPage.getActiveNavLinkColor("rgb(64, 76, 237)");
        loginPage.getActiveNavLink("/time-logging");
    })

    it('Verify "Manager" can log in and should see appropriate tabs', function() {
        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();
        loginPage.getUserInfoTitle("Edvinas Kveselys");
        loginPage.getNavigationLength().should('have.length', 5);
        loginPage.getActiveNavLinkColor("rgb(64, 76, 237)");
        loginPage.getActiveNavLink("/time-logging");
    })

    it('Verify "Accountant" can log in and should see appropriate tabs', function() {
        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();
        loginPage.getUserInfoTitle("Edvinas Kveselys");
        loginPage.getNavigationLength().should('have.length', 5);
        loginPage.getActiveNavLinkColor("rgb(64, 76, 237)");
        loginPage.getActiveNavLink("/time-logging");
    })

    it('Verify "Admin" can log in and should see appropriate tabs', function() {
        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();
        loginPage.getUserInfoTitle("Edvinas Kveselys");
        loginPage.getNavigationLength().should('have.length', 6);
        loginPage.getActiveNavLinkColor("rgb(64, 76, 237)");
        loginPage.getActiveNavLink("/time-logging");
    })

    /*it('Admin creates new task', function() {
        loginPage.visit();
        loginPage.getLoginUserId().click({force:true});
        loginPage.getSpecificUserFromDropDown("Edvinas Kveselys").click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getSpecificRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();
        loginPage.getNavLink("Tasks").click();
        taskPage.createTaskButtonClick();
        taskPage.getTaskDetailsFormName().click().type('hello worlds');
        taskPage.getTaskDetailsFormDescription().click().type('hello worlds description');
        taskPage.getTaskBillableDropDown().click({ force: true });
        taskPage.getYesFromDropDown().click();
    })*/
})