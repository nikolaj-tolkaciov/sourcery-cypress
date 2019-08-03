import PageComponents from "./pageComponents";

class ClientsPage extends PageComponents{
    visit(){
        cy.visit('/clients');
    }

    pressCreateNewButton(){
        cy.get('[class="btn"]').contains('Create Client').click();
    }

    assertClientCreated(organization){
        this.getFirstSearchField().type(organization + '{enter}')
        cy.get(`[title="${this.clientSurname}, ${this.clientName}"]`).should('be.visible')
    }
}

export default ClientsPage