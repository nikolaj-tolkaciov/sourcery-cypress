class TimeLoggingPage {

    assertPageTimeLogginDisplayed() {
        return cy.url().should('include', '/time-logging');
    }

    getUserProfileButtonSelector() {
        return cy.get('.user-info__title');
    }

    getNavListSelector() {
        return cy.get('.main-nav');
    }

    getActiveNavMenuOptionSelector() {
        return cy.get('.main-nav__link--active');
    }

    getTodayCalendarCell() {
        return cy.get('.calendar--today');
    }

    getDayNumberOfCalendarCellSelector() {
        return '.calendar__date';
    }
}

export default TimeLoggingPage;