class TaskPage {

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

    selectSpecificBillToClientOption(selection) {
        cy.get(`[aria-label= "${selection}"]`).click();
    }

    visit() {
        cy.visit('/Tasks');
    }

    inputTaskName(name) {
        cy.get(`[name ="taskDetailsForm.name"]`).type(name);
    }

    inputTaskDescription(description) {
        cy.get(`[name = "taskDetailsForm.description"]`).type(description);
    }

    inputTaskRate(rate) {
        cy.get(`[name="taskDetailsForm.rate"]`).type(rate);
    }

    filterBillableTasksByText(text) {
        cy.get('[class="field__select field__select--small"]').first().select(text);
    }
}

export default TaskPage;