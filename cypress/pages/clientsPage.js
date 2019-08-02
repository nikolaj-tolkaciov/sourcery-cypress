export default {
    visit: () => cy.visit('/clients'),

    getCreateButton: () => cy.contains('Create Client'),

    getOrganizationField: () => cy.get('[id="clientDetailsForm.organization"]'),

    getFirstNameField: () => cy.get('[id="clientDetailsForm.contacts_firstName_0"]'),

    getLastNameField: () => cy.get('[id="clientDetailsForm.contacts_lastName_0"]'),

    getEmailField: () => cy.get('[id="clientDetailsForm.contacts_email_0"]'),

    getSaveButton: () => cy.get('[type="submit"]'),

    clientShouldExist: (orgName, firstName, lastName) => {

        const contact = firstName + ' ' + lastName

        cy.get('.field__text.field__text--small').eq(0).type(orgName)
        cy.get('.field__text.field__text--small').eq(1).type(contact)

        cy.get('[row-index="0"]').contains(orgName)
        cy.get('.ag-body.ag-row-no-animation').should('have.length', 1)
    }
}