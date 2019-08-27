class login {
    enterEmail(email) {
        return cy.get('[name=email]').click({force:true}).type(email); 
    }
    enterPassword(password) {
        return cy.get('[name=password]').click({force:true}).type(password);
    }

    clickLogin(btnId) {
        return cy.get(btnId).click();
    }

    login(name, password, btnId) {
        cy.visit('/');
        this.enterEmail(name);
        this.enterPassword(password);
        this.clickLogin(btnId);
    }
}

class actions {
    objContainsClick(objId, content) {
        return cy.get(objId).contains(content).click({force:true});
    }

    objContainsShouldClick(objId, content, should) {
        return cy.get(objId).contains(content).should(should).click({force: true});
    }

    click(objId) {
        return cy.get(objId).click();
    }

    clickOn(objId, num) {
        return cy.get(objId).eq(num).click();
    }

    visit(path) {
        return cy.visit(path);
    }

    typeIn(objId, text) {
        return this.click(objId).type(`${text}`);
    }
}

class supplier {
    mealInfoFill(price, count, string, num) {
        cy.get('[aria-label="Price"]').eq(num).click().type(price);
        cy.get('[aria-label="Count"]').eq(num).type(count);
        cy.get('[aria-label="Selection Name"]').eq(num).type(string);
    }
}

export {login, actions, supplier}