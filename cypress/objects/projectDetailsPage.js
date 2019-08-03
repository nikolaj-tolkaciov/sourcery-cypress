import PageComponents from "./pageComponents";

class NewProjectPage extends PageComponents{
    createNewProject()
    {
        var date = Date.now();
        var project = 'Project_' + date
        this.getElementById("projectDetailsForm.name").type(project)
        this.getElementById("react-select-2--value").contains('Select...').click();
        cy.get(`[aria-label="${this.projectClient}"]`).click()
        this.getElementById("react-select-3--value").contains('Select...').click();
        cy.get(`[aria-label="${this.employeeName} (${this.employeeEmail})"]`).click();

        this.addElementFromModal("Tasks", this.taskName)
        this.addElementFromModal("Members", this.employeeName)

        this.clickSubmit()
        return project
    }

    addElementFromModal(itemType, itemToAdd){
        cy.get('[class="btn btn__secondary"]').contains(`Add ${itemType}`).click();
        cy.get('[placeholder="Search"]').click().type(`${itemToAdd}{enter}`)
        this.getElementByClass("field__checkbox ").click();
        cy.get('[class="btn"]').contains("Add").click()
    }
}
export default NewProjectPage