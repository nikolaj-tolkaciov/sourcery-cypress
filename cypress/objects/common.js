class Common {

    getUserInfoTitle(userName) {
        return cy.get('.user-info__title')
    }
    getMainNavigationBar() {
        return cy.get('.main-nav')
    }

    getPageTitle() {
        return cy.get('.page__title')
    }
    geturl() {
        return cy.url()
    }  

    getActiveTabLink() {
        return cy.get('.main-nav__link--active')
    }
}
export default Common;