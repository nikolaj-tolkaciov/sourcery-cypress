class LoginPage{
    visit(){
        cy.visit('/')
    }

    getUserValidationError(){
        return cy.get('.Select.not-valid')
    }

    getLoginButton(){
        return cy.get('[type="submit"]')
    }

    getLoginFormUserId(){
        return cy.get('[id="loginForm.userId"]')
    }

    getLoginFormRole(){
        return cy.get('[id="loginForm.role"]')
    }

    getOption(option){
        return cy.get(`[aria-label="${option}"]`)
    }
}

export default LoginPage