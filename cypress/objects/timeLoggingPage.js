import PageComponents from "./pageComponents";

class TimeLoggingPage extends PageComponents{
    visit(){
        cy.visit('/time-logging');
    }

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

    logTimeEntry(){
        var description = Date.now();
        cy.get('.calendar--today').click();
        this.clickInputField("react-select-2--value")
        cy.get('[aria-label="Some unique project name"]').click();
        this.clickInputField("react-select-3--value")
        cy.get('[aria-label="My billable task"]').click();
        this.getElementById("timeLoggingForm.notes").click().type(description);
        this.getElementById("timeLoggingForm.hours").click().type("1");
        this.clickSubmit();

        return description
    }

    assertTimeEntrySaved(description){
        cy.get(`[title="${description}"]`)
        this.getElementByClass("time-list__hours").eq(-1).contains("1.00")
    }
}
export default TimeLoggingPage