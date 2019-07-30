class ClientsPage {
    visit() {
        cy.visit('/clients');
    }
    getCreateClientButton() {
        return cy.get('.btn');
    }
    getUrl() {
        return cy.url();
    }
    getOrgName() {
        return cy.get('[id="clientDetailsForm.organization"]');
    }
    getFirstName() {
        return cy.get('[id="clientDetailsForm.contacts_firstName_0"]');
    }
    getLastName() {
        return cy.get('[id="clientDetailsForm.contacts_lastName_0"]');
    }
    getEmail(){
        return cy.get('[id="clientDetailsForm.contacts_email_0"]');
    }
    getSaveButton() {
        return cy.get('[type="submit"]');
    }
    getInputField() {
        return cy.get('.field__text--small');
    }
    getFilteredName(name) {
        return cy.get(`[title="${name}"]`);
    }
}
export default ClientsPage;
