class TimeLog {

    urlIncludesCheck(textIncludes) {
        return cy.url().should('include', `${textIncludes}`);
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
    getNavigationTabs() {
        return cy.get('.main-nav').find('li');
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