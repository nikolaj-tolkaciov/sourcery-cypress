describe('Sourcebooks login', function() {

    it('T-4: Admin creates new client', function () {
        cy.visit('/clients');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dainius Gaidamavičius"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click();
        cy.get('[type="button"]').click();
     
    }) 
 
})