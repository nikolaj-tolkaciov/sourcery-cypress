class TimeEntriesPage {
    visit() {
        cy.visit('/time-entries');
    }

    getProjectInput() {
        return cy.get('[for="timeEntriesForm.projectIds"]').next();
    }

    getEmploeeInput() {
        return cy.get('[for="timeEntriesForm.employeeIds"]').next();
    }

    getModuleProjectCheckbox(projectId) {
        return cy.get(`[id="item_NaN_${projectId}"]`).next();
    }

    getModuleEmploeeCheckbox(employeeId) {
        return cy.get(`[id="item_NaN_${employeeId}"]`).next();
    }

    getModuleSaveButton() {
        return cy.get('.modal__actions').find('button').contains('Save');
    }

    getTimeFromInput() {
        return cy.get('[id="timeEntriesForm.dateFrom"]');
    }

    getTimeToInput() {
        return cy.get('[id="timeEntriesForm.dateTo"]');
    }

    getTaskInput() {
        return cy.get('[for="timeEntriesForm.taskId"]').next();
    }

    getTaskFromDropdown(task) {
        return cy.get(`[aria-label="${task}"]`);
    }

    getFilterButton() {
        return cy.get('button').contains('Filter');
    }

    getFilteredList() {
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').find('.ag-body-container').children();
    }

    checkProjectsNames(projectName) {
        cy.get(`[title=${projectName}]`).first().parent().should('have.attr', 'col-id', 'projectName');
        cy.get(`[title=${projectName}]`).last().parent().should('have.attr', 'col-id', 'projectName');
    }

    checkProjectsDates() {
        const date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = `0${month}`;
        } 
        if (day < 10) {
            day = `0${day}`;
        }
        cy.get(`[title='${date.getFullYear()}-${month}-${day}']`).first().parent().should('have.attr', 'col-id', 'date');
        cy.get(`[title='${date.getFullYear()}-${month}-${day}']`).last().parent().should('have.attr', 'col-id', 'date');
    }

    checkEmploees(emploee) {
        cy.get(`[title='${emploee}']`).first().parent().should('have.attr', 'col-id', 'employeeName');
        cy.get(`[title='${emploee}']`).last().parent().should('have.attr', 'col-id', 'employeeName');
    }

    checkTasks(task) {
        cy.get(`[title='${task}']`).first().parent().should('have.attr', 'col-id', 'taskName');
        cy.get(`[title='${task}']`).last().parent().should('have.attr', 'col-id', 'taskName');
    }

    checkHours(hours) {
        this.getFilteredList().first().find('[col-id="hours"]').contains(hours);
        this.getFilteredList().last().find('[col-id="hours"]').contains(hours);
    }

    checkNotes(note1, note2) {
        cy.get(`[title='${note1}']`).parent().should('have.attr', 'col-id', 'notes');
        cy.get(`[title='${note2}']`).parent().should('have.attr', 'col-id', 'notes');
    }
}

export default TimeEntriesPage;