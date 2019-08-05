import ClientsPage from '../obj/clients/clientsPage';
import ClientCreatePage from '../obj/clients/clientCreatePage';
import Common from '../obj/common';

const clientsPage = new ClientsPage();
const clientCreatePage = new ClientCreatePage();
const common = new Common();

const organization = common.makeId();
const email = `${common.makeId()}@mail.com`;
const lastName = common.makeId();
const name = common.makeId();

describe('[T4] Sourcebook testClients', function() {
    it('Should be available for Admin to create new client', function() {
        cy.loginAs("Admin");

        clientsPage.visit();
        clientsPage.getCreateClientButton().click();
        clientCreatePage.getFormOrganization().type(organization);
        clientCreatePage.getFormFirstName().type(name);
        clientCreatePage.getFormLastName().type(lastName);
        clientCreatePage.getFormEmail().type(email);
        clientCreatePage.getSubmitButton().click();
        
        clientsPage.visit();
        clientsPage.getOrganizationFilter().type(organization);
        clientsPage.getFilteredList().should('have.length', 1);
        clientsPage.checkFilteredElementOrganization(organization);
        clientsPage.checkFilteredElementContact(`${lastName}, ${name}`);
        clientsPage.checkFilteredElementEmail(email);
    })
})