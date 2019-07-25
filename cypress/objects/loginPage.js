class LoginPage {
    visit() {
        cy.visit('/')
    }

getValidationError() {
    return cy.get('.Select.not-valid')
}

getSubmit() {
    return cy.get('[type="submit"]')
}

getUserOption(userName) {
    return cy.get(`[aria-label="${userName}"]`)
}

getUserForm() {
    return cy.get('[id="loginForm.userId"]')
}

getLoginForm() {
    return cy.get('[id="loginForm.role"]')
}

getLabel(role) {
    return cy.get(`[aria-label="${role}"]`)
}

getSubmit() {
    return cy.get('[type="submit"]')
}
}

export default LoginPage
