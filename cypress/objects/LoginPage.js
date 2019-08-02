class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }
    
    getSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }

    getUserIdForm() {
        return cy.get('[id="loginForm.userId"]')
    }

    getUserRoleForm() {
        return cy.get('[id="loginForm.role"]')
    }

    getUserRoleFromDropDown(userRole) {
        return cy.get(`[aria-label="${userRole}"]`)
    }    

    getItemCalendar() {
        return cy.get('.calendar')
    }

    getFormTitle() {
        return cy.get('.tile.form')
    }
       
    getCalendarDayToday() {
        return cy.get('.calendar--today')
    }
 }

 export default LoginPage;

