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
        cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-no-focus ag-cell-value"]').contains('LastName, FirstName')
    }
}

export default ClientsPage