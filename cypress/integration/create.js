describe('Sourcebooks login', function() {

    it('Admin should create a new client', function () {

        const organizationName = 'task ' + Date.now();

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Saulė Raudytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.get('[href="/clients"]').click();
        cy.get('.btn').click();

        cy.get('[id="clientDetailsForm.organization"]').type(organizationName);
        cy.get('[id="clientDetailsForm.contacts_firstName_0"]').type(organizationName + '1');
        cy.get('[id="clientDetailsForm.contacts_lastName_0"]').type(organizationName + '2');
        cy.get('[id="clientDetailsForm.contacts_email_0"]').type(organizationName + '@email.com');
        cy.get('[type="submit"]').click();
        cy.wait(1000);
        cy.url().should('to.not.equal',('/clients/create'));

        cy.visit('/clients');
        cy.get('.field__text').first().click().type(organizationName);
        cy.get('[title=' + organizationName +']').should('exist');
    })
})