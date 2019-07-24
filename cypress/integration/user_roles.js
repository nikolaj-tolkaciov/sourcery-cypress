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
        cy.get('[aria-label="Dovilė Martinkutė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();                          //change roles
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');         

        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Dovile Martinkute');
        cy.get('.main-nav').find('li').should('have.length', 1);                //changes according to role
        cy.get('.calendar__date').contains(new Date().getDate());
        cy.get('[aria-current = true]').contains("Time Logging");
        cy.get('[aria-current = true]').should('have.css', 'color', 'rgb(64, 76, 237)');
        //cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');


//lougout
cy.get('.user-info__title').click({force:true});
cy.get('[id="logout-button"]').click();

//next user team lead
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dovilė Martinkutė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();                          //change roles
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');         

        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Dovile Martinkute');
        cy.get('.main-nav').find('li').should('have.length', 2);                //changes according to role
        cy.get('.calendar__date').contains(new Date().getDate());
        cy.get('[aria-current = true]').contains("Time Logging");
        cy.get('[aria-current = true]').should('have.css', 'color', 'rgb(64, 76, 237)');


//lougout
cy.get('.user-info__title').click({force:true});
cy.get('[id="logout-button"]').click({force:true});


//next user manager
cy.get('[id="loginForm.userId"]').click({force:true});
cy.get('[aria-label="Dovilė Martinkutė"]').click();
cy.get('[id="loginForm.role"]').click({force:true});
cy.get('[aria-label="Manager"]').click();                          //change roles
cy.get('[type="submit"]').click();

cy.url().should('include', '/time-logging');         

cy.get('.calendar').should('be.visible')
cy.get('.tile.form').should('be.visible')
cy.get('.user-info__title').contains('Dovile Martinkute');
cy.get('.main-nav').find('li').should('have.length', 5);                //changes according to role
cy.get('[aria-current = true]').contains("Time Logging");
cy.get('[aria-current = true]').should('have.css', 'color', 'rgb(64, 76, 237)');

//lougout
cy.get('.user-info__title').click({force:true});
cy.get('[id="logout-button"]').click({force:true});

//next user accountant
cy.get('[id="loginForm.userId"]').click({force:true});
cy.get('[aria-label="Dovilė Martinkutė"]').click();
cy.get('[id="loginForm.role"]').click({force:true});
cy.get('[aria-label="Accountant"]').click();                          //change roles
cy.get('[type="submit"]').click();

cy.url().should('include', '/time-logging');         

cy.get('.calendar').should('be.visible')
cy.get('.tile.form').should('be.visible')
cy.get('.user-info__title').contains('Dovile Martinkute');
cy.get('.main-nav').find('li').should('have.length', 5);                //changes according to role

cy.get('[aria-current = true]').contains("Time Logging");
cy.get('[aria-current = true]').should('have.css', 'color', 'rgb(64, 76, 237)');

//lougout
cy.get('.user-info__title').click({force:true});
cy.get('[id="logout-button"]').click({force:true});


//next user admin
cy.get('[id="loginForm.userId"]').click({force:true});
cy.get('[aria-label="Dovilė Martinkutė"]').click();
cy.get('[id="loginForm.role"]').click({force:true});
cy.get('[aria-label="Admin"]').click();                          //change roles
cy.get('[type="submit"]').click();

cy.url().should('include', '/time-logging');         

cy.get('.calendar').should('be.visible')
cy.get('.tile.form').should('be.visible')
cy.get('.user-info__title').contains('Dovile Martinkute');
cy.get('.main-nav').find('li').should('have.length', 6);                //changes according to role


    })
})