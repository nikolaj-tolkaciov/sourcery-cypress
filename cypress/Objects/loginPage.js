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
    getvalidation(){
        return cy.get('.Select.not-valid');
    }
    getUserID(){
        return cy.get('[id="loginForm.userId"]');
    }
    getUserName(UserName){
        return cy.get(`[aria-label="${UserName}"]`);
    }
    getName(){
        return cy.get('[id="loginForm.role"]');
    }
    getUserRole(UserRole){
        return cy.get(`[aria-label="${UserRole}"]`);
    }
    getRole(){
        return cy.get('[type="submit"]');
    }

}

export default LoginPage;