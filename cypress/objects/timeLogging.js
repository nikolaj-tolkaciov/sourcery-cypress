class TimeLogging {
    getUrl() {
        return cy.url()
    }

    getPageTitle() {
        return cy.get('.page__title')
    }

    getCalendar() {
        return cy.get('.calendar')
    }

    getTitleForm() {
        return cy.get('.tile.form')
    }

    getUserInfoTitles() {
        return cy.get('.user-info__title')  
    }

    getTabsCount() {
        return cy.get('.main-nav').find('li')
    }

    assertTodayDate() {
        let today = new Date()
        return cy.get('.calendar--today').find('.calendar__date').contains(today.getDate());
    }

    getTheColor() {
        return cy.get('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    }
}



export default TimeLogging