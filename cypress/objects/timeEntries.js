class TimeEntries {

    getProjectField() {
        return cy.get('[for="timeEntriesForm.projectIds"]').next();
    }

    getCheckBox(id) {
        return cy.get(`[id="item_NaN_${id}"]`).next();
    }

    getEmployeeField() {
        return cy.get('[for="timeEntriesForm.employeeIds"]').next();
    }

    getFromField() {
        return cy.get('[id="timeEntriesForm.dateFrom"]');
    }

    getToField() {
        return cy.get('[id="timeEntriesForm.dateTo"]');
    }

    getTaskField() {
        return cy.get('[for="timeEntriesForm.taskId"]').next();
    }

    getFilterButton() {
        return cy.get('[class="btn btn--big"]').contains('Filter');
    }

    getTableRows() {
        return cy.get('[class="ag-body-container"]').find('[role="row"]');
    }

    getDescriptions() {
        return cy.get('[col-id="notes"]');
    }

    getProjectNames() {
        return cy.get('[col-id="projectName"]');
    }

    getTaskNames() {
        return cy.get('[col-id="taskName"]');
    }

    getDates() {
        return cy.get('[col-id="date"]');
    }

    getEmployees() {
        return cy.get('[col-id="employeeName"]');
    }

    getHours() {
        return cy.get('[col-id="hours"]');
    }
}

export default TimeEntries;