class Common {

    checkIfUrlDoesNotInclude(text) {
        cy.url().should('not.include', text);
    }

    clickCertainButtonWithText(buttonType, text) {
        cy.get(`[type="${buttonType}"]`).contains(text).click();
    }

    getCurrentTimeStamp() {
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
    
    filterNamesList(name) {
        cy.get('[class="field__text field__text--small"]').get('[type="text"]').first().type(name);
    }

    filterDescriptionList(decription) {
        cy.get('[class="field__text field__text--small"]').get('[type="text"]').last().type(decription);
    }

    checkIfListContains(name) {
        return cy.get('[class="ellipsis"]').get(`[title="${name}"]`);
    }
}

export default Common;