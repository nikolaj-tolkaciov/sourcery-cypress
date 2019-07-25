class TimeLoginPage {
    visit() {
        cy.visit('/')
    }

    getURL() {
        return cy.url()
    }

    getPageTitle() {
        return cy.get(".page__title").contains('Timesheets')
    }

    getCalendarVisable() {
        return cy.get('.calendar')
    }

    getCalendarToday() {
        return cy.get('.calendar--today')
    }

    getTimeEntryForm() {
        return cy.get('.tile.form')
    }

    getUserInfoTitle() {
        return cy.get('.user-info__title').contains('Ugne Lekstutiene')
    }

    getMainLength(tabNumber) {
        return cy.get('.main-nav').find('li').should('have.length', tabNumber)
    }

    getTimeLoggingColored() {
        return cy.get('.main-nav__link--active').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
    }
}
    export default TimeLoginPage