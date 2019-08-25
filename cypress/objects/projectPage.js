class ProjectPage {
    
    getCreateProjectButton() {
        return cy.get('[type="button"]').contains('Create Project')
    }

    getProjectNameField() {
        return cy.get('[id="projectDetailsForm.name"]')
    }

    getProjectDescriptionField() {
        return cy.get('[id="projectDetailsForm.description"]')
    }

    getClientNameDropdown() {
        return cy.get('[class="Select is-searchable Select--single"]').first();
    }

    getClientManagerDropdown() {
        return cy.get('[class="Select is-searchable Select--single"]').last();
    }

    getProjectSearchField() {
        return cy.get('[class="field__text field__text--small"]').first();
    }

    getCreatedProjectName() {
        return cy.get('[class="ellipsis"]').first();
    }

}

export default ProjectPage