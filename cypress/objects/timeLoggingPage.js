class TimeLoggingPage {
    visit() {
        cy.visit('/time-logging'); 
    }

    getCalendar() {
        return cy.get('.calendar')
    }

    getCalendarTodaysDate() {
        return cy.get('.calendar--selected').find('span').contains(new Date().getDate())
    }
}

export default TimeLoggingPage