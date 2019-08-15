import LoginPage from '../objects/loginPage';
import TasksPage from '../objects/tasksPage';

const loginPage = new LoginPage();
const tasksPage = new TasksPage();

describe('Sourcebooks Tasks', function() {

    // it('Should be able to login with role Admin', function () {
    //     cy.visit('/');
    //     cy.get('[id="loginForm.userId"]').click({force:true});
    //     cy.get('[aria-label="Justina Burmistrovaitė"]').click();
    //     cy.get('[id="loginForm.role"]').click({force:true});
    //     cy.get('[aria-label="Admin"]').click();
    //     cy.get('[type="submit"]').click();

    //     cy.url().should('include', '/time-logging');
    //     cy.get('.page__title').contains('Timesheets');
    //     cy.get('.main-nav').find('.main-nav__link--active').contains('Time Logging');
    //     cy.get('.main-nav').find('.main-nav__link--active').should('have.css', 'color').and('equal', 'rgb(64, 76, 237)');
    //     cy.get('.user-info__title').contains('Justina Burmistrovaite');
    //     cy.get('.main-nav').find('li').should('have.length', 6);
    // })

    it('Should create a task with a role of Admin and see it in Tasks list', function () {
        let name = 'JJ test' + Math.random();          // the name of the task
        let description = 'JJ test' + Math.random();   // the decription if the task
        let rate = (Math.random() * 10).toFixed(2);   // The rate value of the billable task
    
        loginPage.visit();
        loginPage.loginAs('Justina Burmistrovaitė', 'Admin');
        cy.wait(2000);
        loginPage.visit('tasks');

        tasksPage.getCreateTaskButton().click({force:true});
        tasksPage.fillNewTaskName(name);
        tasksPage.fillNewTaskDescription(description);
        tasksPage.getBillDropdown().click({force:true});
        tasksPage.getBillDropdownOption('Yes').click();
        tasksPage.fillHourlyRate(rate);
        tasksPage.clickSaveButton();
        cy.wait(2000);

        loginPage.visit('tasks');
        tasksPage.fillTaskNameToFilter(name);
        cy.wait(2000);

        tasksPage.isNewTaskInList(name, description, rate)

    })


})