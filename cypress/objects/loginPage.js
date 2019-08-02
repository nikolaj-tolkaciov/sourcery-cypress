class LoginPage {
    visit() {
        cy.visit('/');
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid');
    }

    clickSubmitButton() {
        cy.get('[type="submit"]').click();
    }

    clickSpecificUserFromDropDown(userName) {
        cy.get(`[aria-label="${userName}"]`).click();
    }

    clickSpecificRoleFromDropDown(roleName) {
        cy.get(`[aria-label="${roleName}"]`).click();
    }

    clickUserDropDown() {
        cy.get('[id="loginForm.userId"]').click({force:true});
    }

    clickRoleDropDown() {
        cy.get('[id="loginForm.role"]').click({force:true});
    }
}

export default LoginPage;