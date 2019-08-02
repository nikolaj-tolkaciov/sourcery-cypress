class ClientCreatePage {
    getFormOrganization() {
        return cy.get('[id="clientDetailsForm.organization"]');
    }

    getFormFirstName() {
        return cy.get('[id="clientDetailsForm.contacts_firstName_0"]');
    }

    getFormLastName() {
        return cy.get('[id="clientDetailsForm.contacts_lastName_0"]');
    }

    getFormEmail() {
        return cy.get('[id="clientDetailsForm.contacts_email_0"]');
    }

    getFormSubmit() {
        return cy.get('[type="submit"]');
    }
}

export default ClientCreatePage;