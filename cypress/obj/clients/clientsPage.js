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
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport');
    }
}

export default ClientsPage;