class Page {

    getButtonByType(type) {
        return cy.get(`[type="${type}"]`);
    }

    getUserProfileButton() {
        return cy.get('.user-info__title');
    }

    getNavList() {
        return cy.get('.main-nav');
    }

    getActiveNavMenuOption() {
        return cy.get('.main-nav__link--active');
    }
}

export default Page;