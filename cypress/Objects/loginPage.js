class LoginPage {
    visit(){
        cy.visit('/');
    }
    getvalidationerror() {
        return cy.get('.Select.not-valid');
    }
    submitlogin(){
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