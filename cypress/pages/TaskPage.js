export default {
    visit: () => cy.visit('/tasks'),

    getCreateButton: () => cy.contains('Create Task'),

    getTaskNameInput: () => cy.get('[id="taskDetailsForm.name"]'),
    
    getDescriptionInput: () => cy.get('[id="taskDetailsForm.description"]'),

    getBillToClient: () => cy.get('.Select-value'),

    getBillToClientOption: (option) => cy.get('[aria-label="' + option + '"]'), // 'Yes' or 'No'

    getHourlyRate: () => cy.get('[id="taskDetailsForm.rate"]'),

    getSubmitButton: () => cy.get('[type="submit"]'),

    getNameFilter: () => cy.get('.field--filter').get('input').first(),

    getDescriptionFilter: () => cy.get('.field--filter').get('input').last(),

    getTaskList: () => cy.get('.ag-body-container > div'),
}