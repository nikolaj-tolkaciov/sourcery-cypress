export default {
    visit: () => crypto.visit('/time-logging'),

    getCalendar: () => cy.get('.calendar'),

    getPageTitle: () => cy.get('.page__title'),

    getTileForm: () => cy.get('.tile.form'),

    getActiveTab: () => cy.get('.main-nav__link--active'),

    getUserName: () => cy.get('.user-info__title'),

    getTabs: () => cy.get('.main-nav').find('li'),
}