import Common from "../objects/common";
import ClientPage from "../objects/clientPage";

const common = new Common();
const clientPage = new ClientPage();

describe('New client creation by Admin', function() {

    beforeEach(function () {
        cy.loginAs('Admin');
        clientPage.visit();
    })

    const email = 'testingemail@testing.com';
    const uniqueString = common.getCurrentTimeStamp();

    it('Admin creates new client', function () {
        common.clickCertainButtonWithText('button','Create Client');

        clientPage.inputOrganization(uniqueString);
        clientPage.inputFirstName(uniqueString);
        clientPage.inputLastName(uniqueString);
        clientPage.inputHomePhone(uniqueString);
        clientPage.inputMobilePhone(uniqueString);
        clientPage.inputEmail(email);
        common.clickCertainButtonWithText('Submit','Save');
        common.checkIfUrlDoesNotInclude('/create');
    })

    it('Checking if a certain client was created', function() {
        common.filterNamesList(uniqueString);
        //clientPage.filterListByClients(uniqueString, uniqueString);
        clientPage.filterListByEmail(email);
        common.checkIfListContains(uniqueString);
        common.checkIfListContains(`${uniqueString}, ${uniqueString}`);
        common.checkIfListContains(email);
    })
})
        