describe('Sourcebooks login', function() {

    it('Should be able to log in with a role admin and check if "Time Logging" color is blue', function() {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Aistė Laugalytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Aiste Laugalyte');
        cy.get('.main-nav').find('li').should('have.length', 6);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    })

    it('Should be able to log in with a role accoutant and check if "Time Logging" color is blue', function() {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Aistė Laugalytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Aiste Laugalyte');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    })

    it('Should be able to log in with a role manager and check if "Time Logging" color is blue', function() {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Aistė Laugalytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Aiste Laugalyte');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    })

    it('Should be able to log in with a role team lead and check if "Time Logging" color is blue', function() {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Aistė Laugalytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Aiste Laugalyte');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    })

    it('Should be able to log in with a role user and check if "Time Logging" color is blue', function() {
        
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Aistė Laugalytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Aiste Laugalyte');
        cy.get('.main-nav').find('li').should('have.length', 1);
        cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    })
})