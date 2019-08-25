import Common from '../objects/common';
import ProjectPage from '../objects/projectPage';

const common = new Common();
const projectPage = new ProjectPage();
const todaysDate = Cypress.moment().format('YYYY-DD-MM')

describe('Sourcebooks project creation by an Admin (T-5)', function() {

    it('Should be able to login with an Admin role, create a new project, and check if the new project is created', function () {

        cy.visit('/');
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown('Ieva Stonkaitė').click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown('Admin').click();
        common.getButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');

        cy.visit('/projects');
        projectPage.getCreateProjectButton().click();
        projectPage.getProjectNameField().type('TestProjectName' + ' ' + todaysDate);
        projectPage.getProjectDescriptionField().type('TestDescriptionName' + ' ' + todaysDate);
        projectPage.getClientNameDropdown().click().wait(2000).contains('TestOrganizationName' + ' ' + todaysDate).click();
        projectPage.getClientManagerDropdown().click().wait(2000).contains('Stonkaite, Ieva').click();
        common.getButton().click();

        cy.visit('/projects');
        projectPage.getProjectSearchField().type('TestProjectName' + ' ' + todaysDate);
        cy.wait(2000);
        projectPage.getCreatedProjectName().contains('TestProjectName' + ' ' + todaysDate);              
    })
   
})