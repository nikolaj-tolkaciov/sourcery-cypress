describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with user Jaunius_Mykolaitis to role User', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jaunius Mykolaitis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jaunius Mykolaitis');
        cy.get('.main-nav').find('li').should('have.length', 1);

        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        cy.get('.calendar--today').find('span').contains(new Date().getDate());
    })

    it('Should be able to login with user Jaunius_Mykolaitis to role Admin', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jaunius Mykolaitis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jaunius Mykolaitis');
        cy.get('.main-nav').find('li').should('have.length', 6);

        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        cy.get('.calendar--today').find('span').contains(new Date().getDate());
    })

    it('Should be able to login with user Jaunius_Mykolaitis to role Team Lead', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jaunius Mykolaitis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jaunius Mykolaitis');
        cy.get('.main-nav').find('li').should('have.length', 2);

        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        cy.get('.calendar--today').find('span').contains(new Date().getDate());
    })

    it('Should be able to login with user Jaunius_Mykolaitis to role Manager', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jaunius Mykolaitis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jaunius Mykolaitis');
        cy.get('.main-nav').find('li').should('have.length', 5);

        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        cy.get('.calendar--today').find('span').contains(new Date().getDate());
    })
    
    it('Should be able to login with user Jaunius_Mykolaitis to role Accountant', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jaunius Mykolaitis"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jaunius Mykolaitis');
        cy.get('.main-nav').find('li').should('have.length', 5);

        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
        cy.get('.calendar--today').find('span').contains(new Date().getDate());
    })
})