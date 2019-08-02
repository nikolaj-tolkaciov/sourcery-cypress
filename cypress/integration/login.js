import LoginPage from '../objects/loginPage';

const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        //cy.visit('/');
        loginPage.getUserValidationIndicator().should('not.visible');
        //cy.get('.Select.not-valid').should('not.visible');
        loginPage.getSubmitButton().click();
        //cy.get('[type="submit"]').click();
        loginPage.getUserValidationIndicator().should('be.visible');
        //cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
       // cy.visit('/');
        loginPage.getUserFieldSelection().click({force:true});
       // cy.get('[id="loginForm.userId"]').click({force:true});
       loginPage.getSpecificUserFromDropDown("Agnė Gadeikienė").click();
       //cy.get('[aria-label="Demo User"]').click();
       loginPage.getUserRoleSelection().click({force:true});
       //cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getSpecificUserFromDropDown("User").click();
       // cy.get('[aria-label="User"]').click();
       loginPage.getSubmitButton().click();
       //cy.get('[type="submit"]').click();

    

        cy.url().should('include', '/time-logging');
        loginPage.getPageTitleTimesheets().contains('Timesheets');
        //cy.get('.page__title').contains('Timesheets')
        loginPage.getVisibleCalendar().should('be.visible');
       // cy.get('.calendar').should('be.visible')
       loginPage.getTileFormVisible().should('be.visible');
        //cy.get('.tile.form').should('be.visible')
        loginPage.getUserVisibleOnTop().contains('Agne Gadeikiene');
        //cy.get('.user-info__title').contains('Demo User');
        loginPage.getNavigationBarCount().find('li').should('have.length', 1);
        //bcy.get('.main-nav').find('li').should('have.length', 1);
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.getUserFieldSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Agnė Gadeikienė").click();
        loginPage.getUserRoleSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        cy.url().should('include', '/time-logging');
        loginPage.getUserVisibleOnTop().contains('Agne Gadeikiene');
        loginPage.getNavigationBarCount().find('li').should('have.length', 2);
        loginPage.getTimeLoggingColorBlue().should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit();
        loginPage.getUserFieldSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Agnė Gadeikienė").click();
        loginPage.getUserRoleSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Manager").click();
        loginPage.getSubmitButton().click();

        cy.url().should('include', '/time-logging');
        loginPage.getUserVisibleOnTop().contains('Agne Gadeikiene');
        loginPage.getNavigationBarCount().find('li').should('have.length', 5);
        loginPage.getTimeLoggingColorBlue().should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Accountant', function () {

        loginPage.visit();
        loginPage.getUserFieldSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Agnė Gadeikienė").click();
        loginPage.getUserRoleSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Accountant").click();
        loginPage.getSubmitButton().click();

        cy.url().should('include', '/time-logging');
        loginPage.getUserVisibleOnTop().contains('Agne Gadeikiene');
        loginPage.getNavigationBarCount().find('li').should('have.length', 5);
        loginPage.getTimeLoggingColorBlue().should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Admin', function () {

        loginPage.visit();
        loginPage.getUserFieldSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Agnė Gadeikienė").click();
        loginPage.getUserRoleSelection().click({force:true});
        loginPage.getSpecificUserFromDropDown("Admin").click();
        loginPage.getSubmitButton().click();

        cy.url().should('include', '/time-logging');
        loginPage.getUserVisibleOnTop().contains('Agne Gadeikiene');
        loginPage.getNavigationBarCount().find('li').should('have.length', 6);
        loginPage.getTimeLoggingColorBlue().should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })
})