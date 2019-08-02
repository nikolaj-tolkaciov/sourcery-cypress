class Common {

    getPageTitle() {
        return cy.get('.page__title')
    }
    
    getUserTitle() {
        return cy.get('.user-info__title')
    }
    
}

export default Common