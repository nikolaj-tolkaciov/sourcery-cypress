class TaskURL{
    getURL(){
        return cy.url();
    }
    getNewTaskByFilterFromTasksList(){
        return cy.get('input[class="field__text field__text--small"]');
    }
    getNewTaskIsDisplayed(){
        return cy.get('[class="ag-body-container"]');
    }
}
export default TaskURL;