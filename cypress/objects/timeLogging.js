class TimeLogging {
    getPageTitle() {
        return cy.get('.page__title')
    }

    getCalendar() {
        return cy.get('.calendar')
    }

    getTileForm() {
        return cy.get('.tile.form')
    }

    assertTodayDate() {
        let today = new Date()
        return cy.get('.calendar--today').find('.calendar__date').contains(today.getDate());
    }
}

export default TimeLogging