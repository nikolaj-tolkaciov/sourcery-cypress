class ClientPage {
    visit() {
        cy.visit('/clients')
    }
    getCreateClientButton() {
        return cy.get('[type="button"]').contains('Create Client');
    }
    getClientOrganizationField() {
        return cy.get('[id="clientDetailsForm.organization"]');
    }
    getClientFirstnameField() {
        return cy.get('[id="clientDetailsForm.contacts_firstName_0"]');
    }
    getClientLastnameField() {
        return cy.get('[id="clientDetailsForm.contacts_lastName_0"]');
    }
    getClientEmailField() {
        return cy.get('[id="clientDetailsForm.contacts_email_0"]');
    }
    getSubmitClientButton() {
        return cy.get('[type="submit"]').contains('Save');
    }
    assertNotContainCreateUrl() {
        cy.url().should('not.contain', '/create');
    }
    getFilterField() {
        return cy.get(".field__text.field__text--small").eq(0);
    }
    getClientItem() {
        return cy.get(".ag-body-container");
    }
}

export default ClientPage;