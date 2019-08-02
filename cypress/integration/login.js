import LoginPage from '../objects/LoginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
    
        loginPage.visit();

        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible');
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getUserIdForm().click({force:true});
        loginPage.getSpecificUserFromDropDown('Rasa Kapačinskaitė').click();
        loginPage.getUserRoleForm().click({force:true});
        loginPage.getUserRoleFromDropDown('User').click();
        loginPage.getSubmitButton().click();

        loginPage.url().should('include', '/time-logging');
        loginPage.getPageTitle().contains('Timesheets');
        loginPage.getItemCalendar().should('be.visible');
        loginPage.getFormTitle().should('be.visible');
        loginPage.getUserInfoTitle().contains('Rasa Kapacinskaite');
        loginPage.getMainNavigationBar().find('li').should('have.length', 1);
    })
})

describe('Sourcebooks login - old', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Tem Lead', function () {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Rasa Kapačinskaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Rasa Kapacinskaite');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.main-nav__link--active').should('have.css','color', 'rgb(64, 76, 237)');       
    })


     it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Manager', function () {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Rasa Kapačinskaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Rasa Kapacinskaite');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.css','color', 'rgb(64, 76, 237)');       
    })


     it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Accountant', function () {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Rasa Kapačinskaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Rasa Kapacinskaite');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('.main-nav__link--active').should('have.css','color', 'rgb(64, 76, 237)');       
    })
    

    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Admin', function () {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Rasa Kapačinskaitė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Rasa Kapacinskaite');
        cy.get('.main-nav').find('li').should('have.length', 6);
        let today = new Date();
        cy.get('.calendar--today').find('.calendar__date').contains(today.getDate());         
        cy.get('.main-nav__link--active').should('have.css','color', 'rgb(64, 76, 237)');   
           
    })
 })