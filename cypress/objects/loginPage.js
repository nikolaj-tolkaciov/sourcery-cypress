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
  roleLabeluser(roleName){
    return cy.get(`[aria-label="${roleName}"]`);
  }
  submitOption() {
    return cy.get('[type="submit"]');
  }
}

export default LoginPage