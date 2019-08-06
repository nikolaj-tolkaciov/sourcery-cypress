class Tasks {

    getCreateTaskButton() {
        return cy.get('.btn')
    }

    getNameFromTaskDetailsForm() {
        return cy.get('[id="taskDetailsForm.name"]')
    }

    getDescriptionFromTaskDetailsForm() {
        return cy.get('[id="taskDetailsForm.description"]')
    }

    visit() {
        return cy.visit('/tasks')
    }

    getBillToClientSelector() {
        return cy.get('[aria-selected="true"]')
    }
    
    getSelectionValueYes() {
        return cy.get('[aria-label="Yes"]')
    }

    getRateFromTaskDetailsForm() {
        return cy.get('[id="taskDetailsForm.rate"]')
    }

    getSaveButton() {
        return cy.get('[type="submit"]')
    }

    getSearchFieldInputField() {
        return cy.get('.field__text')
    }

    getFindTaskNameOnContent() {
        return cy.get(`[title="${taskName}"]`)
    }

    getFindTaskDescriptionOnContent() {
        return cy.get(`[title="${descriptionText}"]`)
    }
}

export default Tasks;