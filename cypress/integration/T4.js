import Common from "../objects/common";

const common = new Common();

describe('New client creation by Admin', function() {

    beforeEach(function () {
        cy.loginAs('Admin');
    })

    it('Admin creates new client', function () {
        common.visit('/clients');
        common.clickCertainButton('button','Create Client');

        const uniqueString = common.generateAUniqueString();
        common.inputIntoASpecificField('clientDetailsForm.organization', uniqueString);
        common.inputIntoASpecificField('clientDetailsForm.contacts_firstName_0', uniqueString);
        common.inputIntoASpecificField('clientDetailsForm.contacts_lastName_0', uniqueString);
        common.inputIntoASpecificField('clientDetailsForm.contacts_homePhone_0', uniqueString);
        common.inputIntoASpecificField('clientDetailsForm.contacts_mobilePhone_0', uniqueString);
        common.inputIntoASpecificField('clientDetailsForm.contacts_email_0', 'testingemail@testing.com')
        common.clickCertainButton('Submit','Save');
        common.checkIfUrlDoesNotInclude('/clients/create');

        common.visit('/clients');
        common.filterListItemsByName(uniqueString);
        common.checkIfListContains(uniqueString);
    })
})
        