import ProjectsPage from '../objects/projectsPage';
import NewProjectPage from '../objects/newProjectPage';

const projectsPage = new ProjectsPage();
const newProjectPage = new NewProjectPage();

describe('Create project', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to create new project with role admin', function () {

        projectsPage.visit();
        projectsPage.pressCreateNewButton();

        var project = newProjectPage.createNewProject();
        cy.url().should('not.include', 'create');

        projectsPage.visit();
        projectsPage.assertProjectExists(project);
    })
})