import ClientPage from "../objects/clientPage";

const clientPage = new ClientPage();
let organizationName = Math.random().toString(28);

describe('Sourcebooks create client', function () {

    it('Should be able to create new client as admin', function () {
        cy.loginAs('Admin');
        clientPage.visit();
        clientPage.getCreateClientButton().click();
        clientPage.getClientOrganizationField().type(organizationName);
        clientPage.getClientFirstnameField().type(Math.random().toString(36));
        clientPage.getClientLastnameField().type(Math.random().toString(36));
        clientPage.getClientEmailField().type('superuser@gmail.com');
        clientPage.getSubmitClientButton().click();
        clientPage.assertNotContainCreateUrl();
        clientPage.visit();
        clientPage.getFilterField().type(organizationName);
        clientPage.getClientItem().contains(organizationName);
    })
})