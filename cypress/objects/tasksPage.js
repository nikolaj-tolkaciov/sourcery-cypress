class TasksPage{
  tasksButton(){
return cy.get('.main-nav__link').contains("Tasks")
  }
  createTaskButton(){
      return cy.contains('Create Task')
  }
  createTaskName(){
      return cy.get('[id="taskDetailsForm.name"]')
  }
  fillDescriptionField(){
      return cy.get('[id="taskDetailsForm.description"]')
  }
  yesBillToClient(){
      return cy.get('.Select-value').click().get('[aria-label="Yes"]')
  }
  saveNewTask(){
      return cy.get('[type="submit"]')
  }
  filterTask(){
      return cy.get('.field__text--small').first()
  }
  checkIfNewTaskIsCreated(taskName){
    return cy.get(`[title="${taskName}"]`)
}
} 

export default TasksPage