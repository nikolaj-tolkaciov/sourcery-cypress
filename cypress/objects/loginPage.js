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

    getElementCountOfNavigationBar(length) {
        return cy.get('.main-nav').find('li').should('have.length', length);
    }
    getElementColor() {
        return cy.get('.main-nav__link--active')
    }
}

export default LoginPage