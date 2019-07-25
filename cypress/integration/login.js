describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })
    const roles = [['User', 1], ['Team Lead', 2], ['Manager', 5], ['Accountant',5], ['Admin',6]];
    for(let x = 0; x < 5; x++){
        it(roles[x][0] + ' can log in', function () {
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});               
            cy.get('[aria-label="Berta Rėja Butvilaitė"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get('[aria-label="' + roles[x][0] + '"]').click();
            cy.get('[type="submit"]').click();

            cy.url().should('include', '/time-logging');
            cy.get('.page__title').contains('Timesheets');
            cy.get('.calendar').should('be.visible');
            cy.get('.tile.form').should('be.visible');
            cy.get('.user-info__title').contains('Berta Reja Butvilaite');
            cy.get('.main-nav').find('li').should('have.length', roles[x][1]);
            cy.get('.calendar--today').contains(new Date().getDate());
            cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
        })
    }
})