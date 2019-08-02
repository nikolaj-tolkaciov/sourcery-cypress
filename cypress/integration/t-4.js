import ClientsPage from '../objects/clientsPage'
import NewClientPage from '../objects/newClientPage';

const clientsPage = new ClientsPage();
const newClientPage = new NewClientPage();

describe('Create client', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to create new client with role admin', function () {

        clientsPage.visit();
        clientsPage.pressCreateNewButton();

        var organization = newClientPage.createNewClient();
        cy.url().should('not.include', 'create');

        clientsPage.visit();
        clientsPage.assertClientCreated(organization)
    })
})