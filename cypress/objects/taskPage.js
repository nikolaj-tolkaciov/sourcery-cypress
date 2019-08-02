class TaskPage{
    createTaskButtonClick(){
        cy.contains('Create Task').click()
    }

    getTaskDetailsFormName(){
        return cy.get('[id="taskDetailsForm.name"]')
    }

    getTaskDetailsFormDescription(){
        return cy.get('[id="taskDetailsForm.description"]')
    }

    getTaskBillableDropDown(){
        return cy.get('[aria-selected="true"]')
    }

    getYesFromDropDown(){
        return cy.get('[aria-label="Yes"]')
    }

    getTaskDetailsFormRate(){
        return cy.get('[id="taskDetailsForm.rate"]')
    }

    getTaskNameField(){
        return cy.get('[class="field__text field__text--small"]').first()
    }

    validateTaskIsFiltered(taskName){
        return cy.get(`[title="${taskName}"]`)
    }

}

export default TaskPage;