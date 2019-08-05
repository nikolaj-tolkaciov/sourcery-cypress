class ProjectPage {
    clickProjectManagerDropDown() {
        cy.get('[id = "projectDetailsForm.projectManager"]').click({force: true});
    }

    clickClientDropDown() {
        cy.get('[id="projectDetailsForm.client"]').click({force: true});
    }

    visit() {
        cy.visit('/projects');
    }

    inputProjectName(name) {
        cy.get(`[name = "projectDetailsForm.name"]`).type(name);
    }
    
    clickSpecificManagerFromDropDown(name) {
        cy.contains(name).click();
    }

    clickSpecificClientFromDropDown(name) {
        cy.contains(name).click();
    }

    clickAddSelectedItemsButton() {
        cy.get('[class= "btn"]').contains('Add').click();
    }

    typeIntoSearchMembersBox(memberName) {
        cy.get('[class="field__text field__text--small"]').get('[placeholder="Search"]').type(memberName);
    }

    selectMeFromMembersList() {
        cy.get('[class = "field__checkbox "]').contains('Poškus, Dominykas').click({force:true});
    }
}

export default ProjectPage;