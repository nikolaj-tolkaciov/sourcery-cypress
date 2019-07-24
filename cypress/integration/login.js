describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Miglė Budrytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Migle Budryte');
        cy.get('.main-nav').find('li').should('have.length', 2);

        cy.get('.calendar--today').contains(new Date().getDate());
    })

})