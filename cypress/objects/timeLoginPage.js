class TimeLoginPage {
    visit() {
        cy.visit('/')
    }

    getURL() {
        return cy.url()
    }

    getPageTitle() {
        return cy.get(".page__title")
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
        return cy.get('.user-info__title')
    }

    getMainLength(tabNumber) {
        return cy.get('.main-nav')
    }

    getTimeLoggingColored() {
        return cy.get('.main-nav__link--active')
    }
}
    export default TimeLoginPage