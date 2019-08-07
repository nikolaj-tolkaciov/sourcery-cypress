class TimeLog {

    urlIncludesCheck() {
        return cy.url().should('not.contain','create' );
    }

    includeTimeLog() {
        cy.url().should('include', '/time-logging');
    }
    getPageTitle() {
        return cy.get('.page__title')
    }
    getCalendar() {
        return cy.get('.calendar')
    }
    getTimeEntryForm() {
        return cy.get('.tile.form');
    }
    getUserTitle() {
        return cy.get('.user-info__title');
    }
    calendarToday() {
        return cy.get('.calendar--today');
    }
    getSelectedTab() {
        return cy.get('.main-nav__link--active');
    }
    getLogOutButton() {
        return cy.get('[id="logout-button"]');
    }

    getNavigationPanelTasks() {
        return cy.get('.main-nav__link' + '[href="/tasks"]');
    }
}
export default TimeLog