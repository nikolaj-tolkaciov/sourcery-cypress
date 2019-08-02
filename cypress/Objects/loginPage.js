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
    getUserDropdown(){
        return cy.get('[id="loginForm.userId"]')
    }
    getRoleDropdown(){
        return cy.get('[id="loginForm.role"]')
    }
    getSpecificUserRoleFromDropDown(userRole){
        return cy.get(`[aria-label="${userRole}"]`)
    }
    
}

export default LoginPage