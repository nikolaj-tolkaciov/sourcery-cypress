export default {
    visit: () => cy.visit('/projects'),

    getCreateButton: () => cy.contains('Create Project'),

    getNameField: () => cy.get('[id="projectDetailsForm.name"]'),

    getClientDropDown: () => cy.get('[id="projectDetailsForm.client"]'),

    getClientOption: (client) => cy.get(`[aria-label="${client}"]`),
    
    getProjectManagerDropDown: () => cy.get('[id="projectDetailsForm.projectManager"]'),

    getProjectManagerOption: (firstName, lastName) => cy.get('.Select-menu-outer').contains(firstName).contains(lastName),

    getAddTasksButton: () => cy.contains('Add Tasks'),

    getFirstTask: () => cy.get('.field__checkbox').first(),

    getAddTaskModalButton: () => cy.get('.modal__actions').contains('Add'),

    getAddMembersButton: () => cy.contains('Add Members'),

    getMember: (firstName, lastName) => cy.contains(lastName + ', ' + firstName),

    getAddMemberModalButton: () => cy.get('.modal__actions').contains('Add'),

    getSubmitButton: () => cy.get('[type="submit"]')
}