class Tasks {

    tasksButton() {
         return cy.get('[href="/tasks"]')
    }
    createTasks(){
        return cy.get('.btn')
    }

    taskName(){
    return cy.get('[id="taskDetailsForm.name"]')
    }

    taskDescription(){
        return cy.get('[id ="taskDetailsForm.description"]')
    }

    selectBill(){
        return cy.get('.Select-value')
    }
    selectYes(){
    return cy.get('[role="option"]').contains("Yes")
    }

    hourlyRate(){
        return cy.get('[id ="taskDetailsForm.rate"]')
    }

    saveButton(){
        return cy.get('[type="submit"]')
    }

    searchByName(){
        return cy.get('[type="text"]').eq(0)
    }

    checkIfDisplayed(name){
        return cy.get('.ellipsis' + `[title=${name}]`)
    }

}
export default Tasks