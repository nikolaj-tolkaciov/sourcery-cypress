class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }

    clickSubmitButton() {
        cy.get('[type="submit"]').click();
    }

    clickSpecificUserFromDropDown(userName) {
        cy.get(`[aria-label="${userName}"]`).click();
    }

    clickSpecificRoleFromDropDown(roleName) {
        cy.get(`[aria-label="${roleName}"]`).click();
    }

    clickUserDropDown() {
        cy.get('[id="loginForm.userId"]').click({force:true});
    }

    clickRoleDropDown() {
        cy.get('[id="loginForm.role"]').click({force:true});
    }

    getTodayInCalendar() {
        return cy.get('.calendar--today').find('.calendar__date');
    }

    checkIfUrlIncludes(text) {
        cy.url().should('include', text);
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getMainNavigationTab() {
        return cy.get('.main-nav').find('li');
    }

    checkMainNavigationTabsCount(num) {
        this.getMainNavigationTab().should('have.length', num);
    }

    getUserInfoTitle() {
        return cy.get('.user-info__title');
    }

    checkIfUserTitleContains(text) {
        this.getUserInfoTitle().contains(`${text}`);
    }

    clickLogoutButton() {
        cy.get('[id="logout-button"]').click();
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getTileForm() {
        return cy.get('.tile.form');
    }

    getActiveNavigationTab() {
        return cy.get('.main-nav__link--active');
    }

    checkIfActiveTabIsThisColor(color) {
        this.getActiveNavigationTab().should('have.css', 'color').and('eq', color);
    }
}

export default LoginPage;