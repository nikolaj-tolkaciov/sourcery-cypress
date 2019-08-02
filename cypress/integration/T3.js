import TaskPage from '../objects/taskPage';
import Common from '../objects/common';

const taskPage = new TaskPage();
const common = new Common();

describe('Task creation', function() {

    beforeEach(function () {
        cy.loginAs('Admin');
        common.visit('/Tasks');
    })

    it('Admin creates a new task', function () {
        
        common.clickCertainButton('button','Create Task');
        const taskName = Date.now().toString(); 
        taskPage.inputIntoASpecificField('taskDetailsForm.name', taskName);
        taskPage.inputIntoASpecificField('taskDetailsForm.description', Date.now());
        taskPage.clickBillToClientDropDown();
        const selection = taskPage.generateRandomBillToClientSelection();
        taskPage.selectRandomBillToClientOption(selection);

        if (selection === 'Yes') {
            common.clearField('taskDetailsForm.rate');
            taskPage.inputIntoASpecificField('taskDetailsForm.rate', Math.floor(Math.random()*50));
        }

        common.clickCertainButton('Submit','Save');

        common.wait(200);
        common.checkIfUrlDoesNotInclude('/create');
        common.visit('/tasks');
        taskPage.filterTasksByName(taskName);
        taskPage.checkIfTaskListContains(taskName);
    })

})