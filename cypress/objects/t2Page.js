class T2Page {
    visit() {
        cy.visit('/'); 
    }

    getUserDropDown() {
        return cy.get('[id="loginForm.userId"]')
    }

    getSpecificUserFromDropDown(userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }

    getRoleDropDown() {
        return cy.get('[id="loginForm.role"]')
    }

    getSpecificRoleFromDropDown(role) {
        return cy.get(`[aria-label="${role}"]`)
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    getUserTitle() {
        return cy.get('.user-info__title')
    }

    getElementCountOfNavigationBar(length) {
        return cy.get('.main-nav').find('li').should('have.length', length);
    }

    getSpecificUrl(url) {
        return cy.url().should('include', url)
    }

    getElementColor() {
        return cy.get('.main-nav__link--active')
    }

    getTasksPage() {
        return cy.visit('/tasks')
    }

    getCreateTasksButton() {
        return cy.get('[type="button"]').contains("Create Task")
    }

    getInsertValueIntoTaskNameField(taskName) {
        return cy.get('[id="taskDetailsForm.name"]').type(taskName);
    }

    getInsertValueIntoTaskDescrField(taskDescr) {
        return cy.get('[id="taskDetailsForm.description"]').type(taskDescr);
    }

    getBillToClientDrowpDown() {
        return cy.get('div.Select-value').click();
    }

    

}

export default T2Page