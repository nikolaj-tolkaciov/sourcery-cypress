class TasksPage {


    getCreateTaskButton() {
        return cy.get('[type="button"]').contains('Create Task');
    }

    fillNewTaskName(name) {
        return cy.get('[id="taskDetailsForm.name"]').type(name);
    }

    fillNewTaskDescription(description) {
        return cy.get('[id="taskDetailsForm.description"]').type(description);
    }

    getBillDropdown() {
        return cy.get('.Select-value');
    }

    getBillDropdownOption(option) {
        return cy.get('.Select-option').contains(option);
    }

    fillHourlyRate(value) {
        cy.get('[id="taskDetailsForm.rate"]').clear().type(value);
    }
    
    clickSaveButton() {
        cy.get('.btn').contains('Save').click();
    }

    fillTaskNameToFilter(name) {
        cy.get('[type="text"]').first().type(name);
    }

    isNewTaskInList(name, description, rate) {
        if  ((cy.get(`[title="${name}"]`).contains(name)) && 
             (cy.get(`[title="${description}"]`).contains(description))
            )
        return true;

        else return false;
    }


    
}

export default TasksPage