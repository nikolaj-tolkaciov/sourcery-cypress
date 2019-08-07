class CreatingTask {
    
    visitTasks(){
        return cy.get('.main-nav').contains('Tasks'); //Navigates to Task Page
    }
    pressCreatTask(){
        return cy.get('.grid__column').contains('Create Task'); //Click button 'Create Task
    }
    typeName(nameOfTask){
        return cy.get('[id="taskDetailsForm.name"]').type(nameOfTask);
    }
    typeDescription(){
        return cy.get('[id="taskDetailsForm.description"]');
    }
    clickDropDown(){
        return cy.get('.Select-value-label').click({force:true});
    }
    chooseYes(answer){
        return cy.get(`[aria-label="${answer}"]`);
    }
    getRate(){
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getSave(){
        return cy.get('.btn').contains('Save');
    }
    checkURL(){
        return cy.url().should('not.contain','create');
    }
    getTaskNameField(){
        return cy.get('.field__text--small').first();
    }
    checkTaskName(){
        return cy.get('.ellipsis');
    }
    }
    
    
    export default CreatingTask;