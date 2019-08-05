class TasksPage{
    getTasksTab(){
        cy.visit('/tasks');
    }
    getNewTasksButton(){
        return cy.get('button');
    }
}
export default TasksPage