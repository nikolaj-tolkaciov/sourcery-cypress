class CreatTask {
    getTaskNameField() {
        return cy.get('[id="taskDetailsForm.name"]')
    }

    getDescriptionField() {
        return cy.get('[id="taskDetailsForm.description"]')
    }

    getBillToClientSelect() {
        return cy.get('.Select-value')
    }

    getBillToClientYesOption() {
        return cy.get('[id="react-select-2--option-0"]')
    }

    getHourlyRateField() {
        return cy.get('[id="taskDetailsForm.rate"]')
    }
}

export default CreatTask