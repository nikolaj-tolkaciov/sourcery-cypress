class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid')
    }

    getLoginFieldUser() {
        return cy.get('[id="loginForm.userId"]')
    }
    
    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }

    getLoginFieldRole() {
        return  cy.get('[id="loginForm.role"]')
    }

    getUserRole(role) {
        return cy.get(`[aria-label="${role}"]`)
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }
}

export default LoginPage