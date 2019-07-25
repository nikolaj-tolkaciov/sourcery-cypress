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
        cy.get('[aria-label="Asta Radžiuvienė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Asta Radžiuviene');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.calendar--today').contains(new Date().getDate());
    })
})

it('Should be able to login with role User', function () {

    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({force:true});
    cy.get('[aria-label="Asta Radžiuvienė"]').click();
    cy.get('[id="loginForm.role"]').click({force:true});
    cy.get('[aria-label="User"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets')
    cy.get('.calendar').should('be.visible')
    cy.get('.tile.form').should('be.visible')
    cy.get('.user-info__title').contains('Asta Radžiuviene');
    cy.get('.main-nav').find('li').should('have.length', 1);
    cy.get('.calendar--today').contains(new Date().getDate());
    cy.get('.main-nav__link--active').contains('Time Logging');
    cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
})

it('Should be able to login with role Team Lead', function () {

    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({force:true});
    cy.get('[aria-label="Asta Radžiuvienė"]').click();
    cy.get('[id="loginForm.role"]').click({force:true});
    cy.get('[aria-label="Team Lead"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets')
    cy.get('.calendar').should('be.visible')
    cy.get('.tile.form').should('be.visible')
    cy.get('.user-info__title').contains('Asta Radžiuviene');
    cy.get('.main-nav').find('li').should('have.length', 2);
    cy.get('.calendar--today').contains(new Date().getDate());
    cy.get('.main-nav__link--active').contains('Time Logging');
    cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
    cy.get('.main-nav__link').contains('Time Entries');

   
})

it('Should be able to login with role Manager', function () {

    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({force:true});
    cy.get('[aria-label="Asta Radžiuvienė"]').click();
    cy.get('[id="loginForm.role"]').click({force:true});
    cy.get('[aria-label="Manager"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets')
    cy.get('.calendar').should('be.visible')
    cy.get('.tile.form').should('be.visible')
    cy.get('.user-info__title').contains('Asta Radžiuviene');
    cy.get('.main-nav').find('li').should('have.length', 5);
    cy.get('.calendar--today').contains(new Date().getDate());
    cy.get('.main-nav__link--active').contains('Time Logging');
    cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
    cy.get('.main-nav__link').contains('Time Entries');
    cy.get('.main-nav__link').contains('Invoices');
    cy.get('.main-nav__link').contains('Projects');
    cy.get('.main-nav__link').contains('Client');

})
it('Should be able to login with Accountant', function () {

    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({force:true});
    cy.get('[aria-label="Asta Radžiuvienė"]').click();
    cy.get('[id="loginForm.role"]').click({force:true});
    cy.get('[aria-label="Accountant"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets')
    cy.get('.calendar').should('be.visible')
    cy.get('.tile.form').should('be.visible')
    cy.get('.user-info__title').contains('Asta Radžiuviene');
    cy.get('.main-nav').find('li').should('have.length', 5);
    cy.get('.calendar--today').contains(new Date().getDate());
    cy.get('.main-nav__link--active').contains('Time Logging');
    cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
    cy.get('.main-nav__link').contains('Time Entries');
    cy.get('.main-nav__link').contains('Invoices');
    cy.get('.main-nav__link').contains('Projects');
    cy.get('.main-nav__link').contains('Client');

})

it('Should be able to login with Admin', function () {

    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({force:true});
    cy.get('[aria-label="Asta Radžiuvienė"]').click();
    cy.get('[id="loginForm.role"]').click({force:true});
    cy.get('[aria-label=Admin]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets')
    cy.get('.calendar').should('be.visible')
    cy.get('.tile.form').should('be.visible')
    cy.get('.user-info__title').contains('Asta Radžiuviene');
    cy.get('.main-nav').find('li').should('have.length', 6);
    cy.get('.calendar--today').contains(new Date().getDate());
    cy.get('.main-nav__link--active').contains('Time Logging');
    cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
    cy.get('.main-nav__link').contains('Time Entries');
    cy.get('.main-nav__link').contains('Invoices');
    cy.get('.main-nav__link').contains('Projects');
    cy.get('.main-nav__link').contains('Client');
    cy.get('.main-nav__link').contains('Tasks');
})