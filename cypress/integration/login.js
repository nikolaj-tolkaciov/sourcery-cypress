import LoginPage from '../objects/LoginPage';
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

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown("User").click();
        loginPage.getSubmitButton().click();
        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        let today = new Date();
        loginPage.getCalendarDayToday().find('.calendar__date').contains(today.getDate());
        loginPage.getFormTitle().should('be.visible');
        common.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 1);        
        loginPage.getActiveTabLink().should('have.css','color', 'rgb(64, 76, 237)');
    })

     it('Should be able to login with role Team Lead', function () {
        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();
        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        loginPage.getFormTitle().should('be.visible');
        common.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 2);
        loginPage.getActiveTabLink().should('have.css','color', 'rgb(64, 76, 237)');       
    })

    it('Should be able to login with role Manager', function () {
        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();
        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        loginPage.getFormTitle().should('be.visible');
        common.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 5);
        loginPage.getActiveTabLink().should('have.css','color', 'rgb(64, 76, 237)');       
    })

    it('Should be able to login with role Accountant', function () {
        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();
        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        loginPage.getFormTitle().should('be.visible');
        common.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 5);
        loginPage.getActiveTabLink().should('have.css','color', 'rgb(64, 76, 237)');       
    })
    
    it('Should be able to login with role Admin', function () {
        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();
        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        loginPage.getFormTitle().should('be.visible');
        common.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 6);
        loginPage.getActiveTabLink().should('have.css','color', 'rgb(64, 76, 237)');       
    })
 })