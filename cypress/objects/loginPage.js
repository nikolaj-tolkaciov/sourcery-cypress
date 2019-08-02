class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserTitle() {
        return cy.get('.user-info__title');
    }
    
    getMenuList() {
        return cy.get('.main-nav').find('li');
    }

    getActiveMenuItem() {
        return cy.get('.main-nav__link--active');
    }

    userDropDown() {
       return cy.get('[id="loginForm.userId"]');
    }

    getUser(username) {
        return cy.get(`[aria-label="${username}"]`)
    }

    getRoleDropDown() {
        return cy.get('[id="loginForm.role"]')
    }

    getRoleOption(role) {
       return  cy.get(`[aria-label="${role}"]`)
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    getCalendarSpan() {
        return cy.get('.calendar--today').find('span');
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getTileForm() {
        return cy.get('.tile.form');
    }
}

export default LoginPage;