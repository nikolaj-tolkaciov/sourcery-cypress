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
}

export default Common;