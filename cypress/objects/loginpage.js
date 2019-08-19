class LoginPage {
    visit(){
      cy.visit('/')
    }
    getValidationError() {
      return cy.get('.Select.not-valid')
    }
    submitLoginButton() {
      return cy.get('[type="submit"]')
    }
    getValidation() {
      return cy.get('.Select.not-valid')
    }
    clickUserField() {
    return cy.get('[id="loginForm.userId"]')
    }
    findUserName(userName) {
      return cy.get(`[aria-label="${userName}"]`)
    }
    clickRoleField() {
      return cy.get('[id="loginForm.role"]')
    }
    findUserRole(userRole) {
      return cy.get(`[aria-label="${userRole}"]`)
    }
  }
  export default LoginPage
  