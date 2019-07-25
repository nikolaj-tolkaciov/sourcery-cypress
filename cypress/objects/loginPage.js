class LoginPage { 
visit() {
    cy.visit('/')
    }

getValidationError(){
    return cy.get('.Select.not-valid')
    }

getLoginButton(){
    return cy.get('[type="submit"]')
    }

getUser(){
    return cy.get('[id="loginForm.userId"]')
    }

getName(userName){
    return cy.get(`[aria-label="${userName}"]`)
    }

getRole(){
    return cy.get('[id="loginForm.role"]')
}
getRoleLabel(role){
    return cy.get(`[aria-label="${role}"]`)
}   
}
export default LoginPage