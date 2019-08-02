class LoginPage {
    visit(url) {
        cy.visit(url);
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getSpecificUserFromDropdown(userName) {
        return cy.get(`[aria-label="${userName}"]`);
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getTitleForm() {
        return cy.get('.tile.form');
    }

    getUserInfoTitle() {
        return cy.get('.user-info__title');
    }

    getMainNav() {
        return cy.get('.main-nav');
    }

    getCalendarToday() {
        return cy.get('.calendar--today');
    }
}

export default LoginPage