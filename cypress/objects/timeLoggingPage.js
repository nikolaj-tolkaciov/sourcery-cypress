class TimeLoggingPage {

    
    getPageTitle(){
        return cy.get('.page__title')
    }

    calendar(){
        return cy.get('.calendar')
    }

    titleForm(){
        return cy.get('.tile.form')
    }

    infoTitle(){
        return cy.get('.user-info__title')
    }

    mainNav(){
        return cy.get('.main-nav')
    }

    date(){
        return cy.get('.calendar__date')
    }

    button(){
        return cy.get('.main-nav__link--active')
    }

    logout(){
        return cy.get('[id="logout-button"]')
    }

}

export default TimeLoggingPage