class ProjectPage {

    //ProjectsPage

    getCreateProjectButton() {
        return cy.get('[type="button"]').contains('Create Project');
    }

    getProjectNameInputField() {
        return cy.get('[type="text"]').eq(0);
    }

    getClientNameInputField() {
        return cy.get('[type="text"]').eq(1);
    }

    checkIfFilteredProjectIsVisible(projectName, projectClient) {
        cy.get('.ellipsis').contains(projectName).should('be.visible');
        cy.get('.ellipsis').contains(projectClient).should('be.visible');
    }

    //Project Page => Create Project

    getCreateProjectNameInputField() {
        return cy.get('[id="projectDetailsForm.name"]');
    }

    getCreateProjectClientNameInputField() {
        return cy.get('[id="projectDetailsForm.client"]');
    }

    getCreateProjectManagerInputField() {
        return cy.get('[id="projectDetailsForm.projectManager"]');
    }

    getAddTaskButton() {
        return cy.get('[type=button]').contains('Add Tasks');
    }

    getSearchInputField() {
        return cy.get('[class="field__text field__text--small"]' + '[placeholder="Search"]');
    }

    getSelectAllButton() {
        return cy.get('[type=button]').contains('Select All');
    }

    getAddMembersButton() {
        return cy.get('[type=button]').contains('Add Members');
    }

    getModalActionsMenufield() {
        return cy.get('.modal__actions');
    }

    getAddButton () {
        return cy.get('[type=button]').contains('Add');
 
    }

    getSaveButton() {
        return cy.get('[type=submit]').contains('Save');
    }
}

export default ProjectPage
