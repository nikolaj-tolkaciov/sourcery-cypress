class checks {
    urlCheck(url) {
        return cy.url().should('include', `${url}`);
    }

    titleCheck(title) {
        return cy.get('.page__title').contains(`${title}`);
    }

    visibilityCheck(element) {
        return cy.get(`${element}`).should('be.visible');
    }

    contentCheck(nameTitle, content) {
        return cy.get(nameTitle).contains(content);
    }

    colorCheck(nameTitle, color) {
        return cy.get(nameTitle).should('have.css', 'color', `${color}`);
    }
    navLengthCheck(nav, find, len) {
        return cy.get(nav).find(find).should('have.length', len);
    }
}

export default checks