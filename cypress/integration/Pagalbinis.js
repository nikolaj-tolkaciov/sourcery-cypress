 // Dictionary with roles and values - number of tabs it has
 var roles = { "User":1, "Team Lead":2, "Manager":5, "Accountant":5, "Admin":6};
  
 //Mistake in the name
 var name = "Saulius Lipkevičius"; 
 var trueName = "Saulius Lipkevicius";

 //Looping from 0 to 4 , overall 5 steps. 
 for (let step = 0; step < Object.keys(roles).length ; step++) {  

    describe('Sourcebooks login', function() {

        it('Should display validation for empty user after attempted loggin', function () {
            
            cy.visit('/');
            cy.get('.Select.not-valid').should('not.visible')
            cy.get('[type="submit"]').click();
            cy.get('.Select.not-valid').should('be.visible')
        })

        it('Should be able to login with role User', function () {

            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get(`[aria-label="${name}"]`).click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get(`[aria-label="${Object.keys(roles)[step]}"]`).click();
            cy.get('[type="submit"]').click();

            //checking test case-part user name == name above
            cy.get('.user-info__title').contains(`${trueName}`);
            //Number of tabs comes from the dictionary initiliazed. Step helps to assign exact value from the dictionary
            cy.get('.main-nav').find('li').should('have.length', roles[Object.keys(roles)[step]]);
            cy.get('.main-nav__link--active').should('have.css', 'color','rgb(64, 76, 237)');

        })
    })
 }