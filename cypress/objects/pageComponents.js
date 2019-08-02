class PageComponents {
    getUserName(){
        return cy.get('.user-info__title')
    }
    getTabsCount(){
        return cy.get('.main-nav').find('li')
    }
    getSubmitButton(){
        return cy.get('[type="submit"]')
    }
    getActiveTitleColor(){
        return cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    }
}
export default PageComponents