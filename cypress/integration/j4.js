import T3Page from '../obj/t3Page';
import T4Page from '../obj/t4Page';
import LoginPage from '../obj/loginPage';
import Common from '../obj/common';

const t3page = new T3Page();
const t4page = new T4Page();
const loginPage = new LoginPage();
const common = new Common();

describe('Sourcebooks login', function() {

    beforeEach(function () {
        cy.loginAs("Admin");
        cy.visit('/');
    })

    it('Admin creates new client', function(){
        let organizationName = "orgName" + Math.random();
        let firstName = "firstName" + Math.random();
        let lastName = "lastName" + Math.random();
        let email = Math.random() + "@" + Math.random() + ".com";
        
        common.visitSpecificURL('/clients');

        t4page.typeOrganizatiomNameInSearch(organizationName);
        cy.wait(2000); // for some reason JS does not have enough time to load in, so this helps
        t4page.checkIfListIsEmpty();

        t4page.getCreateClientButton().click();
        t4page.fillInMandatoryFields(organizationName, firstName, lastName, email);
        t4page.getSaveButton().click();
        common.visitSpecificURL('/clients');
        t4page.typeOrganizatiomNameInSearch(organizationName);
        cy.wait(2000);
        t4page.checkIfNewClientExists(organizationName);

    })
})