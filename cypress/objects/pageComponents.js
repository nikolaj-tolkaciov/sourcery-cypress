class PageComponents {
    getPageTitle() {
        return cy.get('.page__title');
    }

    getMainNavigationTab() {
        return cy.get('.main-nav').find('li');
    }

    checkMainNavigationTabsCount(num) {
        this.getMainNavigationTab().should('have.length', num);
    }

    getUserInfoTitle() {
        return cy.get('.user-info__title');
    }

    checkIfUserTitleContains(text) {
        this.getUserInfoTitle().contains(`${text}`);
    }

    clickLogoutButton() {
        cy.get('[id="logout-button"]').click();
    }

    getActiveNavigationTab() {
        return cy.get('.main-nav__link--active');
    }

    checkIfActiveTabIsThisColor(color) {
        this.getActiveNavigationTab().should('have.css', 'color').and('eq', color);
    }
}

export default PageComponents;