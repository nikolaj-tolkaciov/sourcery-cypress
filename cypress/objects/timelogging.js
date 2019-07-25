class LoginPage {
  visit(){
    cy.visit('/')
  }
  getValidationError() {
    return cy.get('.Select.not-valid')
  }
  submitLogin() {
    return cy.get('[type="submit"]')
  }
  getValidation() {
    return cy.get('.Select.not-valid')
  }
  getUserId() {
  return cy.get('[id="loginForm.userId"]')
  }
  getUserName(userName) {
    return cy.get(`[aria-label="${userName}"]`)
  }
  getUser() {
    return cy.get('[id="loginForm.role"]')
  }
  getUserRole(userRole) {
    return cy.get(`[aria-label="${userRole}"]`)
  }
}
export default LoginPage
