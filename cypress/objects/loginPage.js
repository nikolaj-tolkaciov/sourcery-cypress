class LoginPage{    

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid')
    }
    
    getLoginUserId(){
        return cy.get('[id="loginForm.userId"]')
    }

    getLoginRole(){
        return cy.get('[id="loginForm.role"]')
    }
    
    getSpecificUserFromDropDown(userName){
        return cy.get(`[aria-label="${userName}"]`)
    }

    getSpecificRoleFromDropDown(role){
        return cy.get(`[aria-label="${role}"]`)
    }    
}

export default LoginPage