import T3Page from '../obj/tasksPage';
import T4Page from '../obj/clientsPage';
import LoginPage from '../obj/loginPage';
import Common from '../obj/common';

const t3page = new T3Page();
const t4page = new T4Page();
const loginPage = new LoginPage();
const common = new Common();

describe('Sourcebooks login', function() {

    beforeEach(function () {
        cy.loginAs("Admin");
        cy.visit('/');
    })

    it('Admin creates new project', function(){

        /* THIS T4 TASK IS NOT FINISHED */

        let projectName = "projName" + Math.random();
        cy.visit('/projects');
        cy.get(".btn").contains("Create Project").click();
        cy.get('[id="projectDetailsForm.name"]').type(projectName);
        cy.get('.Select-input').first().click({force:true});
        cy.wait(3000);
        cy.get('.Select-menu').contains("Internal").click({force:true});
    })
})