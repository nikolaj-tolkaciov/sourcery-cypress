import LoginPage from '../objects/loginPage'
import ClientsPage from '../objects/clientsPage'

describe('Sourcebooks create client', function() {

    const loginPage = new LoginPage()  
    const clients = new ClientsPage();  

    beforeEach(() => {
            cy.loginAs("Admin")
            loginPage.visit()
    })

    it('Should create a new client', function () {

        var fieldText = [Math.random().toString(20).substring(2,6), Math.random().toString(20).substring(2,6),
                         Math.random().toString(20).substring(4,12)]

        clients.clientsButton().click()
        clients.createClient().click()
        clients.organizationName().type(fieldText[0])
        clients.firstName().type(fieldText[1])
        clients.lastName().type(fieldText[2])
        clients.email().type(fieldText[0])
        clients.email().type('@gmail.com')
        clients.saveButton().click()
        clients.clientsButton().click()
        clients.searchByOrganization().type(fieldText[0])
        clients.checkIfDisplayed(fieldText[0]).should('be.visible')
    })
})