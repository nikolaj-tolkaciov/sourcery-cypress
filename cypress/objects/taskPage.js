class Tasks {
    getTasks() {
        return cy.get('[href="/tasks"]');
    }
    getButton() {
        return cy.get('.btn');
    }
    getFormName() {
        return cy.get('[id="taskDetailsForm.name"]');
    }
    getFieldTextArea() {
        return cy.get('.field__textarea');
    }
    getValue() {
        return cy.get('.Select-value-label');
    }
    getValueLabel(value) {
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
