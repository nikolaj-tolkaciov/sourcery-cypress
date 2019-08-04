import TaskPage from '../objects/taskPage';
import Common from '../objects/common';

const taskPage = new TaskPage();
const common = new Common();

describe('Task creation', function() {
    beforeEach( function(){
        cy.loginAs('Admin');
        taskPage.visit();
    })
    
    const timeStamp = common.getCurrentTimeStamp();

    it('Admin creates a new non-billable task', function () {
        common.clickCertainButtonWithText('button','Create Task');
        
        taskPage.inputTaskName(timeStamp);
        taskPage.inputTaskDescription(timeStamp);
        taskPage.clickBillToClientDropDown();
        taskPage.selectSpecificBillToClientOption('No');
        common.clickCertainButtonWithText('Submit','Save');

        common.checkIfUrlDoesNotInclude('/create');
    })

    it('Checking for the task and editing to make it billable', function () {
        common.filterNamesList(timeStamp);
        common.filterDescriptionList(timeStamp);
        taskPage.filterBillableTasksByText('No');
        common.checkIfListContains(timeStamp);
        
        common.clickCertainButtonWithText('button','Edit');

        taskPage.clickBillToClientDropDown();
        taskPage.selectSpecificBillToClientOption('Yes');
        common.clearField('taskDetailsForm.rate');
        taskPage.inputTaskRate(Math.floor(Math.random()*50));
        common.clickCertainButtonWithText('Submit','Save');
        
        common.checkIfUrlDoesNotInclude('/create');
    })

    it('Checking if the task was edited correctly and still exists in list', function() {
        common.filterNamesList(timeStamp);
        common.filterDescriptionList(timeStamp);
        taskPage.filterBillableTasksByText('Yes');
        common.checkIfListContains(timeStamp);
    })

})