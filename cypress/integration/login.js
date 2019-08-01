describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    // Tab count test
    var roles = [
        { name: 'User', 'tabCount': 1 }, 
        { name: 'Team Lead', tabCount: 2 }, 
        { name: 'Manager', tabCount: 5 }, 
        { name: 'Accountant', tabCount: 5}, 
        { name: 'Admin', tabCount: 6 }
    ];

    for (let i = 0; i < roles.length; i++) {
        it('Should display ' + roles[i].tabCount + ' tabs when logged in as ' + roles[i].name + '.', function () {
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get('[aria-label="Marius Lastauskas"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get('[aria-label="' + roles[i].name + '"]').click();
            cy.get('[type="submit"]').click();

            cy.url().should('include', '/time-logging');
            cy.get('.page__title').contains('Timesheets')
            cy.get('.calendar').should('be.visible')
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains('Marius Lastauskas');
            cy.get('.main-nav').find('li').should('have.length', roles[i].tabCount);
            
            cy.get('.main-nav__link--active').contains('Time Logging');
            cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
        })
    }
    
    it('Should be displaying todays date in Time Logging page', function () {
        const today = new Date();
        const date = today.getDate();

        cy.get('.calendar--today').find('.calendar__date').contains(date);
    })
})