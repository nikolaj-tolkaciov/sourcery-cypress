import PageComponents from "./pageComponents";

class TimeEntriesPage extends PageComponents{
    visit(){
        cy.visit('/time-entries');
    }
    
    filterTimeEntries(){
        var date = new Date();
        this.getElementByClass("field__text").eq(0).click()
        this.selectItemFromModal("Some unique project name")
        this.getElementByClass("field__text").eq(1).click()
        this.selectItemFromModal("Jelena")
        //select person
        //this.getElementById("timeEntriesForm.dateFrom").type(setDate(date.getDate() + 7))
    }

    assertFilteredDataIsCorrect(){

    }

    selectItemFromModal(item){
        cy.get('[placeholder="Search"]').click().type(`${item}{enter}`)
        this.getElementByClass("field__checkbox ").click();
        cy.get('[class="btn"]').contains("Save").click()
    }
}
export default TimeEntriesPage