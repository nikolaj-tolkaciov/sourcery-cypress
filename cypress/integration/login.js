import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();

describe('Sourcebooks login', function() {
  it('Should display validation for empty user after attempted loggin', function() {
    loginPage.visit();
    loginPage.getUserValidationIndicator().should('not.visible');
    loginPage.getSubmitButton().click();
    loginPage.getUserValidationIndicator().should('be.visible');
  });

  it('Should be able to login with role User', function() {
    cy.loginAs('Admin');
    loginPage.visit();
    timeLoggingPage.getUrl().should('include', '/time-logging');
    timeLoggingPage.getPageTitle().contains('Timesheets');
    timeLoggingPage.getCalendar().should('be.visible');
    timeLoggingPage.getTileForm().should('be.visible');
    timeLoggingPage.getUserName().contains('Mindaugas Maceika');
    timeLoggingPage
      .getNavigationBar()
      .find('li')
      .should('have.length', 6);
  });

  it('Should validate what date is selected as “Today” on Time Logging page', function() {
    cy.loginAs('Admin');
    loginPage.visit();
    timeLoggingPage.getUrl().should('include', '/time-logging');
    timeLoggingPage.getSelectedDateToday().contains(new Date().getDate());
  });

  const roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
  const tabs = [1, 2, 5, 5, 6];

  roles.forEach(function(item, i) {
    it(`Verify role ${item}, if it can log in and see appropriate tabs`, function() {
      cy.loginAs(item);
      loginPage.visit();

      timeLoggingPage.getUrl().should('include', '/time-logging');
      timeLoggingPage.getPageTitle().contains('Timesheets');
      timeLoggingPage.getCalendar().should('be.visible');
      timeLoggingPage.getUserName().contains('Mindaugas Maceika');
      timeLoggingPage
        .getNavigationBar()
        .find('li')
        .should('have.length', tabs[i]);
      timeLoggingPage
        .getActiveTab()
        .should('have.css', 'color')
        .and('eq', 'rgb(64, 76, 237)');
    });
  });
});
