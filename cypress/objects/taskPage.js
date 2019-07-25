class Tasks {
    getTasks() {
        return cy.get('[href="/tasks"]');
    }
    getCreateTaskButton() {
        return cy.get('.btn');
    }
    getFormName() {
        return cy.get('[id="taskDetailsForm.name"]');
    }
    getFieldTextArea() {
        return cy.get('.field__textarea');
    }
    getBillToClient() {
        return cy.get('.Select-value-label');
    }
    getBillToClientLabel(value) {
        return cy.get(`[aria-label=${value}]`);
    }
    getFormRate() {
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
    getUrl() {
        return cy.url();
    }
    getSmallFieldText() {
        return cy.get('.field__text--small');
    }
    getTitleName(name) {
        return cy.get(`[title="${name}"]`);
    }
}
export default Tasks;
