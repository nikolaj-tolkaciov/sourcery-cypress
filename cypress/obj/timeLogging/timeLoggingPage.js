class TimeLoggingPage {
    checkUrl() {
        cy.url().should('include', '/time-logging');
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getFormTile() {
        return cy.get('.tile.form');
    }

    getUserNameTitle() {
        return cy.get('.user-info__title');
    }

    getNavTabs() {
        return cy.get('.main-nav').find('li');
    }

    getActiveTab() {
        return cy.get('.main-nav__link--active');
    }

    getCalendarToday() {
        return cy.get('.calendar--today').find('.calendar__date');
    }
}

export default TimeLoggingPage;