class TimeLoggingPage {

    getUrl(){
      cy.url().should('include', '/time-logging');
    }

    getPageTitle(){
      return cy.get('.page__title')
    }

    getCalendar(){
      return cy.get('.calendar')
    }

    getTitleForm(){
       return cy.get('.tile.form')
    }

    getUserTitle(){
        return cy.get('.user-info__title')
    }
    getMainNavigation(){
        return cy.get('.main-nav')
    }
    getToday(){
        return cy.get('.calendar--today')
    }
    getLinkActive(){
        return cy.get('.main-nav__link--active')
    }
    getTab (){
        return cy.get('.main-nav__link')
    }

}
export default TimeLoggingPage