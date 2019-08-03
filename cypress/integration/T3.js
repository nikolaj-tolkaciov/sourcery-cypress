import TaskPage from '../objects/taskPage';
import Common from '../objects/common';

const taskPage = new TaskPage();
const common = new Common();

describe('Task creation', function() {

    beforeEach(function () {
        cy.loginAs('Admin');
        taskPage.visit();
    })

    it('Admin creates a new task', function () {
        
        common.clickCertainButtonWithText('button','Create Task');
        const timeStamp = common.getCurrentTimeStamp();
        taskPage.inputTaskName(timeStamp);
        taskPage.inputTaskDescription(timeStamp);
        taskPage.clickBillToClientDropDown();

        taskPage.selectSpecificBillToClientOption('Yes');
        common.clearField('taskDetailsForm.rate');
        taskPage.inputTaskRate(Math.floor(Math.random()*50));

        taskPage.clickBillToClientDropDown();
        taskPage.selectSpecificBillToClientOption(taskPage.generateRandomBillToClientSelection());

        common.clickCertainButtonWithText('Submit','Save');

        common.checkIfUrlDoesNotInclude('/create');
        common.visit('/tasks');
        common.filterNamesList(timeStamp);
        common.filterDescriptionList(timeStamp);
        common.checkIfListContains(timeStamp);
    })

})