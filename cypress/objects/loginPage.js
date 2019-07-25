class LoginPage {
    visit(){
        cy.visit('/')
    }

    getValidationError(){
        return cy.get('.Select.not-valid')
    }

    submitButton(){
        return cy.get('[type="submit"]')
    }

    selectUserId(){
        return cy.get('[id="loginForm.userId"]')    
    }

    getUserOption(userName){
        return cy.get(`[aria-label="${userName}"`)    
    }

    selectRole(){
        return cy.get('[id="loginForm.role"]')    
    }
}

export default LoginPage