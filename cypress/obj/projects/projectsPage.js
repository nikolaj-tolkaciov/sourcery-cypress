class ProjectsPage {
    visit() {
        cy.visit('/projects');
    }

    getCreateProjectButton() {
        return cy.get('button').contains('Create Project');
    }

    getProjectNameFilter() {
        return cy.get('[class="field--filter"]').first().find('input');
    }

    getFilteredList() {
        return cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').find('.ag-body-container').children();
    }

    checkFilteredElementName(name) {
        return cy.get(`[title="${name}"]`).parent().should('have.attr', 'col-id', 'name');
    }

    checkFilteredElementClient(client) {
        return cy.get(`[title="${client}"]`).parent().should('have.attr', 'col-id', 'organization');
    }
}

export default ProjectsPage;