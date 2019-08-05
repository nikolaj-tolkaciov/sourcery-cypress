class TaskPage {
    getCreatTaskButton() {
        return cy.get('.btn[type="button"]')
    }

    getTaskNameField() {
        return cy.get('.field__text--small').first()
    }

    getDescriptionField() {
        return cy.get('.field__text--small').last()
    }

    visit(){
        cy.visit('/tasks')
    }
}

export default TaskPage