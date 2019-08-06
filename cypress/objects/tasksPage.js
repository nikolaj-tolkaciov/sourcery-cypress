class TasksPage {


    getTaskNameInputField() {
        return cy.get('[type="text"]').eq(0);
    }

    getTaskDescriptionInputField() {
        return cy.get('[type="text"]').eq(1);
    }

    checkIfFilteredTaskIsVisible(taskName) {
        return cy.get('.ellipsis' + `[title=${taskName}]`);
    }

    getCreateTaskButton() {
        return cy.get('[type="button"]').contains('Create Task');
    }

    getCreateTaskNameInputField() {
        return cy.get('[id="taskDetailsForm.name"]');
    }

    getCreateTaskDescriptionInputField() {
        return cy.get('[id="taskDetailsForm.description"]');
    }

    getBillableDropdown() {
        return cy.get('.Select-value');
    }

    getYesFromBillableDropdown() {
        return cy.get('[role="option"]').contains("Yes");
    }

    getBillableInputField() {
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    
    getSaveButton() {
        return cy.get('[type=submit]').contains('Save');
    }

}

export default TasksPage