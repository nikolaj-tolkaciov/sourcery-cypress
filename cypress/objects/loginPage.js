class LoginPage {
    visitLoginPage() {
        cy.visit('/');
    }

    getUserField() {
        return cy.get('[id="loginForm.userId"]');
    }

    getRoleField(){
        return cy.get('[id="loginForm.role"]');
    }

    getUserOptionFromDropdown(user) {
        return cy.get(`[aria-label="${user}"]`);
    }

    getRolesOptionFromDropdown(role) {
        return cy.get(`[aria-label="${role}"]`);
    }

}

export default LoginPage;