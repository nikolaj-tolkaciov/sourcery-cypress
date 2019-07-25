class timeLogging {
    getUrl(){
        return cy.url().should('include', '/time-logging')
        }
    getCalendar(){
        return cy.get('.calendar')
    }
    getTitleForm(){
        return cy.get('.tile.form')
    }
    getUserInfo(){
        return cy.get('.user-info__title')
    }
    getLi(){
        return cy.get('.main-nav').find('li')
    }
    getCurrentDate(){
        return cy.get('.main-nav__link--active')
    }
}
export default timeLogging