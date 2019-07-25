class ClientsPage {

    //Clients

    getCreateClientsButton() {
        return cy.get('[type="button"]').contains('Create Client');
    }
    //Clients Page => Create clients page


}

export default ClientsPage