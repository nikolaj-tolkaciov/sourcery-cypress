class TimeLoggingPage {

    urlIncludesCheck(textIncludes) {
        return cy.url().should('include', `${textIncludes}`);
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getLogHoursForm() {
        return cy.get('.tile.form');
    }

    getUserNameTitle() {
        return cy.get('.user-info__title');
    }

    checkNavigationPanelItemNumber() {
        return cy.get('.main-nav').find('li');
    }

    getCalendarDate() {
        return cy.get('.calendar__date');
    }

    checkSelectedNavPanelItemIsBlue() {
        return cy.get('.main-nav__link--active');
    }

    getLogOutButton() {
        
        return cy.get('[id="logout-button"]');
    }

    getNavigationPanelTasks() {
        return cy.get('.main-nav__link' + '[href="/tasks"]');
    }

    getNavigationPanelClients() {
        return cy.get('.main-nav__link' + '[href="/clients"]');
    }
}

export default TimeLoggingPage;