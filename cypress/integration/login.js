describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    const roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
    const menu = ['1', '2', '5', '5', '6'];
    let i = 0;
    roles.forEach((role) => {
        it('Verify all user roles can log in and should see appropriate tabs', function() {
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get('[aria-label="Dainius Gaidamavičius"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get(`[aria-label='${role}']`).click();
            cy.get('[type="submit"]').click();
            cy.get('.user-info__title').contains('Dainius Gaidamavicius'); 
            cy.get('.main-nav').find('li').should('have.length', menu[i]); 
            i += 1;           
            cy.get('.main-nav__link--active').should('have.css','color', 'rgb(64, 76, 237)');
        })
    })


})