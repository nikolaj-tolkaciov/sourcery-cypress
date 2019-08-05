class CreateTasks{
    getTasksNameField(){
        return cy.get('[id="taskDetailsForm.name"]');
    }
    getTasksDescriptionField(){
        return cy.get('[id="taskDetailsForm.description"]');
    }
    getBillToClientDropDown(){
        return cy.get('label').contains('Bill to Client').next();
    }
    getFromDropDownOptionYes(){
        return cy.get('[aria-label]').contains('Yes')
    }
    getHourlyRateField(){
        return cy.get('label').contains('Hourly Rate (USD)').next()
    }
    getClearHourlyRateField(){
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getRandomMathNumber(){
        return cy.get('[id="taskDetailsForm.rate"]');
    }
    getSelectSaveButton(){
        return cy.get('button').contains('Save');
    }
}
export default CreateTasks;