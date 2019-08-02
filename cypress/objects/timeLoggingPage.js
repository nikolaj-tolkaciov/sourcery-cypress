class TimeLoggingPage {
    
    getTileForm(){
        return cy.get('.tile.form')
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    assertDisplayedTodaysDay(){
        var todayDate = new Date();
        cy.get('.calendar--today').find('.calendar__date').contains(todayDate.getDate());
    }
}
export default TimeLoggingPage