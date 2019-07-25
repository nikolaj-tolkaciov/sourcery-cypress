class LoginPage {

    visit() {
        cy.visit('/');
    }

    getValidationError() {
       return cy.get('.Select.not-valid');
    }

    getLoginbutton() {
       return cy.get('[type="submit"]');
    }

    getUserNameDropdown() {
        return cy.get('[id="loginForm.userId"]');
    }

    getUserName() {
        return cy.get('[aria-label="Vitalij Janukevič"]');
    }

    getRoleDropdown() {
        return cy.get('[id="loginForm.role"]');
    }

    getRole(rolesArr, i) {
        return cy.get(`[aria-label="${rolesArr[i][0]}"]`);
    }

    getRole(role) {
        return cy.get(`[aria-label="${role}"]`)
    }

}

export default LoginPage