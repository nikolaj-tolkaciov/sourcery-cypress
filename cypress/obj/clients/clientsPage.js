class ClientsPage {
    visit() {
        cy.visit('/clients');
    }

    getCreateClientButton() {
        return cy.get('button').contains('Create Client');
    }

    getOrganizationFilter() {
        return cy.get('[class="field--filter"]').first().find('input');
    }

    getFilteredList() {
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').find('.ag-body-container').children();
    }

    checkFilteredElementOrganization(organization) {
        return cy.get(`[title="${organization}"]`).parent().should('have.attr', 'col-id', 'organization');        
    }

    checkFilteredElementContact(contact) {
        return cy.get(`[title="${contact}"]`).parent().should('have.attr', 'col-id', 'contact');
    }

    checkFilteredElementEmail(email) {
        return cy.get(`[title="${email}"]`).parent().should('have.attr', 'col-id', 'email');        
    }
}

export default ClientsPage;