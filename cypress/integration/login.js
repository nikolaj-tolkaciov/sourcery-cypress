describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Check login as Admin and if the day is today', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Edvinas Kveselys"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Edvinas Kveselys');
        cy.get('.main-nav').find('li').should('have.length', 6);

        const today = new Date();
        const day = today.getDate();
        cy.get('.calendar__date').contains(day);
    })

    it('Verify "User" can log in and should see appropriate tabs', function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Edvinas Kveselys"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Edvinas Kveselys');
        cy.get('.main-nav').find('li').should('have.length', 1);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
    })

    it('Verify "Team Lead" can log in and should see appropriate tabs', function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Edvinas Kveselys"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Edvinas Kveselys');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
    })

    it('Verify "Manager" can log in and should see appropriate tabs', function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Edvinas Kveselys"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Edvinas Kveselys');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
    })
    it('Verify "Accountant" can log in and should see appropriate tabs', function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Edvinas Kveselys"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Edvinas Kveselys');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
    })
    it('Verify "Admin" can log in and should see appropriate tabs', function() {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Edvinas Kveselys"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();
        cy.get('.user-info__title').contains('Edvinas Kveselys');
        cy.get('.main-nav').find('li').should('have.length', 6);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
    })
})