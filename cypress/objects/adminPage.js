class adminCreatesTask {
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
    getTab(){
    return cy.get('.main-nav__link')
    }
    showButton(){
        return cy.get('button.btn')
            }
    showTaskNameField(){
        return cy.get('[id="taskDetailsForm.name"]')
    }
    showDescriptionField(){
        return cy.get('[id="taskDetailsForm.description"]')
    }
    getDropdownForBilling(){
        return cy.get('.Select-arrow')
    }
    getYesForBilling(){
        return cy.get('[aria-label="Yes"]')
    }
    getRateField(){
        return cy.get('[id="taskDetailsForm.rate"]')
    }
    showTaskNameFieldForSearch(){
        cy.get('.field__text').eq(0)
    }
}

export default adminCreatesTask
