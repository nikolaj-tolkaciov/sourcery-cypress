class InvoiceCreatePage {
    getInvoiceNumberInput() {
        return cy.get('[id="invoiceDetailsForm.invoiceNumber"]');
    }

    getClientDropdown() {
        return cy.get('[for="invoiceDetailsForm.client"]').next();
    }

    getClientFromDropdown(client) {
        return cy.get(`[aria-label="${client}"]`);
    }

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
}

export default InvoiceCreatePage;