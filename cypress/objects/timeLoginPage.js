class TimeLoginPage {
    visit() {
        cy.visit('/')
    }

    getURL() {
        return cy.url().should('include', '/time-logging')
    }

    getPageTitle() {
        return cy.get('.page__title').contains('Timesheets')
    }

    getCalendarVisable() {
        return cy.get('.calendar').should('be.visible')
    }

    getCalendarToday() {
        return cy.get('.calendar--today').contains(new Date().getDate())
    }

    getFileForm() {
        return cy.get('.tile.form').should('be.visible')
    }

    getUserInfoTitle() {
        return cy.get('.user-info__title').contains('Ugne Lekstutiene')
    }

    getMainLength() {
        return cy.get('.main-nav').find('li').should('have.length', 1)
    }

    getTimeLoggingColored() {
        return cy.get('.main-nav__link--active').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
    }
}
    export default TimeLoginPage