class LoginPage {
    visit() {
        cy.visit('/');
    }

    getValidationError() {
        return cy.get('.Select.not-valid');
    }

    getUserDropdown(name) {
        cy.get('[id="loginForm.userId"]').click({force:true});
        return cy.get(`[aria-label="${name}"]`);
    }

    getRoleDropdown(role) {
        cy.get('[id="loginForm.role"]').click({force:true});
        return cy.get(`[aria-label="${role}"]`);
    }

    submit() {
        return cy.get('[type="submit"]');
    }

    logout(name) {
        cy.get(`[title="${name}"]`).click();
        cy.get('[id="logout-button"]').click();
    }
}

export default LoginPage;