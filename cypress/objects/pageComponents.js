class PageComponents {
    
    constructor(){
        this.employeeName = "Cernyšova, Jelena"
        this.employeeEmail = "jelena.cernysova@sourcebooks.com"
        this.projectName = "Some unique project name"
        this.taskName = "My billable task"
        this.taskBillable = "Yes"
        this.taskRate = "5"
        this.taskDuration = "0.1"
        this.clientName = "FirstName"
        this.clientSurname = "LastName"
        this.clientEmail = "email@email.email"
        this.projectClient = "Internal"
    }

    getPageTitle(){
        return cy.get('.page__title')
    }

    getLoggedInUser(){
        return cy.get('.user-info__title')
    }

    getNavigationTabsList(){
        return cy.get('.main-nav').find('li')
    }

    getElementById(id){
        return cy.get(`[id="${id}"]`)
    }

    getElementByClass(elClass){
        return cy.get(`[class="${elClass}"]`)
    }

    clickSubmit(){
        cy.get('[type="submit"]').click();
    }

    getFirstSearchField(){
        return cy.get('[class="field__text field__text--small"]').eq(0)

    }
    
    clickInputField(inputId){
        cy.get(`[id="${inputId}"]`).click({force:true});
    }
}
export default PageComponents