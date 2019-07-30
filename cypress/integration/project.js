import ProjectsPage from '../objects/projectsPage.js';

describe('Sourcebooks login', function() {

    const projectsPage = new ProjectsPage;

    beforeEach(() => {
        cy.loginAs("Admin");
        projectsPage.visit();
    })

    it('Admins can create new project', function () {
        projectsPage.getCreateProjectButton().click();
        var autoProjectName = 'Project_' + Math.random().toString(36).substr(2, 9);
        projectsPage.getProjectName().type(autoProjectName);
        projectsPage.getClientName().click({force:true});
        projectsPage.getOption('sample inc').click();
        projectsPage.getProjectManager().click({force:true});
        projectsPage.getOption('Butvilaite, Berta Reja (berta.reja.butvilaite@sourcebooks.com)').click();

        projectsPage.getAddTasksButton().click();
        projectsPage.getSearchField().type('task name no. 9');
        projectsPage.getCheckbox('task name no. 9').click();
        projectsPage.getAddButton().click();
        projectsPage.getAddMembersButton().click();
        projectsPage.getSearchField().type('Butvilaite, Berta Reja');
        projectsPage.getCheckbox('Butvilaite, Berta Reja').click();
        projectsPage.getAddButton().click();
        projectsPage.getSaveButton().click();
        projectsPage.getUrl().should('not.include', 'create');
        projectsPage.visit();
        projectsPage.getInputField().eq(0).type(autoProjectName);
        projectsPage.getInputField().eq(1).type('sample inc');
        projectsPage.getFilteredName(autoProjectName).should('be.visible');
        projectsPage.getFilteredName('sample inc').should('be.visible');
    })
})