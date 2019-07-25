class TimeLoggingPage{
    getUrl(){
        return cy.url()
    }

    getPageTitle(){
        return cy.get('.page__title')
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    getCalendarToday(){
        return cy.get('.calendar--today')
    }

    getLogHoursForm(){
        return cy.get('.tile.form')
    }

    getUserInfoTitle(){
        return  cy.get('.user-info__title')
    }

    getMainNavTabs(){
        return cy.get('.main-nav').find('li')
    }

    getMainNavActiveLink(){
        return cy.get('.main-nav__link--active')
    }
    
    getLogoutButton(){
        return cy.get('[id="logout-button"]')
    }
}

export default TimeLoggingPage