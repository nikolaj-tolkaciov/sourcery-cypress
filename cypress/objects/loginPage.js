class LoginPage {

    getEmailField() {
        return cy.get('[aria-label="Email"]');
    }
    getPasswordField() {
        return cy.get('[aria-label="Password"]');
    }
    getLoginButton() {
        return cy.get('.v-btn__content');
    }
}

export default LoginPage;