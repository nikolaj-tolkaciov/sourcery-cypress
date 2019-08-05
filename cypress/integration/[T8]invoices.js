import InvoicesPage from '../obj/invoices/invoicesPage';
import InvoiceCreatePage from '../obj/invoices/invoiceCreatePage';
import Common from '../obj/common';

const invoicesPage = new InvoicesPage();
const invoiceCreatePage = new InvoiceCreatePage();
const common = new Common();

const invoiceNr = 1;
const clientName = 'Random_Name_106205255624';

describe('[T8] Sourcebooks testInvoices', function() {
    it('Should be possible for Admin to create new Invoice', function() {
        cy.loginAs('Admin');
        invoicesPage.visit();

        invoicesPage.getCreateInvoiceButton().click();
        invoiceCreatePage.getInvoiceNumberInput().type(invoiceNr);
        invoiceCreatePage.getClientDropdown().click();
        invoiceCreatePage.getClientFromDropdown(clientName).click();
        invoiceCreatePage.getSubmitButton().click();

        invoicesPage.visit();
        invoicesPage.getFilteredInvoices().should('exist');
    })
})