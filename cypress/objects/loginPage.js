class LoginPage {   //klasiu pav is didziosios
    visit() {
        cy.visit('/');  //homepage
    }
    getValidationError() {
        return cy.get('.Select.not-valid');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
    getUserID() {
        return cy.get('[id="loginForm.userId"]');
    }
    getUserOption(userName) {
        return cy.get(`[aria-label="${userName}"]`);
    }
    getRole() {
        return cy.get('[id="loginForm.role"]');
    }
    getRoleOption(user) {
        return cy.get(`[aria-label=${user}]`);
    }
}

export default LoginPage;
//vienas psl vienas objektas