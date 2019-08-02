class Client {
    visitClients() {
        cy.visit('/clients');
    }

    createClientButton() {
        return cy.get('[type="button"]').contains('Create Client');
    }

    getRandomClientFirstName() {
        return 'FirstName' + String(Math.random()*10000);
    }

    getRandomClientLastName() {
        return 'LastName' + String(Math.random()*10000);
    }

    getRandomOrganizationName() {
        return 'Orrrrggggg' + String(Math.random()*10000);
    }

    getRandomEmail() {
        return 'email' + String(Math.random()*10000) + '@gmail.com';
    }

    getOrgNameField() {
        return cy.get('[id = "clientDetailsForm.organization"]');
    }

    getFirstNameField() {
        return cy.get('[id = "clientDetailsForm.contacts_firstName_0"]');
    }
    
    getLastNameField() {
        return cy.get('[id = "clientDetailsForm.contacts_lastName_0"]');
    }

    getEmailField() {
        return cy.get('[id = "clientDetailsForm.contacts_email_0"]')
    }

    getSaveButton() {
        return cy.get('[type = "submit"]').contains('Save')
    }

    getOrgNameFieldForFiltering() {
        return cy.get('.field--filter').first().find('input');
    }

    getViewPortWrapper() {
        return cy.get('.ag-body-viewport-wrapper').find('.ag-body-viewport')
     }
    
}

export default Client;