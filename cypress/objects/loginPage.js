class LoginPage {   //klasiu pav is didziosios
    visit() {
        cy.visit('/');  //homepage
    }
    getValidationError() {
        return cy.get('.Select.not-valid');
    }
    getSubmit() {
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
    getRoleOption() {
        return cy.get('[aria-label="User"]');
    }
}

export default LoginPage;
//vienas psl vienas objektas