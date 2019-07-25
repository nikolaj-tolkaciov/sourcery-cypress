class LoginPage{
    visit(){
        cy.visit('/')
    }
    getValidationError(){
        return cy.get('.Select.not-valid')
    }
    getSubmitButton(){
        return cy.get('[type="submit"]')
    }
    getUserForm(){
        return cy.get('[id="loginForm.userId"]')
    }
    getUserOption(userName){
        return cy.get(`[aria-label="${userName}"]`)
    }
    getLoginForm(){
        return cy.get('[id="loginForm.role"]')
    }
    getRoleOfUser(role){
        return cy.get(`[aria-label="${role}"]`)
    }
}
export default LoginPage