import PageComponents from "./pageComponents";

class LoginPage extends PageComponents{
    visit(){
        cy.visit('/');
    }

    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }

    getSpecifiedOptionDromDropdown(option){
        return cy.get(`[aria-label="${option}"]`)
    }

    loginWithUserAndRole(user, role){
        this.clickInputField("loginForm.userId")
        this.getSpecifiedOptionDromDropdown(user).click()
        this.clickInputField("loginForm.role")
        this.getSpecifiedOptionDromDropdown(role).click()
        this.clickSubmit()
    }
}

export default LoginPage