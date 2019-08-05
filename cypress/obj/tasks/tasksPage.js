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
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport');
    }

    checkFirsFilteredElementDescription(desc) {
        return cy.get(`[title="${desc}"]`).parent().contains('col-id="description"');
    }
}

export default TasksPage;