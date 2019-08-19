class TimeLogging {
    getTodaysDate() {
        return cy.get('.calendar--today').find('.calendar__date');
    }        

    getCalendar() {
        return cy.get('.calendar');
    }

    getTileForm() {
        return cy.get('.tile.form');
    }   

    getTodaysCell() {
        return cy.get('.calendar--today');
    }
    
    getProjectDropDown() {
        return cy.get('[for="timeLoggingForm.project"]').next();
    }

    getTaskDropDown() {
        return cy.get('[for="timeLoggingForm.task"]').next();
    }

    getDescriptionField() {
        return cy.get('[id="timeLoggingForm.notes"]');
    }

    getHoursField() {
        return cy.get('[id="timeLoggingForm.hours"]');
    }

    getDeleteButton() {
        return cy.get('[class="btn btn__secondary"]').contains('Delete');
    }

    getDelConfirmButton() {
        return cy.get('[class="btn btn__alert"]').contains('Delete');
    }

    getAllCheckBoxes() {
        return cy.get('[class="ag-icon ag-icon-checkbox-unchecked"]').first();
    }

    getProjectsRows() {
        return cy.get('[class="ag-body-container"').find('[role="row"]');
    }

    getLoggedHours() {
        return cy.get('[class="time-list__hours"]');
    }

    getProjectNames() {
        return cy.get('[col-id="projectName"]');
    }

    getTaskNames() {
        return cy.get('[col-id="taskName"]');
    }

    getDescriptions() {
        return cy.get('[col-id="notes"]');
    }
    
}

export default TimeLogging;