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

    getSaveButton() {
        return cy.get('[type=submit]').contains('Save');
    }
}

export default ProjectPage
