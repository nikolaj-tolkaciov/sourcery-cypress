class PageComponents {
    getUrl(){
        return cy.url()
    }

    getPageTitle(){
        return cy.get('.page__title')
    }

    getLoggedInUser(){
        return cy.get('.user-info__title')
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    getNavigationTabsList(){
        return cy.get('.main-nav').find('li')
    }
}
export default PageComponents