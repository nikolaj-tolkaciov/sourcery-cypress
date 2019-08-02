class task {
    visitTasks() {
        cy.visit('/tasks');
    }
    
    getCreateTaskButton() {
        return cy.get('[type="button"]');
    }

    getTaskName() {
        return 'Task' + String(Math.random()*10000);
    }

    getTaskNameForm() {
        return cy.get('[id = "taskDetailsForm.name"]');
    }

    getTaskDescriptionForm() {
        return cy.get('[id = "taskDetailsForm.description"]');
    }

    getTaskBillDrop() {
        return cy.get('label').contains('Bill to Client');
    }

    inputTaskBillOption(value) {
        return cy.get(`[aria-label="${value}"]`)
    }
    
    getTaskRateForm() {
        return cy.get('[id = "taskDetailsForm.rate"]');
    }

    getTaskSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getTaskNameFieldForFiltering() {
        return cy.get('[class = "field--filter"]').first().find('input');
    }

    getViewPortWrapper() {
       return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport')
    }
}

export default task;