import ClientsPage from '../objects/clientsPage';

describe('Sourcebooks login', function() {

    const clientsPage = new ClientsPage;

    beforeEach(() => {
        cy.loginAs("Admin");
        clientsPage.visit();
    })

    it('Admins can create new client', function () {
        clientsPage.getCreateClientButton().click();
        var autoOrgName = 'Orgname_' + Math.random().toString(36).substr(2, 9);
        clientsPage.getOrgName().type(autoOrgName);
        var autoFirstName = 'Firstname_' + Math.random().toString(36).substr(2, 9);
        clientsPage.getFirstName().type(autoFirstName);
        var autoLastName = 'Lastname_' + Math.random().toString(36).substr(2, 9);
        clientsPage.getLastName().type(autoLastName);
        var autoEmail = 'email_' + Math.random().toString(36).substr(2, 9)  + "@email.com";
        clientsPage.getEmail().type(autoEmail);
        clientsPage.getSaveButton().click();
        clientsPage.getUrl().should('not.include', 'create');
        clientsPage.visit();
        clientsPage.getInputField().eq(0).type(autoOrgName);
        clientsPage.getInputField().eq(1).type(autoLastName + ' ' + autoFirstName);
        clientsPage.getInputField().eq(2).type(autoEmail);
        clientsPage.getFilteredName(autoOrgName).should('be.visible');
        clientsPage.getFilteredName(autoLastName + ', ' + autoFirstName).should('be.visible');
        clientsPage.getFilteredName(autoEmail).should('be.visible');
    })
})