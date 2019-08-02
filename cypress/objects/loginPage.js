class LoginPage {
    visit() {
        cy.visit('/')
    }
    getuserValidationIndicator(){
       return cy.get('.Select.not-valid')
    }
    getSubmitButton(){

        return cy.get('[type="submit"]')
    }
    getSpecificUserFromDropDown(userName){
        return cy.get(`[aria-label="${userName}"]`)
    }
    getUserRole(role){
        return cy.get(`[aria-label="${role}"]`)
    }

    getLoginFieldUser(){
        return cy.get('[id="loginForm.userId"]')
    }

    getLoginfieldRole(){
        return cy.get('[id="loginForm.role"]')
    }
}
export default LoginPage
