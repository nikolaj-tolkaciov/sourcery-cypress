class Common {

    getCalendar() {
        return cy.get('.calendar')
    }

    getCalendarTodaysDate() {
        return cy.get('.calendar--selected').find('span').contains(new Date().getDate())
    }

    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }
    getSpecificRoleFromDropDown(role) {
        return cy.get(`[aria-label="${role}"]`)
    }

    getUserDropDown() {
        return cy.get('[id="loginForm.userId"]')
    }

    getRoleDropDown() {
        return cy.get('[id="loginForm.role"]')
    }

    getPageTitle() {
        return cy.get('.page__title')
    }
    
    getUserTitle() {
        return cy.get('.user-info__title')
    }
}

export default Common