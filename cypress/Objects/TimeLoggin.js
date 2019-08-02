class TimeLoggin{
    urlIncludeTimeLogging(){
        return cy.url()
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
        return cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)')
    }
    getTodaysDay(){
        return cy.get('.calendar--today').find('span').contains(new Date().getDate())
    }
}

export default TimeLoggin