describe('Sourcebooks login', function() {

    let roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
    let tabs = [1, 2, 5, 5, 6];
    for(let i = 0; i < roles.length; i++) {
    it(`Verify user with role "${roles[i]}" log in, see selected date and see appropriate tab number`, function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Modestas Kmieliauskas"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get(`[aria-label="${roles[i]}"]`).click();
        cy.get('[type="submit"]').click();

        cy.get('.user-info__title').contains('Modestas Kmieliauskas');
        cy.get('.main-nav').find('li').should('have.length', tabs[i]);
        cy.get('.main-nav__link--active').contains("Time Logging");
        cy.get('.main-nav__link--active').should('have.css', 'color')
        .and('eq', 'rgb(64, 76, 237)')
        var date1 = new Date;
        cy.get('.calendar--today').find('.calendar__date').contains(date1.getDate());
    })
}
})