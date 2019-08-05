import TasksPage from '../obj/tasksPage';
import LoginPage from '../obj/loginPage';
import Common from '../obj/common';


const tasksPage = new TasksPage();
const loginPage = new LoginPage();
const common = new Common();

describe('Sourcebooks login', function() {

    it('Admin can create new Task', function(){
        let taskName = Math.random();
        let taskDescription = Math.random();
        let rateValue = Math.floor(Math.random() * 10) + 1;

        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "Admin");
        common.visitSpecificURL('/tasks');

        tasksPage.typeInTaskName(taskName);
        cy.wait(3000); // for some reason JS does not have enough time to load in, so this helps
        tasksPage.checkIfBodyContainerIsEmpty();
        tasksPage.getCreateTaskButton().click();
        tasksPage.typeInNewTaskName(taskName);
        
        tasksPage.typeInNewTaskDescription(taskDescription);
        tasksPage.getBillToClientDropDown().click();
        tasksPage.getSpecificOptionFromBillToClientDropDown('Yes').click();
        tasksPage.clearRateInput();
        tasksPage.typeInRateInputField(rateValue);
        tasksPage.getSaveButton().click();
        common.visitSpecificURL('/tasks');
        tasksPage.typeInTaskName(taskName);
        tasksPage.checkIfTaskExistInTheList(taskDescription);

    })
})