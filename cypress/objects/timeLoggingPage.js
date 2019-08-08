class TimeLoggingPage {
    visit() {
        cy.visit('/time-logging');
    } 
}

class Task3 {
    navigateToTasks() {
        return cy.get('.main-header__nav').find('li').contains('Tasks');
    } 
    createTask() {
        return cy.get('[type="button"]').contains('Create Task');
    } 
    fillTaskName(name, testNumber) {
        return cy.get('[id="taskDetailsForm.name"]').type(name + testNumber);
    }
    fillDescription(testNumber) {
        cy.get('[id="taskDetailsForm.description"]').type("howdy" + testNumber);
    }
    selectDropdownYes() {
        cy.get('.Select-value').click();
        cy.get('[role="option"]').contains("Yes").click({force:true});
    }
    fillRate(testNumber) {
        cy.get('[id="taskDetailsForm.rate"]').should('not.be.disabled');
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(Math.floor(Math.random() * 1100)+1);
    }
    submitANDnavigateTasks(testNumber) {
        cy.get('[type=submit]').contains('Save').click({force:true});
        cy.get('.main-header__nav').find('li').contains('Tasks').click();
    }


    fillRate(testNumber) {
        cy.get('[id="taskDetailsForm.rate"]').should('not.be.disabled');
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(Math.floor(Math.random() * 1100)+1);
    }

    filtering(name, testNumber) {
        cy.get('[class="field__text field__text--small"]').first().type(name + testNumber)
        cy.get(`[title=${name}${testNumber}]`).should('be.visible');
    }
}

export default {TimeLoggingPage, Task3};