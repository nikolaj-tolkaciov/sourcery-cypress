import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import ProjectPage from '../objects/ProjectPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const projectPage = new ProjectPage();

describe ('Sourcebooks Admin creates new Project', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })
    
    it ('Admin should create new task', function() {

        let projectName = 'Acquire item | id - ' + Math.random().toString(36).substring(2,15);
        let projectManager = 'Janukevic, Vitalij (vitalij.janukevic@sourcebooks.com)';
        let projectClient = 'SecretTeaPartyCommunity';

        //Navigating to project creation page
        timeLoggingPage.getNavigationPanelProjects().should('be.visible');
        timeLoggingPage.getNavigationPanelProjects().click({force:true});

        //Project creation
        projectPage.getCreateProjectButton().should('be.visible');
        projectPage.getCreateProjectButton().click({force:true});
        projectPage.getCreateProjectNameInputField().should('be.visible');
        projectPage.getCreateProjectNameInputField().type(projectName);
        projectPage.getCreateProjectManagerInputField().should('be.visible');
        projectPage.getCreateProjectManagerInputField().click({force:true});
        projectPage.getCreateProjectManagerInputField().type(projectManager);
        projectPage.getCreateProjectManagerInputField().type('{downarrow}{enter}');
        projectPage.getCreateProjectClientNameInputField().should('be.visible');
        projectPage.getCreateProjectClientNameInputField().click({force:true});
        projectPage.getCreateProjectClientNameInputField().type(projectClient);
        projectPage.getCreateProjectClientNameInputField().type('{downarrow}{enter}');
        projectPage.getSaveButton().click({type:true});

        //Making sure that project is saved and contained in projects list
        timeLoggingPage.getNavigationPanelProjects().click({force:true});
        projectPage.getProjectNameInputField().should('be.empty').and('be.visible');
        projectPage.getProjectNameInputField().click({force:true});
        projectPage.getProjectNameInputField().type(projectName);
        projectPage.getClientNameInputField().should('be.empty').and('be.visible');
        projectPage.getClientNameInputField().click({force:true});
        projectPage.getClientNameInputField().type(projectClient);
        projectPage.checkIfFilteredProjectIsVisible(projectName, projectClient);
    })

})