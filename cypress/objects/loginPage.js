class LoginPage {
    visit() {
        cy.visit('/')
    }

    getValidationError() {
        return cy.get('.Select.not-valid')
    }

    getUserOption(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }
}

export default LoginPage