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

  const roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];
  const tabs = [1, 2, 5, 5, 6];

  roles.forEach(function(item, i) {
    it(`Verify role ${item}, if it can log in and see appropriate tabs`, function() {
      cy.visit('/');
      cy.get('[id="loginForm.userId"]').click({ force: true });
      cy.get('[aria-label="Mindaugas Maceika"]').click();
      cy.get('[id="loginForm.role"]').click({ force: true });
      cy.get(`[aria-label="${item}"]`).click();
      cy.get('[type="submit"]').click();

      cy.url().should('include', '/time-logging');
      cy.get('.page__title').contains('Timesheets');
      cy.get('.calendar').should('be.visible');
      cy.get('.user-info__title').contains('Mindaugas Maceika');
      cy.get('.main-nav')
        .find('li')
        .should('have.length', tabs[i]);
      cy.get('.main-nav__link--active')
        .should('have.css', 'color')
        .and('eq', 'rgb(64, 76, 237)');
    });
  });
});
