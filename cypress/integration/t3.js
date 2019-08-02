import T3Page from '../obj/t3Page';
import LoginPage from '../obj/loginPage';

const t3page = new T3Page();
const loginPage = new LoginPage();

describe('Sourcebooks login', function() {

    it('Admin can create new Task', function(){
        let taskName = Math.random();
        let taskDescription = Math.random();
        let rateValue = Math.floor(Math.random() * 10) + 1;

        loginPage.visit();
        loginPage.loginAsSpecificUserAndRole("Valentinas Kasteckis", "Admin");
        loginPage.visitSpecificURL('/tasks');

        t3page.typeInTaskName(taskName);
        cy.wait(3000); // for some reason JS does not have enough time to load in, so this helps
        t3page.checkIfBodyContainerIsEmpty();
        t3page.getCreateTaskButton().click();
        t3page.typeInNewTaskName(taskName);
        
        t3page.typeInNewTaskDescription(taskDescription);
        t3page.getBillToClientDropDown().click();
        t3page.getSpecificOptionFromBillToClientDropDown('Yes').click();
        t3page.clearRateInput();
        t3page.typeInRateInputField(rateValue);
        t3page.getSaveButton().click();
        loginPage.visitSpecificURL('/tasks');
        t3page.typeInTaskName(taskName);
        t3page.checkIfTaskExistInTheList(taskDescription);

    })
})