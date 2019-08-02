class LoginPage {
    visit(){
        cy.visit('/');
    }
    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }
    getSubmitButton(){
        return cy.get('[type="submit"]')
    }
    getSpecificUserFromDropDown(userName){
        return cy.get(`[aria-label="${userName}"]`)
    }
    getUserIDLogin(){
        return cy.get('[id="loginForm.userId"]')
    }
    getLoginFormRole(){
        return cy.get('[id="loginForm.role"]')
    }
    getSpecificUserRoleFromDropDown(userRole){
        return cy.get(`[aria-label="${userRole}"]`)
    }
    
}

export default LoginPage