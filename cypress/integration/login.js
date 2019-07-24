describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    const rolesArr= [['User', 1], ["Team Lead", 2], ['Manager', 5], ['Accountant', 5], ['Admin', 6]]

    for (let i=0; i<rolesArr.length;i++) {

        it('Should be able to login with each role User', function () {

                console.log(i); 
                cy.visit('/');
                cy.get('[id="loginForm.userId"]').click({force:true});
                cy.get('[aria-label="Vitalij Janukevič"]').click();
                cy.get('[id="loginForm.role"]').click({force:true});
                cy.get(`[aria-label="${rolesArr[i][0]}"]`).click();
                cy.get('[type="submit"]').click();

                cy.url().should('include', '/time-logging');
                cy.get('.page__title').contains('Timesheets')
                cy.get('.calendar').should('be.visible')
                cy.get('.tile.form').should('be.visible')
                cy.get('.user-info__title').contains('Vitalij Janukevic');
                cy.get('.main-nav').find('li').should('have.length', rolesArr[i][1]);
                let currentDate = new Date();
                cy.get('.calendar__date').contains(currentDate.getDate());
                cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
                cy.get('.user-info__title').click({force:true});
                cy.get('[id="logout-button"]').click({force:true});

        })

    }
})