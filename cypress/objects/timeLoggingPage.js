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
        cy.get(`[aria-label="${this.projectName}"]`).click();
        this.clickInputField("react-select-3--value")
        cy.get(`[aria-label="${this.taskName}"]`).click();
        this.getElementById("timeLoggingForm.notes").click().type(description);
        this.getElementById("timeLoggingForm.hours").click().type(this.taskDuration);
        this.clickSubmit();

        return description
    }

    assertTimeEntrySaved(description){
        cy.get(`[title="${description}"]`).should('be.visible')
        this.getElementByClass("time-list__hours").eq(-1).contains("0.1")
    }
}
export default TimeLoggingPage