class Common{
    visit() {
        cy.visit('/')
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    urlShouldInclude(endPoint){
        return cy.url().should('include', `${endPoint}`)
    }

    getPageTitle(title){
        return cy.get('.page__title').contains(`${title}`)
    }

    getUserInfoTitle(userName){
        return cy.get('.user-info__title').contains(`${userName}`)
    }

    getNavigationLength(){
        return cy.get('.main-nav').find('li')
    }

    validateActiveNavLinkColor(rgbCode){
        return cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', `${rgbCode}`)
    }

    validateActiveNavLink(link){
        return cy.get('.main-nav__link--active').should('have.attr', 'href', `${link}`)
    }

    getNavLink(name){
        return cy.get('.main-nav__link').contains(`${name}`)
    }
}

export default Common;