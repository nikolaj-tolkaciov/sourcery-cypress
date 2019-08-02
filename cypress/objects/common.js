class Common {
    checkIfUrlIncludes(text) {
        cy.url().should('include', text);
    }
}

export default Common;