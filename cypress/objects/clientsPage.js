class ClientsPage {

    clientsButton(){
        return cy.get('[href="/clients"]')
    }

    createClient(){
        return cy.get('.btn')
    }

    organizationName(){
        return cy.get('[id="clientDetailsForm.organization"]')
    }

    firstName(){
        return cy.get('[id="clientDetailsForm.contacts_firstName_0"]')
    }

    lastName(){
        return cy.get('[id="clientDetailsForm.contacts_lastName_0"]')
    }

    email(){
        return cy.get('[id="clientDetailsForm.contacts_email_0"]')
    }

    saveButton(){
        return cy.get('[type="submit"]')
    }

    searchByOrganization(){
        return cy.get('[type="text"]').eq(0)
    }

    checkIfDisplayed(name){
        return cy.get('.ellipsis' + `[title=${name}]`)
    }

}
export default ClientsPage