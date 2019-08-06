class TaskPage {
  visit() {
    cy.visit('/tasks');
  }
  getCreateTaskButton() {
    return cy.contains('Create Task');
  }
  getTaskNameInput() {
    return cy.get('[id="taskDetailsForm.name"]');
  }
  getTaskDescriptionInput() {
    return cy.get('[id="taskDetailsForm.description"]');
  }
  getBillToClientDropDown() {
    return cy.get('.Select-value');
  }
  getBillToClientDropDownOption(option) {
    return cy.get('[aria-label="' + option + '"]');
  }
  getHourlyRate() {
    return cy.get('[id="taskDetailsForm.rate"]');
  }
  getSaveButton() {
    return cy.get('[type="submit"]');
  }
  getNameFilter() {
    return cy.get('.field--filter input').first();
  }
  getDescriptionFilter() {
    return cy.get('.field--filter input').last();
  }
  getTaskName() {
    return cy.get('.ag-body-container .ellipsis').first();
  }
}

export default TaskPage;
