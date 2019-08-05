import Common from '../obj/common';
import ProjectsPage from '../obj/projects/projectsPage';
import ProjectCreatePage from '../obj/projects/projectCreatePage';

const common = new Common();
const projectsPage = new ProjectsPage();
const projectCreatePage = new ProjectCreatePage();

const projectName = common.makeId();
const clientName = 'Internal';

describe('[T5] Sourcebooks test projects', function() {
    it('Should be available for Admin to create new project', function() {
        cy.loginAs('Admin');

        projectsPage.visit();
        projectsPage.getCreateProjectButton().click();
        projectCreatePage.getFormName().type(projectName);
        projectCreatePage.getProjectManagerDropdown().click();
        projectCreatePage.getProjectManagerFromDropdown("Lastauskas, Marius (marius.lastauskas@sourcebooks.com)").click();
        projectCreatePage.getClientDropdown().click();
        projectCreatePage.getClientFromDropdown(clientName).click();
        projectCreatePage.getAddTaskButton().click();
        projectCreatePage.getTaskModuleTask(1136).click();
        projectCreatePage.getTaskModuleAddButton().click();
        projectCreatePage.getAddMemberButton().click();
        projectCreatePage.getTeamMemberFromModule().click();
        projectCreatePage.getTaskModuleAddButton().click();
        projectCreatePage.getSubmitButton().click();
        
        projectsPage.visit();
        projectsPage.getProjectNameFilter().type(projectName);
        projectsPage.getFilteredList().should('have.length', 1);
        projectsPage.checkFilteredElementName(projectName);
        projectsPage.checkFilteredElementClient(clientName);
    })
})