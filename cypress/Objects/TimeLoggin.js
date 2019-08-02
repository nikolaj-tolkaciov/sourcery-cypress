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
    getUserInfoFromTitle(){
        return cy.get('.user-info__title')
    }
    getMainNavWithSpecificLength(){
        return cy.get('.main-nav').find('li')
    }
}

export default TimeLoggin