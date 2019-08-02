class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }

    getSpecificValueFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`);
    }

    openUserDropDown() {
        return cy.get('[id="loginForm.userId"]');
    }

    openRoleDropDown() {
        return cy.get('[id="loginForm.role"]');
    }
}

export default LoginPage;
