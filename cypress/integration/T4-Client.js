import Client from '..//objects/client';
import LoginPage from '../objects/loginPage';
var client = new Client();
var login = new LoginPage();

describe('Sourcebooks creates task', function() {
    beforeEach(function () {
          cy.loginAs("Admin")
          cy.visit('/clients')
        })
   
     it('T-4: Admin creates new Client', function () {
        client.createClientButton().click();
        let FirstName = client.getRandomClientFirstName();
        let LastName = client.getRandomClientLastName();
        let Organization = client.getRandomOrganizationName();
        let Email = client.getRandomEmail();
        client.getOrgNameField().type(Organization);
        client.getFirstNameField().type(FirstName);
        client.getLastNameField().type(LastName);
        client.getEmailField().type(Email);
        client.getSaveButton().click();
        client.visitClients();
        client.getOrgNameFieldForFiltering().type(Organization);
        client.getViewPortWrapper().should('have.length', 1); 
    }) 

})