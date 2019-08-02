class Tasks {
    getFilterFields() {
        return cy.get('input[class="field__text field__text--small"]');
    }

    getDisplayedTasks() {
        return cy.get('[class="ag-body-container"]');
    }
}
export default Tasks;