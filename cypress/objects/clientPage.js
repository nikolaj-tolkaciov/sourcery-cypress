class ClientPage {
    visit() {
        cy.visit('/Clients');
    }

    inputOrganization(organization) {
        cy.get(`[name = "clientDetailsForm.organization"]`).type(organization);
    }

    inputFirstName(firstName) {
        cy.get(`[name = "clientDetailsForm.contacts[0].firstName"]`).type(firstName);
    }

    inputLastName(lastName) {
        cy.get(`[name = "clientDetailsForm.contacts[0].lastName"]`).type(lastName);
    }

    inputHomePhone(homePhone) {
        cy.get(`[name = "clientDetailsForm.contacts[0].homePhone"]`).type(homePhone);
    }

    inputMobilePhone(mobilePhone) {
        cy.get(`[name = "clientDetailsForm.contacts[0].mobilePhone"]`).type(mobilePhone);
    }

    inputEmail(email) {
        cy.get(`[name = "clientDetailsForm.contacts[0].email"]`).type(email);
    }
    
    filterListByClients(firstName, lastName) {
        cy.get('[class="field__text field__text--small"]').get('[type="text"]').second().type(`${firstName}, ${lastName}`);
    }

    filterListByEmail(email) {
        cy.get('[class="field__text field__text--small"]').get('[type="text"]').last().type(email);
    }
}

export default ClientPage;