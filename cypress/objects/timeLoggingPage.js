class TimeLoggingPage{
    getCalendar(){
        return cy.get('.calendar')
    }

    getTileForm(){
        return cy.get('.tile.form')
    }

    validateTodaysDay(){
        cy.get('.calendar__date').contains(new Date().getDate())
    }

}

export default TimeLoggingPage