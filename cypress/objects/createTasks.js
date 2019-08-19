class CreateTasks {

    getNameField() {
        return cy.get(`[id="taskDetailsForm.name"]`)
    }

    getDescriptionField() {
        return cy.get(`[id="taskDetailsForm.description"]`)
    }

    getRateField() {
        return cy.get(`[id="taskDetailsForm.rate"]`)
    }

    getBillableField() {
        return cy.get('[class="Select has-value is-searchable Select--single"]')
    }
}

export default CreateTasks;