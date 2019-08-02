class PageComponents {
    getUserName() {
        return cy.get('.user-info__title')  
    }

    getTabsCount() {
        return cy.get('.main-nav').find('li')
    }

    getActiveTabColor() {
        return cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    }

    getUrl() {
        return cy.url()
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }
}

export default PageComponents