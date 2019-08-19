class CreateClient {

    getOrganizationField() {
        return cy.get(`[id="clientDetailsForm.organization"]`)
    }

    getFirstNameField() {
        return cy.get(`[id="clientDetailsForm.contacts_firstName_0"]`)
    }

    getLastNameField() {
        return cy.get(`[id="clientDetailsForm.contacts_lastName_0"]`)
    }

    getEmailField() {
        return cy.get(`[id="clientDetailsForm.contacts_email_0"]`)
    }
}
export default CreateClient