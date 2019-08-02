class TaskPage {
    visit() {
        cy.visit("/tasks");
    }
    getCreateTaskButton() {
        return cy.get('[type="button"]').contains('Create Task');
    }
    getTaskNameField() {
        return cy.get('[id="taskDetailsForm.name"]');
    }
    getTaskDescriptionField() {
        return cy.get('[id="taskDetailsForm.description"]');
    }
    getBillToClientDropdown() {
        return cy.get('.Select-value');
    }
    getBillToClientOption() {
        return cy.get('[aria-label="Yes"]');
    }
    getHourlyRateField() {
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
    assertUrl() {
        cy.url().should('not.contain','/create');
    }
    getFilterField() {
        return cy.get(".field__text.field__text--small").eq(0);
    }
    getTaskItem() {
        return cy.get(".ag-body-container");
    }
}

export default TaskPage;