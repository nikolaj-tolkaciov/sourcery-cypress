class CreateTask {
    getClickOnTaskBar() {
        return cy.get('[href="/tasks"]');
    }
    getClickCreatTaskButton() {
        return cy.get('.btn');
    }
    getFillTaskName() {
        return cy.get('[id="taskDetailsForm.name"]');
    }
    getFillTaskDescription() {
        return cy.get(`[id="taskDetailsForm.description"]`);
    }
    getSelectDropDownButton() {
        return cy.get('[id="react-select-4--value-item"]');
    }
    getClickYes() {
        return cy.get('[aria-label="Yes"]');
    }
    getClearField() {
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getFillDetailsForm() {
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getClickSaveButton() {
        return cy.get('[type="submit"]');
    }
    getFilterCreatedTask() {
        return cy.get('.field__text--small');
    }
    getColumnNameEqualTask() {
        return cy.get('[col-id="name"]');
    }
    getColumnDescribtion() {
        return cy.get('[col-id="description"]');
    }
}
export default CreateTask