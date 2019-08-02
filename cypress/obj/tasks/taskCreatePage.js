class TaskCreatePage {
    getFormName() {
        return cy.get('[id="taskDetailsForm.name"]');
    }

    getFormDescription() {
        return cy.get('[id="taskDetailsForm.description"]');
    }

    getBillableDropdown() {
        return cy.get('label').contains('Bill to Client').next();
    }

    getBillableFromDropdown(billable) {
        return cy.get(`[aria-label="${billable}"]`);
    }

    getFormRate() {
        return cy.get('[id="taskDetailsForm.rate"]');
    }

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
}

export default TaskCreatePage;