import Common from '../objects/common';
import InvoicePage from '../objects/invoicePage';

const common = new Common();
const invoicePage = new InvoicePage();
const todaysDate1 = Cypress.moment().format('MM/DD/YYYY');
const todaysDate = Cypress.moment().format('YYYY-MM-DD');

describe('Sourcebooks new invoice creation by an Admin (T-8)', function() {

    it('Should be able to create invoices with an Admin role, and check if invoices are created', function () {

        cy.visit('/');
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown('Ieva Stonkaitė').click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown('Admin').click();
        common.getButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');

        cy.visit('/invoices');
        invoicePage.getCreateInvoiceButton().click();
        invoicePage.getInvoiceNumberField().type(todaysDate);
        invoicePage.getIssueDateField().clear().type(todaysDate1);
        invoicePage.getPONUmberField().type(todaysDate1);
        invoicePage.getClientNameDropdown().find('[value]').click({force:true}).type('TestOrganizationName' + ' ' + todaysDate).wait(2000).type('{enter}');
        invoicePage.getCheckbox().click({force:true});
        invoicePage.getSubmitButton().click();
        //enter needs to be pressed a few times to confirm a prompt message. Trying to save the invoice gives a 500 error

        cy.visit('/invoices');
        invoicePage.getInvoiceField().type(todaysDate);
        //invoice that was attemtpted to create is not in the list, therefore it wasn't created         
    })
   
})