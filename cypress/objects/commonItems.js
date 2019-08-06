class commonItems {

    visit() {
        cy.visit('/tasks')
    }

    getTasksTab() {
        cy.get('[href="/tasks"]')
    }

}
    
 

 export default commonItems;