export default {
    visit: () => cy.visit('/'),

    getUserDropDown: () => cy.get('[id="loginForm.userId"]'),

    getUserOption: (userName) => cy.get('[aria-label="' + userName + '"]'),

    getRoleDropDown: () => cy.get('[id="loginForm.role"]'),

    getRoleOption: (roleName) => cy.get('[aria-label="' + roleName + '"]'),
    
    getSubmitButton: () => cy.get('[type="submit"]'),

    getValidationIndicator: () => cy.get('.Select.not-valid'),
}