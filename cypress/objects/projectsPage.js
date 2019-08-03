import PageComponents from "./pageComponents";

class ProjectsPage extends PageComponents{
    visit(){
        cy.visit('/projects');
    }

    pressCreateNewButton(){
        cy.get('[class="btn"]').contains('Create Project').click();
    }

    assertProjectExists(project){
        cy.get('[class="field__text field__text--small"]').eq(0).type(project + '{enter}')
        cy.get(`[title="${this.projectClient}"]`).should('be.visible')
    }
}
export default ProjectsPage