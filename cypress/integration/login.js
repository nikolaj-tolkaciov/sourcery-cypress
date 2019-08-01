describe('Sourcebooks login', function() {
    
    var today = new Date();
    const roles = ['User','Team Lead','Manager','Accountant','Admin'];
    const Tabs = ['1','2','5','5','6'];
    // added unnecessary comment
    
    for(let i = 0; i < roles.length;i++){
    it('Should be able to login with role ' + roles[i] + 
       ' , check current day and active tab color' , function () {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Modestas Kmieliauskas"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get(`[aria-label="${roles[i]}"]`).click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Modestas Kmieliauskas');
        cy.get('.main-nav').find('li').should('have.length', Tabs[i]);
        cy.get('.calendar--today').contains(today.getDate());
       cy.get('.main-nav__link--active').should('have.css','color','rgb(64, 76, 237)');
    })
}
})