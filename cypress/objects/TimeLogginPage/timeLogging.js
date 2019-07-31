class TimeLoginPage {

    getUrl() {
        return cy.url().should('include', '/time-logging')
 }
    title() {
        return cy.get('.page__title')
 }
    calendar() {
        return cy.get('.calendar')
 }
    currentDay(){
        return cy.get('.calendar--today')
    }
    titleForm(){
        return cy.get('.tile.form')
    }
    userName(){
       return cy.get('.user-info__title')
    }
    tabNumber(){
        return cy.get('.main-nav').find('li')
    }
    titleColour(){
        return cy.get('.main-nav__link--active')
    }
 }
 export default TimeLoginPage