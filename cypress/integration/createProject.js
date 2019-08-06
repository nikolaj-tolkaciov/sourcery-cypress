import ProjectPage from "../objects/projectPage";

const projectPage = new ProjectPage();
const projectName = Math.random().toString(28);
const clientName = 'Internal';
const userFirstName = 'Modestas';
const userLastName = 'Kmieliauskas';
const userEmail = 'modestas.kmieliauskas@sourcebooks.com';

describe('Sourcebooks create project', function () {

    it('Should be able to create new project as admin', function () {
        cy.loginAs('Admin');
        projectPage.visit();
        projectPage.getCreateProjectButton().click();
        projectPage.getProjectNameField().type(projectName);
        projectPage.getClientDropdown().click();
        projectPage.selectClient(clientName).click();
        projectPage.getManagerDropdown().click();
        projectPage.selectManager(userLastName, userFirstName, userEmail).click();
        projectPage.getAddTasksButton().click();
        // clientPage.getClientOrganizationField().type(organizationName);
        // clientPage.getClientFirstnameField().type(Math.random().toString(36));
        // clientPage.getClientLastnameField().type(Math.random().toString(36));
        // clientPage.getClientEmailField().type('superuser@gmail.com');
        // clientPage.getSubmitClientButton().click();
        // clientPage.assertNotContainCreateUrl();
        // clientPage.visit();
        // clientPage.getFilterField().type(organizationName);
        // clientPage.getClientItem().contains(organizationName);
    })
})