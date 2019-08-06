class ProjectPage {
    visit() {
        cy.visit('/projects')
    }
    getCreateProjectButton() {
        return cy.get('[type="button"]').contains('Create Project');
    }
    getProjectNameField() {
        return cy.get('[id="projectDetailsForm.name"]');
    }
    getClientDropdown() {
        return cy.get('#react-select-2--value > .Select-placeholder');
    }
    getManagerDropdown() {
        return cy.get('#react-select-3--value > .Select-placeholder');
    }
    selectClient(clientName) {
        return cy.get(`[aria-label="${clientName}"]`)
    }
    selectManager(managerLastName, managerFirstName, managerEmail) {
        return cy.get(`[aria-label="${managerLastName}, ${managerFirstName} (${managerEmail})"]`)
    }
    getAddTasksButton() {
        return cy.get('[type="button"]').contains('Add Tasks');
    }
    

    // getClientOrganizationField() {
    //     return cy.get('[id="clientDetailsForm.organization"]');
    // }
    // getClientFirstnameField() {
    //     return cy.get('[id="clientDetailsForm.contacts_firstName_0"]');
    // }
    // getClientLastnameField() {
    //     return cy.get('[id="clientDetailsForm.contacts_lastName_0"]');
    // }
    // getClientEmailField() {
    //     return cy.get('[id="clientDetailsForm.contacts_email_0"]');
    // }
    // getSubmitClientButton() {
    //     return cy.get('[type="submit"]').contains('Save');
    // }
    // assertNotContainCreateUrl() {
    //     cy.url().should('not.contain', '/create');
    // }
    // getFilterField() {
    //     return cy.get(".field__text.field__text--small").eq(0);
    // }
    // getClientItem() {
    //     return cy.get(".ag-body-container");
    // }
}

export default ProjectPage;