import PageComponents from "./pageComponents";

class TasksPage extends PageComponents{
    visit(){
        cy.visit('/tasks');
    }

    pressCreateNewButton(){
        cy.get('[class="btn"]').contains('Create Task').click();
    }

    assertTaskExists(task){
        this.getFirstSearchField().type(task.name + '{enter}')
        cy.get(`[title="${task.description}"]`).should('be.visible')
    }
}
export default TasksPage