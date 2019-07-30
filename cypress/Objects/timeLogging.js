class TimeLogging {
    visitURL(){
    cy.url().should('include', '/time-logging');
    }
    getPageTitle(){
        return cy.get('.page__title');
    }
    getCalendar(){
        return cy.get('.calendar');
    }
    getCalendarTody(){
        return cy.get('.tile.form');
    }
    getUserTitle(){
        return cy.get('.user-info__title');
    }
    countTabs(){
        return cy.get('.main-nav').find('li');
    }
    celendarToday(){
        return cy.get('.calendar--today');
    }
    selectedTimelogging(){
        return cy.get('.main-nav__link--active');
    }
}
export default TimeLogging;