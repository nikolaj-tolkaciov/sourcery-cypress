class TimeLoggingPage {

    getCalendarTodaysDate() {
        return cy.get('[class="calendar__day calendar--today calendar--selected"]')
    }    

    getProjectNameDropdown() {
        return cy.get('.Select-input').first()
    }  

    getTaskNameDropdown() {
        return cy.get('.Select-input').eq(2)
    } 

    getDescriptionField() {
        return cy.get('[id="timeLoggingForm.notes"]')
    } 

    getHoursField() {
        return cy.get('[id="timeLoggingForm.hours"]')
    }

    getCreatedTimeLogName() {
        return cy.get('[class="time-list__description"]')
    }
    
    getCreatedTimeLogTaskName() {
        return cy.get('[col-id="taskName"]')
    }

    getCreatedTimeLogDescription() {
        return cy.get('[class="time-list__description"]')
    }

    getCreatedTimeLogHours() {
        return cy.get('[class="time-list__hours"]')
    }
    
}

export default TimeLoggingPage