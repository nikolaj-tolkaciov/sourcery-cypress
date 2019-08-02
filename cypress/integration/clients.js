import ClientsPage from '../obj/clients/clientsPage';
import ClientCreatePage from '../obj/clients/clientCreatePage';
import Common from '../obj/common';

const clientsPage = new ClientsPage();
const clientCreatePage = new ClientCreatePage();
const common = new Common();

describe('Sourcebook testClients', function() {
    it('Should be available for Admin to create new client', function () {
        cy.loginAs("Admin");

        const organization = common.makeId();
        const email = common.makeId() + '@mail.com';
        clientsPage.visit();
        clientsPage.getCreateClientButton().click();
        clientCreatePage.getFormOrganization().type(organization);
        clientCreatePage.getFormFirstName().type(common.makeId());
        clientCreatePage.getFormLastName().type(common.makeId());
        clientCreatePage.getFormEmail().type(email);
        clientCreatePage.getSubmitButton().click();
        
        clientsPage.visit();
        clientsPage.getOrganizationFilter().type(organization);
        clientsPage.getFilteredList().should('have.length', 1);
    })
})