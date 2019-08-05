class TimeLoggingPage {
    checkUrl() {
        cy.url().should('include', '/time-logging');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getFormTile() {
        return cy.get('.tile.form');
    }

    getCalendarToday() {
        return cy.get('.calendar--today').find('.calendar__date');
    }

    getProjectDropdown() {
        return cy.get('[class="Select is-searchable Select--single"]').first();
    }

    getProjectFromDropdown(projectName) {
        return cy.get(`[aria-label="${projectName}"]`);
    }

    getTaskDropdown() {
        return cy.get('[class="Select is-searchable Select--single"]').last();
    }

    getTaskFromDropdown(taskName) {
        return cy.get(`[aria-label="${taskName}"]`);
    }

    getFormDescription() {
        return cy.get('[id="timeLoggingForm.notes"]');
    }

    getFormHours() {
        return cy.get('[id="timeLoggingForm.hours"]');
    }

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getCalendarTile() {
        return cy.get('.calendar--today');
    }

    getTodayHoursRecord() {
        return this.getCalendarTile().find('.calendar__label');
    }

    getAllTimeLogsCheckbox() {
        return cy.get('[class="ag-icon ag-icon-checkbox-unchecked"]').first();
    }

    getDeleteButton() {
        return cy.get('[class="btn btn__secondary"]');
    }

    getDeleteConfirmButton() {
        return cy.get('.btn__alert');
    }

    getLoggedTimes() {
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').find('.ag-body-container').children();
    }

    getFirstLoggedTimeProject(project) {
        return cy.get(`[title="${project}"]`).first().parent().parent().should('have.attr', 'col-id', 'projectName');
    }

    getLastLoggedTimeProject(project) {
        return cy.get(`[title="${project}"]`).last().parent().parent().should('have.attr', 'col-id', 'projectName');        
    }

    getFirstLoggedTimeTask() {
        return cy.get('.ag-body-container').find('[col-id="taskName"]');        
    }

    getLastLoggedTimeTask(task) {
        return cy.get('.ag-body-container').last().find('[col-id="taskName"]');   
    }

    getFirstLoggedTimeDescription(description) {
        return cy.get(`[title="${description}"]`).first().parent().parent().should('have.attr', 'col-id', 'notes');        
    }

    getLastLoggedTimeDescription(description) {
        return cy.get(`[title="${description}"]`).last().parent().parent().should('have.attr', 'col-id', 'notes');        
    }

    getFirstLoggedTimeHours() {
        return cy.get('.time-list__hours').first();        
    }

    getLastLoggedTimeHours() {
        return cy.get('.time-list__hours').last();        
    }
    
}

export default TimeLoggingPage;