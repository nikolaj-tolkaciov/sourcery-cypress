class LoginPage {
    visit() {
        cy.visit('/')
    }
    submit () {
    return cy.get('[type="submit"]')
    }
    getLoginForm () {
        return cy.get(`[id="loginForm.userId"]`)
    }
    getUser () {
        return cy.get(`[aria-label="Benediktas Gilis"]`)
    }
    getLoginRole () {
        return cy.get(`[id="loginForm.role"]`)
    }
    getUserRole () {
        return cy.get(`[aria-label="Admin"]`)
    }
} 

export default LoginPage