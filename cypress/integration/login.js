describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    const roles = [
        {name:'User', numberOfTabs: 1},
        {name:"Team Lead", numberOfTabs: 2},
        {name:'Manager', numberOfTabs: 5},
        {name:'Accountant', numberOfTabs: 5},
        {name:'Admin', numberOfTabs: 6}
    ]

    for(let role of roles){

        it(`Should be able to login with role ${role.name}`, function () {

            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get('[aria-label="Miglė Budrytė"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get(`[aria-label="${role.name}"]`).click();
            cy.get('[type="submit"]').click();
    
            cy.url().should('include', '/time-logging');
            cy.get('.page__title').contains('Timesheets');
            cy.get('.calendar').should('be.visible');
            cy.get('.tile.form').should('be.visible');
            cy.get('.user-info__title').contains('Migle Budryte');
            cy.get('.main-nav').find('li').should('have.length', role.numberOfTabs);
    
            cy.get('.calendar--today').contains(new Date().getDate());

            cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
    
            cy.get('.user-info__title').click({force:true});
            cy.get('[id="logout-button"]').click({force:true});
        })
    }  
})