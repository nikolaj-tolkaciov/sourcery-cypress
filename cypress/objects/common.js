class Common {
    checkIfUrlDoesNotInclude(text) {
        cy.url().should('not.include', text);
    }

    clickCertainButton(buttonType, text) {
        cy.get(`[type="${buttonType}"]`).contains(text).click();
    }

    generateAUniqueString() {
        return Date.now().toString();
    }

    visit(page) {
        cy.visit(page);
    }

    wait(amountOfTime) {
        cy.wait(amountOfTime);
    }
    
    clearField(fieldId) {
        cy.get(`[id="${fieldId}"]`).clear();
    }
    
    inputIntoASpecificField(fieldId, input) {
        cy.get(`[id="${fieldId}"]`).type(input);
    }

    filterListItemsByName(name) {
        cy.get('[class="field__text field__text--small"]').get('[type="text"]').first().type(name);
    }

    checkIfListContains(name) {
        return cy.get('[class="ellipsis"]').get(`[title="${name}"]`);
    }
}

export default Common;