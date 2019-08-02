class LoginPage {
    visit(){
        cy.visit('/');
    }

    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }

    clickSubmit(){
        cy.get('[type="submit"]').click();
    }

    getSpecifiedOptionDromDropdown(option){
        return cy.get(`[aria-label="${option}"]`)
    }

    chooseInputField(inputId){
        cy.get(`[id="${inputId}"]`).click({force:true});
    }

    loginWithUserAndRole(user, role){
        this.chooseInputField("loginForm.userId")
        this.getSpecifiedOptionDromDropdown(user).click()
        this.chooseInputField("loginForm.role")
        this.getSpecifiedOptionDromDropdown(role).click()
        this.clickSubmit()
    }
}

export default LoginPage