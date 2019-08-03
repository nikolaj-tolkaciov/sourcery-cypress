import PageComponents from "./pageComponents";

class CreateTaskPage extends PageComponents{
    createNewTask()
    {
        var date = Date.now();
        var name = 'Task_' + date;
        var description = 'Description_' + date;
        this.getElementById("taskDetailsForm.name").type(name)
        this.getElementById("taskDetailsForm.description").type(description)
        cy.get('[class="Select-value"]').click();
        cy.get(`[aria-label="${this.taskBillable}"]`).click()

        if(this.taskBillable === "Yes"){
            this.getElementById("taskDetailsForm.rate").clear().type(this.taskRate)
        }
        
        this.clickSubmit();

        return {name: name, description: description}
    }
}
export default CreateTaskPage