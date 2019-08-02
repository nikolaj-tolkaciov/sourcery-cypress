class TimeLoggingPage {
    
    getTileForm(){
        return cy.get('.tile.form')
    }

    assertDisplayedTodaysDay(){
        var todayDate = new Date();
        cy.get('.calendar--today').find('.calendar__date').contains(todayDate.getDate());
    }
}
export default TimeLoggingPage