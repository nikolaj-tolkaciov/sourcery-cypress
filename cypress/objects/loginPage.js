class LoginPage {

  visit() {
    cy.visit('/')
  }
  getvalidationerror() {
    return cy.get('Select.not-valid');
  }
  submitloginbutton() {
    return cy.get('[type="submit"]');
  }
  getvalidation() {
    return cy.get('.Select.not-valid');
  }
  getUserOption(userName) {
    return cy.get(`[aria-label="${userName}"]`);
  }
  getUserId() {
    return cy.get('[id="loginForm.userId"]');
  }
  selectuserid() {
    return cy.get('[id="loginForm.userId"]');
  }
  getRole() {
    return cy.get('[id="loginForm.role"]');
  }
  roleLabeluser() {
    return cy.get('[aria-label="User"]');
  }
  roleLabelteam() {
    return cy.get('[aria-label="Team Lead"]');
  }
  roleLabelmanager() {
    return cy.get('[aria-label="Manager"]');
  }
  roleLabelaccountant() {
    return cy.get('[aria-label="Accountant"]');
  }
  roleLabeladmin() {
    return cy.get('[aria-label="Admin"]');
  }

  submitOption() {
    return cy.get('[type="submit"]');
  }
}

export default LoginPage