describe('Sourcebooks login', function() {
  it('Should display validation for empty user after attempted loggin', function() {
    cy.visit('/');
    cy.get('.Select.not-valid').should('not.visible');
    cy.get('[type="submit"]').click();
    cy.get('.Select.not-valid').should('be.visible');
  });

  it('Should be able to login with role User', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Demo User"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="User"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets');
    cy.get('.calendar').should('be.visible');
    cy.get('.tile.form').should('be.visible');
    cy.get('.user-info__title').contains('Demo User');
    cy.get('.main-nav')
      .find('li')
      .should('have.length', 1);
  });

  it('Should validate what date is selected as “Today” on Time Logging page', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Demo User"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="Team Lead"]').click();
    cy.get('[type="submit"]').click();

    cy.visit('/time-logging');
    cy.get('.calendar--today.calendar--selected').contains(
      new Date().getDate()
    );
  });

  it('Verify role User, if it can log in and see appropriate tabs', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Mindaugas Maceika"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="User"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets');
    cy.get('.calendar').should('be.visible');
    cy.get('.user-info__title').contains('Mindaugas Maceika');
    cy.get('.main-nav')
      .find('li')
      .should('have.length', 1);
    cy.get('.main-nav__link--active')
      .should('have.css', 'color')
      .and('eq', 'rgb(64, 76, 237)');
  });

  it('Verify role Team Lead, if it can log in and see appropriate tabs', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Mindaugas Maceika"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="Team Lead"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets');
    cy.get('.calendar').should('be.visible');
    cy.get('.user-info__title').contains('Mindaugas Maceika');
    cy.get('.main-nav')
      .find('li')
      .should('have.length', 2);
    cy.get('.main-nav__link--active')
      .should('have.css', 'color')
      .and('eq', 'rgb(64, 76, 237)');
  });

  it('Verify role Manager, if it can log in and see appropriate tabs', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Mindaugas Maceika"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="Manager"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets');
    cy.get('.calendar').should('be.visible');
    cy.get('.user-info__title').contains('Mindaugas Maceika');
    cy.get('.main-nav')
      .find('li')
      .should('have.length', 5);
    cy.get('.main-nav__link--active')
      .should('have.css', 'color')
      .and('eq', 'rgb(64, 76, 237)');
  });

  it('Verify role Accountant, if it can log in and see appropriate tabs', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Mindaugas Maceika"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="Accountant"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets');
    cy.get('.calendar').should('be.visible');
    cy.get('.user-info__title').contains('Mindaugas Maceika');
    cy.get('.main-nav')
      .find('li')
      .should('have.length', 5);
    cy.get('.main-nav__link--active')
      .should('have.css', 'color')
      .and('eq', 'rgb(64, 76, 237)');
  });

  it('Verify role Admin, if it can log in and see appropriate tabs', function() {
    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Mindaugas Maceika"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="Admin"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/time-logging');
    cy.get('.page__title').contains('Timesheets');
    cy.get('.calendar').should('be.visible');
    cy.get('.user-info__title').contains('Mindaugas Maceika');
    cy.get('.main-nav')
      .find('li')
      .should('have.length', 6);
    cy.get('.main-nav__link--active')
      .should('have.css', 'color')
      .and('eq', 'rgb(64, 76, 237)');
  });
});
