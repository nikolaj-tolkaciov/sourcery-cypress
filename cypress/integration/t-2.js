describe('Sourcebooks login with my user and different roles', function() {

    it('Should be able to login with my user with role admin', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jelena Černyšova"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jelena Cernyšova')
        cy.get('.main-nav').find('li').should('have.length', 6)
        cy.get('a[class="main-nav__link main-nav__link--active"]').contains('Time Logging')
        cy.get('a[class="main-nav__link main-nav__link--active"]').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with my user with role accountant', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jelena Černyšova"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jelena Cernyšova')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('a[class="main-nav__link main-nav__link--active"]').contains('Time Logging')
        cy.get('a[class="main-nav__link main-nav__link--active"]').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with my user with role manager', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jelena Černyšova"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jelena Cernyšova')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('a[class="main-nav__link main-nav__link--active"]').contains('Time Logging')
        cy.get('a[class="main-nav__link main-nav__link--active"]').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with my user with role team lead', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jelena Černyšova"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jelena Cernyšova')
        cy.get('.main-nav').find('li').should('have.length', 2)
        cy.get('a[class="main-nav__link main-nav__link--active"]').contains('Time Logging')
        cy.get('a[class="main-nav__link main-nav__link--active"]').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with my user with role user', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Jelena Černyšova"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Jelena Cernyšova')
        cy.get('.main-nav').find('li').should('have.length', 1)
        cy.get('a[class="main-nav__link main-nav__link--active"]').contains('Time Logging')
        cy.get('a[class="main-nav__link main-nav__link--active"]').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })
})