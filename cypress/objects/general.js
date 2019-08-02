class General {
    
    getUrl() {
        return cy.url();
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

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }

    getLogoutButton() {
        return cy.get('[id="logout-button"]');
    }
    getRegularButton() {
        return cy.get('[class="btn"]');
    }

    getTasksFromMenu() {
        return cy.get('[href="/tasks"]');
    }

    getSpecificValueFromDropDown(itemName) {
        return cy.get(`[aria-label="${itemName}"]`);
    }
}

export default General;