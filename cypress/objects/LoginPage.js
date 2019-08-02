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

    geturl() {
        return cy.url()
    }

    getPageTitle() {
        return cy.get('.page__title')
    }

    getItemCalendar() {
        return cy.get('.calendar')
    }

    getFormTitle() {
        return cy.get('.tile.form')
    }

        getMainNavigationBar() {
        return cy.get('.main-nav')
    }

    getActiveTabLink() {
        return cy.get('.main-nav__link--active')
    }

    getCalendarDayToday() {
        return cy.get('.calendar--today')
    }
 }

 export default LoginPage;

