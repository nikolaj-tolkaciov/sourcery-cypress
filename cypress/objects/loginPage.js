class LoginPage {
    visit() {
        cy.visit('/')
    }
    submitLogin() {
        return cy.get('[type="submit"]')
    }
 
    getValidationError() {
        return cy.get('.Select.not-valid')
    }
    getUser(){
        return cy.get('[id="loginForm.userId"]')
    }
   getUserName(userName) {
    return cy.get(`[aria-label="${userName}"]`)
   }
   getRole() {
       return cy.get('[id="loginForm.role"]')
   }
   getRoleLogin(role) {
    return cy.get(`[aria-label="${role}"]`)
   }
 
 }
 
 export default LoginPage