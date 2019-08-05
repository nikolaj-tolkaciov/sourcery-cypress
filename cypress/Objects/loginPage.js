class LoginPage {
    visit(){
        cy.visit('/');
    }
    getValidationError() {
        return cy.get('.Select.not-valid');
    }
    submitLogin(){
       return cy.get('[type="submit"]');
    }
    openUsersDropDown(){
        return cy.get('[id="loginForm.userId"]');
    }
    chooseSelectedUser(UserName){
        return cy.get(`[aria-label="${UserName}"]`);
    }
    openRoleList(){
        return cy.get('[id="loginForm.role"]');
    }
    getUserRole(UserRole){
        return cy.get(`[aria-label="${UserRole}"]`);
    }    
}

export default LoginPage;