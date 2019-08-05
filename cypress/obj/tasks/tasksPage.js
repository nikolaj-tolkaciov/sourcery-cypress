class TasksPage {
    visit() {
        cy.visit('/tasks');
    }

    getCreateTaskButton() {
        return cy.get('button').contains('Create Task');
    }

    getNameFilter() {
        return cy.get('[class="field--filter"]').first().find('input');
    }

    getFilteredList() {
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').find('.ag-body-container').children();
    }

    checkFilteredElementName(name) {
        return cy.get(`[title="${name}"]`).parent().should('have.attr', 'col-id', 'name');
    }

    checkFilteredElementDescription(desc) {
        return cy.get(`[title="${desc}"]`).parent().should('have.attr', 'col-id', 'description');
    }
}

export default TasksPage;