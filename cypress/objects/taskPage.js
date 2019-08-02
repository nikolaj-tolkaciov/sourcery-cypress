class TaskPage {

    inputIntoASpecificField(fieldId, input) {
        cy.get(`[id="${fieldId}"]`).type(input);
    }

    generateRandomBillToClientSelection() {
        let num = Math.floor(Math.random()*2);
        if (num === 1)
            return 'Yes';
        else
            return 'No';
    }

    clickBillToClientDropDown() {
        cy.get('[class = Select-value]').click();
    }

    selectRandomBillToClientOption(selection) {
        cy.get(`[aria-label= "${selection}"]`).click();
    }

    checkIfBillToClientIsYes() {
        return cy.get('[class="Select has-value is-searchable Select--single"]').get('[taskDetailsForm.billable]').contains(true);
    }

    filterTasksByName(taskName) {
        cy.get('[class="field__text field__text--small"]').get('[type="text"]').first().type(taskName);
    }

    checkIfTaskListContains(taskName) {
        return cy.get('[class="ellipsis"]').get(`[title="${taskName}"]`);
    }
}

export default TaskPage;