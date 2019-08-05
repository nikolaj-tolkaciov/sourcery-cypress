class ProjectCreatePage {
    getFormName() {
        return cy.get('[id="projectDetailsForm.name"]');
    }

    getProjectManagerDropdown() {
        return cy.get('[for="projectDetailsForm.projectManager"]').next();
    }

    getProjectManagerFromDropdown(projectManager) {
        return cy.get(`[aria-label="${projectManager}"]`);
    }

    getClientDropdown() {
        return cy.get('[for="projectDetailsForm.client"]').next();
    }

    getClientFromDropdown(client) {
        return cy.get(`[aria-label="${client}"]`);
    }

    getAddTaskButton() {
        return cy.get('button').contains('Add Tasks');
    }

    getTaskModuleTask(id) {
        return cy.get(`[id="item_NaN_${id}"]`).next();
    }

    getTaskModuleAddButton() {
        return cy.get('.modal__actions').find('button').contains('Add');
    }

    getAddMemberButton() {
        return cy.get('button').contains('Add Members');
    }

    getTeamMemberFromModule() {
        return cy.get('.field__checkbox').contains('Lastauskas, Marius').siblings('.field__checkbox-fake');
    }

    getSubmitButton() {
        return cy.get('[type="submit"]');
    }
}

export default ProjectCreatePage;