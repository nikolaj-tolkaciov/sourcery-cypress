describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    const roles = [["User", 1], ["Team Lead", 2], ["Manager", 5], ["Accountant", 5], ["Admin", 6]];
  
    for (let role of roles) {
        it(`Should be able to login with role ${role[0]}`, function () {

                cy.visit('/');
                cy.get('[id="loginForm.userId"]').click({force:true});
                cy.get('[aria-label="Raminta Urbonavičiūtė"]').click();
                cy.get('[id="loginForm.role"]').click({force:true});
                cy.get(`[aria-label="${role[0]}"]`).click();
                cy.get('[type="submit"]').click();

                cy.url().should('include', '/time-logging');
                cy.get('.page__title').contains('Timesheets');
                cy.get('.calendar').should('be.visible');
                cy.get('.tile.form').should('be.visible');
                cy.get('.user-info__title').contains('Raminta Urbonaviciute');
                cy.get('.main-nav').find('li').should('have.length', role[1]);

                cy.get('[aria-current=true]').contains("Time Logging");
                cy.get('[aria-current=true]').should('have.css', 'color', 'rgb(64, 76, 237)');

                cy.get('[title="Raminta Urbonaviciute"]').click();
                cy.get('[id="logout-button"]').click();
         })
    }
})