class TimeLoggin{
    validateUrl() {
        cy.url().should('include', '/time-logging')
        }
    getPageTitle(){
        return cy.get('.page__title')
    }
    getCalendar(){
        return cy.get('.calendar')
    }
    getTimeTile(){
        return cy.get('.tile.form')
    }
    getMainNavWithSpecificLength(){
        return cy.get('.main-nav').find('li')
    }
    getMainNavActiveLinkColor(){
        return cy.get('.main-nav__link--active')
    }
    getTodaysDay(){
        return cy.get('.calendar--today')
    }
}

export default TimeLoggin