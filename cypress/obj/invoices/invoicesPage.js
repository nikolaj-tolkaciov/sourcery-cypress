class InvoicesPage {
    visit() {
        cy.visit('/invoices');
    }

    getCreateInvoiceButton() {
        return cy.get('button').contains('Create Invoice');
    }

    getFilteredInvoices() {
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').find('.ag-body-container').children();
    }
}

export default InvoicesPage;