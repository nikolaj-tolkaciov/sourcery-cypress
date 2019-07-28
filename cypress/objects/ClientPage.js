class ClientsPage {

    //Clients Page

    getCreateClientsButton() {
        return cy.get('[type="button"]').contains('Create Client');
    }

    getOrganisationNameInputField() {
        return cy.get('[type="text"]').eq(0);
    }

    getClientNameInputField() {
        return cy.get('[type="text"]').eq(1);
    }

    getClientEmailInputField() {
        return cy.get('[type="text"]').eq(2);
    }

    checkIfFilteredClientIsVisible(OrganisationName, ClientName) {
        cy.get('.ellipsis').contains(OrganisationName).should('be.visible');
        cy.get('.ellipsis').contains(ClientName).should('be.visible');
    }

    //Clients Page => Create clients page

    getCreateOrganisationNameInputField() {
        return cy.get('[id="clientDetailsForm.organization"]')
    }

    getCreateClientFirstNameInputField() {
        return cy.get('[id="clientDetailsForm.contacts_firstName_0"]')
    }

    getCreateClientLastNameInputField() {
        return cy.get('[id="clientDetailsForm.contacts_lastName_0"]')
    }

    getCreateClientEmailInputField() {
        return cy.get('[id="clientDetailsForm.contacts_email_0"]')
    }

    getSaveButton() {
       return cy.get('[type=submit]').contains('Save');
    }
}

export default ClientsPage