class T4Page
{
    typeOrganizatiomNameInSearch(name)
    {
        return cy.get(".field__text--small").first().type(name);
    }

    checkIfListIsEmpty()
    {
        return cy.get('.ag-body-container').find('div').should('have.length', 0);
    }

    getCreateClientButton()
    {
        return cy.get(".btn").contains("Create Client");
    }

    fillInMandatoryFields(organizationName, firstName, lastName, email)
    {
        cy.get(".field__text").get('[placeholder="Enter organization name"]').type(organizationName);
        cy.get(".field__text").get('[placeholder="Enter first name"]').type(firstName);
        cy.get(".field__text").get('[placeholder="Enter last name"]').type(lastName);
        cy.get(".field__text").get('[placeholder="Enter email"]').type(email);
    }

    getSaveButton()
    {
        return cy.get(".btn").contains("Save");
    }

    checkIfNewClientExists(organizationName)
    {
        cy.get('[title="' + organizationName + '"]').contains(organizationName);
    }
}

export default T4Page