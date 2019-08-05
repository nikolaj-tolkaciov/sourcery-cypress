class LoginPage {
    visit() {
        cy.visit('/'); 
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid')
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }

    getUserDropDown() {
        return cy.get('[id="loginForm.userId"]')
    }

    getRoleDropDown() {
        return cy.get('[id="loginForm.role"]')
    }

    getSpecificRoleFromDropDown(role) {
        return cy.get(`[aria-label="${role}"]`)
    }
    
    getUserTitle() {
        return cy.get('.user-info__title')
    }

    getElementCountOfNavigationBar(length) {
        return cy.get('.main-nav').find('li').should('have.length', length);
    }
    getElementColor() {
        return cy.get('.main-nav__link--active')
    }
}

export default LoginPage