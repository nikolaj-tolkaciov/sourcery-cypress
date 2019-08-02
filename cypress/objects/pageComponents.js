class PageComponents {
    getPageTitle(){
        return cy.get('.page__title')
    }

    getLoggedInUser(){
        return cy.get('.user-info__title')
    }

    getNavigationTabsList(){
        return cy.get('.main-nav').find('li')
    }

    getElementById(id){
        return cy.get(`[id="${id}"]`)
    }

    getElementByClass(elClass){
        return cy.get(`[class="${elClass}"]`)
    }

    clickSubmit(){
        cy.get('[type="submit"]').click();
    }
}
export default PageComponents