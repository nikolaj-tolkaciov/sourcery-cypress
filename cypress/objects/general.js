class General {
    urlShouldInclude(text) {
        cy.url().should('include', text);
    }

    getLoggedUserName() {
        return cy.get('.user-info__title');
    }

    getMainMenuItems() {
        return cy.get('.main-nav').find('li');
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getSelectedMenuItem() {
        return cy.get('.main-nav__link--active');
    }

    getUserButton() {
        return cy.get('[class="user-button"]');
    }

    getLogoutButton() {
        return cy.get('[id="logout-button"]');
    }
}

export default General;