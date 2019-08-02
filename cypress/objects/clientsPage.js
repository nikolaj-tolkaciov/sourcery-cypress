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
        cy.get('[title="LastName, FirstName"]')
    }
}

export default ClientsPage