import Common from '../objects/common';
import ClientPage from '../objects/clientPage';

const common = new Common();
const clientPage = new ClientPage();
const todaysDate = Cypress.moment().format('YYYY-DD-MM')

describe('Sourcebooks client creation by an Admin (T-4)', function() {

    it('Should be able to login with an Admin role, create a new client, and check if the new client is created', function () {

        cy.visit('/');
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown("Admin").click();
        common.getButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');

        cy.visit('/clients');
        clientPage.getCreateClientButton().click();
        clientPage.getOrganizationNameField().type('TestOrganizationName' + ' ' + todaysDate);
        clientPage.getContactsFirstNameField().type('TestFirstName' + ' ' + todaysDate);
        clientPage.getContactsLastNameField().type('TestLastName' + ' ' + todaysDate);
        clientPage.getContactsEmailField().type('EmailName' + todaysDate + "@email.com");
        common.getButton().click();

        cy.visit('/clients');
        clientPage.getOrganizationSearchField().type('TestOrganizationName' + ' ' + todaysDate);
        cy.wait(2000);
        clientPage.getCreatedClientName().contains('TestOrganizationName' + ' ' + todaysDate);
    })
   
})