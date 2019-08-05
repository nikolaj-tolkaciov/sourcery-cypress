class LoginPage {

  visit() {
    cy.visit('/')
  }
  getValidationError() {
    return cy.get('Select.not-valid');
  }
  submitLoginButton() {
    return cy.get('[type="submit"]');
  }
  getValidation() {
    return cy.get('.Select.not-valid');
  }
  getUserOption(userName) {
    return cy.get(`[aria-label="${userName}"]`);
  }
  getUserId() {
    return cy.get('[id="loginForm.userId"]');
  }
  selectUserId() {
    return cy.get('[id="loginForm.userId"]');
  }
  getRole() {
    return cy.get('[id="loginForm.role"]');
  }
  roleLabelUser() {
    return cy.get('[aria-label="User"]');
  }
  roleLabelTeam() {
    return cy.get('[aria-label="Team Lead"]');
  }
  roleLabelManager() {
    return cy.get('[aria-label="Manager"]');
  }
  roleLabelAccountant() {
    return cy.get('[aria-label="Accountant"]');
  }
  roleLabelAdmin() {
    return cy.get('[aria-label="Admin"]');
  }

  submitOption() {
    return cy.get('[type="submit"]');
  }
}

export default LoginPage