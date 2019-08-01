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
        cy.get('[aria-label="Ieva Stonkaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Ieva Stonkaite');
        cy.get('.main-nav').find('li').should('have.length', 2);
    })

    it('Should show calendar date', function () {
        cy.get('.calendar--selected').find('span').contains(new Date().getDate());
    })

    it('Should verify all user roles can log in and should see appropriate tabs - USER', function () {
    
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Ieva Stonkaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Ieva Stonkaite');
        cy.get('.main-nav').find('li').should('have.length', 1); //tabu skaicius
        cy.url().should('include', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');        
    })

    it('Should verify all user roles can log in and should see appropriate tabs - TEAM LEAD', function () {
    
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Ieva Stonkaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Ieva Stonkaite');
        cy.get('.main-nav').find('li').should('have.length', 2); //tabu skaicius
        cy.url().should('include', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');        
    })

    it('Should verify all user roles can log in and should see appropriate tabs - MANAGER', function () {
    
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Ieva Stonkaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Ieva Stonkaite');
        cy.get('.main-nav').find('li').should('have.length', 5); //tabu skaicius
        cy.url().should('include', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');        
    })

    it('Should verify all user roles can log in and should see appropriate tabs - ACCOUNTANT', function () {
    
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Ieva Stonkaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Ieva Stonkaite');
        cy.get('.main-nav').find('li').should('have.length', 5); //tabu skaicius
        cy.url().should('include', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');        
    })

    it('Should verify all user roles can log in and should see appropriate tabs - ADMIN', function () {
    
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Ieva Stonkaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Ieva Stonkaite');
        cy.get('.main-nav').find('li').should('have.length', 6); //tabu skaicius
        cy.url().should('include', '/time-logging');
        cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');       
    })

})