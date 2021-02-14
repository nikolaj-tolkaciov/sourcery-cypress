import {TimeLoggingPage, Task3} from '../objects/timeLoggingPage';

const timeLogging = new TimeLoggingPage;
const task = new Task3;
const name = 'SaLi'; ///define your task name in test case
const testNumber = '3'; ///define number of test to create unique task name in test

describe('Timesheets', function() {
    beforeEach(() => {
       cy.loginAs("Admin")
       timeLogging.visit() ;
    })

    it ('test', function() {
        
        ///Goes to Task and creates new task
        task.navigateToTasks().click();
        task.createTask().click();

        ///Fill required data
        task.fillTaskName(name, testNumber);
        task.fillDescription(testNumber);
        task.selectDropdownYes(); ///works with dropwdown
        task.fillRate()

        ///clicks submit + coming to the tasks
        task.submitANDnavigateTasks();

        ///filters +checks if it is there
        task.filtering(name, testNumber);
    })
})
