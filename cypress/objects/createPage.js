class CreatePage {

    getButton() {
        return cy.get('.btn');
    }

    getElementById(id) {
        return cy.get(`[id="${id}"]`);
    }

    getFieldText() {
        return cy.get('.field__text');
    }

    getSelectedLabel() {
        return cy.get('[aria-selected="true"]');
    }

    getTaskName(taskName) {
        return cy.get(`[title="${taskName}"]`);
    }

    checkUrl() {
        cy.wait(1000);
        return cy.url();
    }
}

export default CreatePage