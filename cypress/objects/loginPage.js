class LoginPage {
    visit(){
        cy.visit('/')
    }
    getValidationError(){
        return cy.get('.Select.not-valid')
    }
    getSelectedItemSubmit(){
        return cy.get('[type="submit"]')
    }
    getUserID(){
    return cy.get('[id="loginForm.userId"]')
}
    getUserOption(userName){
        return cy.get(`[aria-label="${userName}"]`)
    }

    getRoleForm(){
    return cy.get('[id="loginForm.role"]')
    }

    getUserRoleOption(option){
    return cy.get(`[aria-label="${option}"]`)
}

}


export default LoginPage
