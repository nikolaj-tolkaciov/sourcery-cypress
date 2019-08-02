class CreateTasks {

    getField(fieldName) {
        return cy.get(`[id="taskDetailsForm.${fieldName}"]`)
    }

    getBillableField() {
        return cy.get('[class="Select has-value is-searchable Select--single"]')
    }
}

export default CreateTasks;