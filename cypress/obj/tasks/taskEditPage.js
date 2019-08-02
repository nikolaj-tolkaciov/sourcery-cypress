class TaskEditPage {
    checkUrl() {
        cy.url().should('match', new RegExp('[^\s]*tasks\\\/[0-9]+'));
    }
}

export default TaskEditPage;