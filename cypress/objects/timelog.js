class TimeLog {

    includer() {
        cy.url().should('include', '/time-logging');
    }
    pageTitle() {
        return cy.get('.page__title')
    }
    calendarv() {
        return cy.get('.calendar')
    }
    getTimeEntryForm() {
        return cy.get('.tile.form');
    }
    getUserTitle() {
        return cy.get('.user-info__title');
    }
    getNavigationTabs() {
        return cy.get('.main-nav').find('li');
    }
    calendarToday() {
        return cy.get('.calendar--today');
    }
    getSelectedTab() {
        return cy.get('.main-nav__link--active');
    }
}
export default TimeLog