class TimeLog {

    getUrl(){
        return cy.url()
    }
    

    selectPageTitle(){
        return cy.get('.page__title')    
    }

    selectCalendar(){
        return cy.get('.calendar')    
    }

    selectTitle(){
        return cy.get('.tile.form')    
    }

    selectUserInfoTitle(){
        return cy.get('.user-info__title')    
    }

    selectMainNavListElement(){
        return cy.get('.main-nav').find('li')
    }

    selectMainNavActiveLink(){
        return cy.get('.main-nav__link--active')
    }

    selectTodayInCalendar(){
        return cy.get('.calendar--today')
    }
}

export default TimeLog