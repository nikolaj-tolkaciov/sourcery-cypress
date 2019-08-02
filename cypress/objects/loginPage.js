class LoginPage {
    visit = () => cy.visit('/');

    getSubmitButton = () => cy.get('[type="submit"]');

    getUserValidationIndicator = () => cy.get('.Select.not-valid');

    getUserDropDown = () => cy.get('[id="loginForm.userId"]');

    getUserOption = (userName) => cy.get(`[aria-label="${userName}"]`);

    getRoleDropDown = () => cy.get('[id="loginForm.role"]');

    getRoleOption = (roleName) => cy.get(`[aria-label="${roleName}"]`);

}

export default LoginPage;