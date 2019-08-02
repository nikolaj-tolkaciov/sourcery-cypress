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
        cy.get('[aria-label="Demo User"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User');
        cy.get('.main-nav').find('li').should('have.length', 2);
    })
    
    it('Validate today\'s date', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Kamilė Stugytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        const today = new Date();
        const date = today.getDate();
        cy.get('.calendar--today').find('.calendar__date').contains(date);
    })

    it('Verify all user roles can log in and should see appropriate tabs', function () {
        
        const rolesArray = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];        

        function testFunction(currentRole) {
            
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get('[aria-label="Kamilė Stugytė"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get('[aria-label=\"' + currentRole + '\"]').click();
            cy.get('[type="submit"]').click();

            //checks if correct user name is displayed
            cy.get('.user-info__title').contains('Kamile Stugyte');

            //checks if correct number of tabs is displayed in menu list
            switch(currentRole) {
                case 'User' :
                    cy.get('.main-nav').find('li').should('have.length', 1);
                    break;
                case 'Team Lead' :
                    cy.get('.main-nav').find('li').should('have.length', 2);
                    break;
                case 'Manager' :
                    cy.get('.main-nav').find('li').should('have.length', 5);
                    break;
                case 'Accountant' :
                    cy.get('.main-nav').find('li').should('have.length', 5);
                    break;
                case 'Admin' :
                    cy.get('.main-nav').find('li').should('have.length', 6);
                    break;
            }

            //checks if Time logging item is selected
            cy.get('.main-nav__link--active').contains('Time Logging');
            //checks if it's marked in blue
            cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
            cy.get('[class="user-button"]').click();
            cy.get('[id="logout-button"]').click();
        }

        rolesArray.forEach(testFunction);        
    })
})