class CreatingNewTaskPage {
    visit() {
        cy.visit('/')
    }

    getTasks() {
        return cy.get('.main-nav__link')
    }

    getNewTask() {
        return cy.get('.btn')
    }

    getTaskName() {
        return cy.get('[id="taskDetailsForm.name"]')
    }

    getDescription() {
        return cy.get('[id="taskDetailsForm.description"]')
    }

    getBillToClient() {
        return cy.get('.Select-value')
    }
    getChooseYes() {
        return cy.get('[aria-label="Yes"]')
    }
    getHourlyRate() {
        return cy.get('[id="taskDetailsForm.rate"]')
    }
    getClickSave() {
        return cy.get('.btn')
    }
    getTasksForChecking() {
        return cy.get('.main-nav__link')
    }
    getFilter() {
        return cy.get('.field__text--small').first()
    }
    getCheckingIfDisplayed() {
        return cy.get('[title = "Reading"]')
    }
   
}

export default CreatingNewTaskPage





    