class ProjectsPage {
    visit() {
        cy.visit('/projects');
    }
    getCreateProjectButton() {
        return cy.get('.btn');
    }
    getProjectName() {
        return cy.get('[id="projectDetailsForm.name"]');
    }
    getProjectManager() {
        return cy.get('[id="projectDetailsForm.projectManager"]');
    }
    getProjectManagerOption() {
        return cy.get('[aria-activedescendant="react-select-7--option-0"]');
    }
    getClientName() {
        return cy.get('[id="projectDetailsForm.client"]');
    }
    getOption(name) {
        return cy.get(`[aria-label="${name}"]`);
    }
    getAddTasksButton() {
        return cy.get('[type="button"]').contains('Add Tasks');
    }
    getSearchField() {
        return cy.get('[placeholder="Search"]');
    }
    getCheckbox(name) {
        return cy.get('.field__checkbox').contains(`${name}`);
    }
    getAddButton() {
        return cy.get('.modal__actions').contains('Add');
    }
    getAddMembersButton() {
        return cy.get('[type="button"]').contains('Add Members');
    }
    getSaveButton() {
        return cy.get('[type="submit"]');
    }
    getUrl() {
        return cy.url();
    }
    getInputField() {
        return cy.get('.field__text--small');
    }
    getFilteredName(name) {
        return cy.get(`[title="${name}"]`);
    }
}
export default ProjectsPage;
