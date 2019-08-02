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

    getUserFromDropdown(userName) {
        return cy.get(`[aria-label="${userName}"]`);
    }

    getUserDropdown() {
        return cy.get('[id="loginForm.userId"]');
    }

    getRoleDropdown() {
        return cy.get('[id="loginForm.role"]');
    }

    getRoleFromDropdown(role) {
        return cy.get(`[aria-label="${role}"]`);
    }
}

export default LoginPage;