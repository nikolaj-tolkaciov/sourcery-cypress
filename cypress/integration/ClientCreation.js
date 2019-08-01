import ClientsPage from '../helpers/ClientsPage'

// T-4
describe('Client creation', () => {

    it('Admin should be able to create clients', () => {
        cy.loginAs('Admin')
        ClientsPage.visit()

        const randomName = Math.random().toString(10).substring(9);

        ClientsPage.getCreateButton().click()

        ClientsPage.getOrganizationField().type('orgname' + randomName)
        ClientsPage.getFirstNameField().type('first name')
        ClientsPage.getLastNameField().type('Last name')
        ClientsPage.getEmailField().type('my@email.com')
        ClientsPage.getSaveButton().click()
        
        cy.url().should('not.include', '/create')
    })
}) 