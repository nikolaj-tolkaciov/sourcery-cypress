class TimeLogging {   //klasiu pav is didziosios
    getPageTitle() {
        return cy.get('.page__title');
    }
    getCalendar() {
        return cy.get('.calendar');
    }
    getTileForm () {
        return cy.get('.tile.form');
    }
    getUserInfo () {
        return cy.get('.user-info__title');
    }
    getMainNav () {
        return cy.get('.main-nav').find('li');
    }
}

export default TimeLogging;