import PageComponents from "./pageComponents";

class TimeEntriesPage extends PageComponents{
    visit(){
        cy.visit('/time-entries');
    }
    
    filterTimeEntries(){
        var date = new Date();
        var options = { year: "numeric", month: "2-digit", day: "2-digit" };
        this.getElementByClass("field__text").eq(0).click()
        this.selectItemFromModal("Some unique project name")
        this.getElementByClass("field__text").eq(1).click()
        this.selectItemFromModal("Jelena")
        this.getElementById("timeEntriesForm.dateFrom").clear().type(date.toLocaleDateString("en-US", options))
        this.getElementById("timeEntriesForm.dateTo").clear().type(date.toLocaleDateString("en-US", options))
        this.clickInputField("timeEntriesForm.taskId")
        cy.get("[aria-label='My billable task']").click()
        this.getElementByClass("btn btn--big").contains("Filter").click()
    }

    assertNewEntryFound(description){
        cy.get('[row-index="0"]').find('[col-id="projectName"]').contains("Some unique project name")
        cy.get('[row-index="0"]').find('[col-id="date"]').contains(new Date().toISOString().slice(0,10))
        cy.get('[row-index="0"]').find('[col-id="employeeName"]').contains("Cernyšova, Jelena")
        cy.get('[row-index="0"]').find('[col-id="taskName"]').contains("My billable task")
        cy.get('[row-index="0"]').find('[col-id="hours"]').contains("0.1")
        cy.get('[row-index="0"]').find('[col-id="notes"]').contains(description)
    }

    selectItemFromModal(item){
        cy.get('[placeholder="Search"]').click().type(`${item}{enter}`)
        this.getElementByClass("field__checkbox ").click();
        cy.get('[class="btn"]').contains("Save").click()
    }
}
export default TimeEntriesPage