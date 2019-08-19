class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }    

    openUserDropDown() {
        return cy.get('[id="loginForm.userId"]');
    }

    openRoleDropDown() {
        return cy.get('[id="loginForm.role"]');
    }
}

export default LoginPage;
