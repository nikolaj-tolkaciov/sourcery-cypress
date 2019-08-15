class LoginPage {

    visit(url) {
        if (url) {
            cy.visit(url);
        } else {
            cy.visit('/');
        }
    }

    getValidation() {
        return cy.get('.Select.not-valid');
    }

    getUserId() {
        return cy.get('[id="loginForm.userId"]');
    }

    getUserRole() {
        return cy.get('[id="loginForm.role"]');
    }

    selectSpecified(select) {
        cy.get(`[aria-label="${select}"]`).click();
    }

    clickSubmit() {
        cy.get('[type="submit"]').click();
    }

    loginAs(username, rolename) {
        this.getUserId().click({force:true});
        this.selectSpecified(username);
        this.getUserRole().click({force:true});
        this.selectSpecified(rolename);
        this.clickSubmit();
    }

}

export default LoginPage