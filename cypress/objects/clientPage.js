class ClientPage {

    getCreateClientButton() {
        return cy.get('[type="button"]').contains('Create Client')
    }

    getOrganizationNameField() {
        return cy.get('[id="clientDetailsForm.organization"]')
    }

    getContactsFirstNameField() {
        return cy.get('[id="clientDetailsForm.contacts_firstName_0"]')
    }  

    getContactsLastNameField() {
        return cy.get('[id="clientDetailsForm.contacts_lastName_0"]')
    } 

    getContactsEmailField() {
        return cy.get('[id="clientDetailsForm.contacts_email_0"]')
    } 

    getOrganizationSearchField() {
        return cy.get('[class="field__text field__text--small"]').first()
    }

    getCreatedClientName() {
        return cy.get('[class="ellipsis"]')
    }

}

export default ClientPage