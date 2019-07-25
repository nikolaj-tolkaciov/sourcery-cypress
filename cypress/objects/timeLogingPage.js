class TimeLogingPage {
    getUrl(){
        return cy.url().should('include', '/time-logging')
    }
    getPageTitle(){
        return cy.get('.page__title')
    }
    getCalendarVisible(){
        return cy.get('.calendar')
    }
    getCalendarToday(){
        return cy.get('.calendar--today')
    }
    getTileForm(){
        return cy.get('.tile.form')
    }
    getInfoTitle(){
        return cy.get('.user-info__title')
    }
    getNavigationTabCount(){
        return cy.get('.main-nav').find('li')
    }
    getActiveTab(){
        return cy.get('.main-nav__link--active')
    }
}
export default TimeLogingPage