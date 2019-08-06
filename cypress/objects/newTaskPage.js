class NewTaskPage {
    visit() {
        cy.visit('/tasks');
    }

    wait() {
        cy.wait(1000);
    }

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getTaskDetailsFormElement(element) {
        return cy.get(`[id="taskDetailsForm.${element}"]`)
    }

    getButton() {
        return cy.get('.btn');
    }

    getFieldText() {
        return cy.get('.field__text');
    }

    getTitle(value) {
        return cy.get(`[title="${value}"]`);
    }

    getAriaSelectedTrue() {
        return cy.get('[aria-selected="true"]');
    }

    getUrl() {
        return cy.url();
    }
}

export default NewTaskPage