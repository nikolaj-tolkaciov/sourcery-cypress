class TimeLogging {
    getTodaysDate() {
        return cy.get('.calendar--today').find('.calendar__date');
    }        

    getCalendar() {
        return cy.get('.calendar');
    }

    getTileForm() {
        return cy.get('.tile.form');
    }   
}

export default TimeLogging;