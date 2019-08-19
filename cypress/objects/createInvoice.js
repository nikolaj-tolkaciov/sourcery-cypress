class CreateInvoice {

    getInvoiceNumberField() {
        return cy.get('[id="invoiceDetailsForm.invoiceNumber"]');
    }

    getClientNameField() {
        return cy.get('[for="invoiceDetailsForm.client"]').next();
    }
    
}

export default CreateInvoice