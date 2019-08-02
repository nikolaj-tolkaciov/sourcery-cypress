class LoginPage {
    visit() {
        cy.visit('/');
    }
    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`);
    }
    getUserFieldSelection() {
        return cy.get('[id="loginForm.userId"]');
    }
    getUserRoleSelection() {
        return cy.get('[id="loginForm.role"]');
    }
    getPageTitleTimesheets() {
        return cy.get('.page__title');
    }
    getVisibleCalendar() {
        return cy.get('.calendar');
    }
    getTileFormVisible() {
        return cy.get('.tile.form');
    }
    getUserVisibleOnTop() {
        return cy.get('.user-info__title');
    }
    getNavigationBarCount() {
        return cy.get('.main-nav');
    }
    getTimeLoggingColorBlue() {
        return cy.get('.main-nav__link--active');
    }
 }
 export default LoginPage 