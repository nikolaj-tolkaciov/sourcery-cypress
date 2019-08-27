class MainPage {

    getWeekday(weekday) {
        return cy.get(`:nth-child(${weekday}) > .v-list__group__header > .v-list__group__header__append-icon > .v-icon`);
    }
    getMainDish() {
        return cy.get(':nth-child(4) > .layout > .dish-card > .v-card__text');
    }
    getSoup() {
        return cy.get(':nth-child(2) > .layout > .dish-card > .v-card__text');
    }
    getSelectedItemsList() {
        return cy.get('.d-flex > .layout > .flex');
    }
    getOrderButton() {
        return cy.get('.orders-list-button');
    }
}

export default MainPage;