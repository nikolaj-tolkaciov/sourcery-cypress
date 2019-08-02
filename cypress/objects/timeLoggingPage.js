class TimeLoggingPage {
    assertUrl(url) {
        cy.url().should('include', url)
    }
    getPageTitle() {
        return cy.get('.page__title');
    }
    getCalendarSelector() {
        return cy.get('.calendar');
    }
    getTileForm() {
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
    getActiveMainNav() {
        return cy.get('.main-nav__link--active');
    }

}

export default TimeLoggingPage;