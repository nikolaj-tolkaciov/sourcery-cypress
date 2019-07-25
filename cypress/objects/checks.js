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

    click(click) {
        cy.get(click).click();
    }

    inputText(nameTitle, input) {
        cy.get(nameTitle).type(input);
    }

    inputNumber(nameTitle, input) {
        cy.get(nameTitle).clear().type(input);
    }

    searchTaskName(nameTitle, text) {
        cy.get(nameTitle).eq(0).type(text);  
    }
}

export default checks