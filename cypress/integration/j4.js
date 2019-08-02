import ClientsPage from '../obj/clientsPage';
import Common from '../obj/common';

const clientsPage = new ClientsPage();
const common = new Common();

describe('Sourcebooks login', function() {

    beforeEach(function () {
        cy.loginAs("Admin");
        cy.visit('/');
    })

    it('Admin creates new client', function(){
        let organizationName = "orgName" + Math.random();
        let firstName = "firstName" + Math.random();
        let lastName = "lastName" + Math.random();
        let email = Math.random() + "@" + Math.random() + ".com";
        
        common.visitSpecificURL('/clients');

        clientsPage.typeOrganizatiomNameInSearch(organizationName);
        cy.wait(2000); // for some reason JS does not have enough time to load in, so this helps
        clientsPage.checkIfListIsEmpty();

        clientsPage.getCreateClientButton().click();
        clientsPage.fillInMandatoryFields(organizationName, firstName, lastName, email);
        clientsPage.getSaveButton().click();
        common.visitSpecificURL('/clients');
        clientsPage.typeOrganizatiomNameInSearch(organizationName);
        cy.wait(2000);
        clientsPage.checkIfNewClientExists(organizationName);

    })
})