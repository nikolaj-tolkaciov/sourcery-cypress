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

    getPageTitle() {
        return cy.get('.page__title')
    }
    
    getUserTitle() {
        return cy.get('.user-info__title')
    }
}

export default TimeLoggingPage