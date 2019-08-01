export default {
    visit: () => cy.visit('/clients'),

    getCreateButton: () => cy.contains('Create Client'),

    getOrganizationField: () => cy.get('[id="clientDetailsForm.organization"]'),

    getFirstNameField: () => cy.get('[id="clientDetailsForm.contacts_firstName_0"]'),

    getLastNameField: () => cy.get('[id="clientDetailsForm.contacts_lastName_0"]'),

    getEmailField: () => cy.get('[id="clientDetailsForm.contacts_email_0"]'),

    getSaveButton: () => cy.get('[type="submit"]'),
}