class TaskPage {

    getCreateTasksButton() {
        return cy.get('[type="button"]').contains('Create Task')
    }

    getTaskNameField() {
        return cy.get('[id="taskDetailsForm.name"]')
    }

    getDescriptionField() {
        return cy.get('[id="taskDetailsForm.description"]')
    }

    getBillToClientDropdownAndSelectYes() {
        return cy.get('[class="Select has-value is-searchable Select--single"]').click().contains('Yes')
    }

    getHourlyRateField() {
        return cy.get('[id="taskDetailsForm.rate"]')
    }

    getTaskNameSearchField() {
        return cy.get('[class="field__text field__text--small"]').first()
    }

    getCreatedTaskName() {
        return cy.get('[class="ellipsis"]')
    }

}
export default TaskPage