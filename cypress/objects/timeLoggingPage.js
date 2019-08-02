class TimeLoggingPage {

    assertPageTimeLogginDisplayed() {
        return cy.url().should('include', '/time-logging');
    }

    getTodayCalendarCell() {
        return cy.get('.calendar--today');
    }

    getDayNumberOfCalendarCell() {
        return '.calendar__date';
    }
}

export default TimeLoggingPage;