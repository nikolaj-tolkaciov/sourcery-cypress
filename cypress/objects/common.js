class Common {

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
    
    getUserTitle() {
        return cy.get('.user-info__title')
    } 

    getButton() {
        return cy.get('[type="submit"]')
    }

}

export default Common