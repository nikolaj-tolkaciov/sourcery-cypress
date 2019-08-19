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
    getButton() {
        return cy.get('[class="btn"]');
    }

    getItemFromMenu(itemName) {
        return cy.get(`[href="/${itemName}"]`);
    }

    getSpecificValueFromDropDown(itemName) {
        return cy.get(`[aria-label="${itemName}"]`);
    }

    getFilterFields() {
        return cy.get('input[class="field__text field__text--small"]');
    }

    getDisplayedItems() {
        return cy.get('[class="ag-body-container"]');
    }
}

export default General;