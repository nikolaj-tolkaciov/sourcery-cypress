class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }

    getLoginFormButton() {
        return cy.get('[id="loginForm.userId"]');
    }

    getTimesheets() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }
    
    getTileForm() {
        return cy.get('.tile.form');
    }

    getLogin() {
        return cy.get('[id="loginForm.role"]');
    }
    
    getMainNamLink() {
        return cy.get('.main-nav__link--active');
    }
    getUserInfo() {
        return cy.get('.user-info__title');
    }

    getMainNav() {
        return cy.get('.main-nav');
    }

    getUrl() {
        return cy.url();
    }
    
    getLoginForm() {
        return cy.get('[id="loginForm.userId"]');
    }
    
    getUserLabel(userName) {
        return cy.get(`[aria-label="${userName}"]`);
    }





 }

 export default LoginPage;