class InvoicePage {

    getCreateInvoiceButton() {
        return cy.get('[type="button"]').contains('Create Invoice')
    }

    getInvoiceNumberField() {
        return cy.get('[id="invoiceDetailsForm.invoiceNumber"]')
    }

    getIssueDateField() {
        return cy.get('[id="invoiceDetailsForm.dateOfIssue"]')
    }

    getPONUmberField() {
        return cy.get('[id="invoiceDetailsForm.purchaseOrderNumber"]')
    }   

    getClientNameDropdown() {
        return cy.get('[class="Select-input"]').first()
    }    

    getSubmitButton() {
        return cy.get('[type="submit"]').contains('Save as Draft')
    }

    getCheckbox() {
        return cy.get('[class="field__checkbox-fake"]')
    }

    getInvoiceField() {
        return cy.get('[class="field__text field__text--small"]').first()
    }

}

export default InvoicePage