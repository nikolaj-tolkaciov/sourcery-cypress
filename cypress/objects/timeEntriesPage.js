class TimeEntriesPage {

    getProjectField() {
        return cy.get('[class="field__text"]').first()
    }

    getSearchField() {
        return cy.get('[class="field__text field__text--small"]')
    }
  
    getCheckbox() {
        return cy.get('[class="field__checkbox-fake"]')
    }

    getSaveButton() {
        return cy.get('[type="button"]').contains('Save')
    }

    getProjectEmployeeField() {
        return cy.get('[class="field__text"]').eq(1)
    }

    getFromField() {
        return cy.get('[id="timeEntriesForm.dateFrom"]')
    }

    getToField() {
        return cy.get('[id="timeEntriesForm.dateTo"]')
    }

    getTaskDropdown() {
        return cy.get('[class="Select-input"]').eq(3)
    }

    getFilterButton() {
        return cy.get('[class="btn btn--big"]').contains('Filter')
    }

    getCreatedProjectName() {
        return cy.get('[class="ellipsis"]').first()
    }
    
    getCreatedProjectDate() {
        return cy.get('[class="ellipsis"]').eq(1)
    }  
    
    getCreatedProjectEmployee() {
        return cy.get('[class="ellipsis"]').eq(2)
    } 

    getCreatedProjectTask() {
        return cy.get('[class="ellipsis"]').eq(4)
    } 

}

export default TimeEntriesPage