import PageComponents from "./pageComponents";

class TasksPage extends PageComponents{
    visit(){
        cy.visit('/tasks');
    }

    pressCreateNewButton(){
        cy.get('[class="btn"]').contains('Create Task').click();
    }

    assertTaskExists(task){
        cy.get('[class="field__text field__text--small"]').eq(0).type(task.name + '{enter}')
        this.getElementByClass("ag-cell ag-cell-not-inline-editing ag-cell-no-focus ag-cell-value").contains(task.description)
    }
}
export default TasksPage