import T3Page from '../objects/t3Page';

cont t3Page = new T3Page();

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

it('Should let admin create new task', function () {

    cy.visit('/');
    cy.get('[id="loginForm.userId"]').click({force:true});
    cy.get('[aria-label="Ieva Stonkaitė"]').click();
    cy.get('[id="loginForm.role"]').click({force:true});
    cy.get('[aria-label="Admin"]').click();
    cy.get('[type="submit"]').click();
    cy.visit('/tasks');
    cy.get('[type="button"]').contains("Create Task").click();

    cy.get('[id="taskDetailsForm.name"]').type('Task Name 777');
    cy.get('[id="taskDetailsForm.description"]').type('Task Description 777');
    cy.get('div.Select-value').click();
    cy.get('.Select-value').contains('Yes');

})