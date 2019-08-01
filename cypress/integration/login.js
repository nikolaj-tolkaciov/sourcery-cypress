describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Team Lead', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dominykas Poškus"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets');
        cy.get('.calendar').should('be.visible');
        cy.get('.tile.form').should('be.visible');
        cy.get('.user-info__title').contains('Dominykas Poškus');
        cy.get('.main-nav').find('li').should('have.length', 2);
    })

    it('Calendar should show todays date', function(){
        cy.get('.calendar--today').find('.calendar__date').contains((new Date()).getDate());
    })

    let Roles = [
        {
            "name": "User",
            "tabs": 1
        },
        {
            "name": "Team Lead",
            "tabs": 2
        },
        {
            "name": "Manager",
            "tabs": 5
        },
        {
            "name": "Accountant",
            "tabs": 5
        }, 
        {
            "name": "Admin",
            "tabs": 6
        }];

    for(let i = 0; i < Roles.length; i++){
        it('Verify that ' + Roles[i].name + ' can log in and should see ' + Roles[i].tabs + ' tabs', function(){
            
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dominykas Poškus"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="'+ Roles[i].name +'"]').click();
        cy.get('[type="submit"]').click();

        cy.get('.user-info__title').contains('Dominykas Poškus');
        cy.get('.main-nav').find('li').should('have.length', Roles[i].tabs);
        cy.get('.main-nav__link--active').contains("Time Logging");
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');

        cy.get('.user-info__title').click();
        cy.get('[id="logout-button"]').click();
        }
    )
}
})