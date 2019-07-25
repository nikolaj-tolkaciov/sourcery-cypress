class LoginPage{


    visit() {
        cy.visit('/') 
    }

    getValidationError() {
        return cy.get('.Select.not-valid')
    }

    submit(){
        return cy.get('[type="submit"]')
    }

    getUserId(){
        return cy.get('[id="loginForm.userId"]')
    }

    getUserName(userName){
        return cy.get(`[aria-label="${userName}"]`)      
    }

    getRole(){
        return cy.get('[id="loginForm.role"]')
    }

    selectRole(role){
        return cy.get(`[aria-label="${role}"]`)
    }

}

export default LoginPage