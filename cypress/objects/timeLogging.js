class TimeLogging{
    getUrl() {
        return cy.url()
    }
    getPageTitle(){
        return cy.get('.page__title')
    }
    getCalendar(){
        return cy.get('.calendar')
    }
    getTileForm(){
        return cy.get('.tile.form')
    }
    assertTodayDate(){
        return cy.get('.calendar--today').find('span')
    }

}
export default TimeLogging