import ClientsPage from '../pages/clientsPage'
import { getRandomName } from '../helpers/constants'

describe('Client creation', () => {

    it('Admin should be able to create clients', () => {
        cy.loginAs('Admin')
        ClientsPage.visit()

        const orgName = getRandomName()
        const firstName = getRandomName()
        const lastName = getRandomName()

        ClientsPage.getCreateButton().click()

        ClientsPage.getOrganizationField().type(orgName)
        ClientsPage.getFirstNameField().type(firstName)
        ClientsPage.getLastNameField().type(lastName)
        ClientsPage.getEmailField().type('my@email.com')
        ClientsPage.getSaveButton().click()

        cy.url().should('not.include', '/create')
        ClientsPage.visit()
        ClientsPage.clientShouldExist(orgName, firstName, lastName)
    })
}) 