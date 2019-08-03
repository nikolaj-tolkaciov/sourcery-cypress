import ClientsPage from '../objects/clientsPage'
import ClientDetailsPage from '../objects/clientDetailsPage';

const clientsPage = new ClientsPage();
const clientDetailsPage = new ClientDetailsPage();

describe('Create client', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to create new client with role admin', function () {

        clientsPage.visit();
        clientsPage.pressCreateNewButton();

        var organization = clientDetailsPage.createNewClient();
        cy.url().should('not.include', 'create');

        clientsPage.visit();
        clientsPage.assertClientCreated(organization)
    })
})