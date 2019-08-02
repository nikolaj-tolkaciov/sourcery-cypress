class T3Page
{

    typeInTaskName(taskName)
    {
        return cy.get(".field__text--small").first().type(taskName);
    }

    checkIfBodyContainerIsEmpty()
    {
        return cy.get('.ag-body-container').find('div').should('have.length', 0);
    }

    getCreateTaskButton()
    {
        return cy.get('[type="button"]').contains("Create Task");
    }

    typeInNewTaskName(taskName)
    {
        return cy.get('[id="taskDetailsForm.name"]').type(taskName);
    }

    typeInNewTaskDescription(taskDescription)
    {
        return cy.get('[id="taskDetailsForm.description"]').type(taskDescription);
    }

    getBillToClientDropDown()
    {
        return cy.get('.Select-value-label');
    }

    getSpecificOptionFromBillToClientDropDown(option)
    {
        return cy.get('.Select-option').contains(option);
    }

    clearRateInput()
    {
        return cy.get('[id="taskDetailsForm.rate"]').clear();
    }

    typeInRateInputField(value)
    {
        return cy.get('[id="taskDetailsForm.rate"]').type(value);
    }

    getSaveButton()
    {
        return cy.get('.btn').contains("Save");
    }

    checkIfTaskExistInTheList(taskDescription)
    {
        return cy.get('[title="' + taskDescription + '"]').contains(taskDescription);
    }
}

export default T3Page