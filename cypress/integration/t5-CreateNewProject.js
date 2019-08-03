import ProjectsPage from '../objects/projectsPage';
import ProjectDetailsPage from '../objects/projectDetailsPage';

const projectsPage = new ProjectsPage();
const projectDetailsPage = new ProjectDetailsPage();

describe('Create project', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to create new project with role admin', function () {

        projectsPage.visit();
        projectsPage.pressCreateNewButton();

        var project = projectDetailsPage.createNewProject();
        cy.url().should('not.include', 'create');

        projectsPage.visit();
        projectsPage.assertProjectExists(project);
    })
})