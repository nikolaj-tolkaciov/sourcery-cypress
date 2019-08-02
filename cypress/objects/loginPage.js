class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserFieldSelectorById() {
        return cy.get('[id="loginForm.userId"]');
    }

    getRoleFieldSelectorById(){
        return cy.get('[id="loginForm.role"]');
    }

    getUserOptionFromDropdown(user) {
        return cy.get(`[aria-label="${user}"]`);
    }

    getRolesOptionFromDropdown(role) {
        return cy.get(`[aria-label="${role}"]`);
    }

    getButtonByType(type) {
        return cy.get(`[type="${type}"]`);
    }
}

export default LoginPage;