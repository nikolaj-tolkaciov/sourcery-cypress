import LoginPage from '../objects/logingPage'
import TimeLogingPage from '../objects/timeLogingPage'
import TasksPage from '../objects/tasksPage'
const loginPage = new LoginPage()
const timeLogingPage = new TimeLogingPage()
const tasksPage = new TasksPage()
let taskName = (Math.random())
describe('Admin creates new task in Sourcebooks', function() {
    it('Login with role Admin', function () {

        loginPage.visit();
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Jevgenija Malomuž").click();
        loginPage.getLoginForm().click({force:true});
        loginPage.getRoleOfUser("Admin").click();
        loginPage.getSubmitButton().click()

        timeLogingPage.getUrl('/time-logging');
        timeLogingPage.getPageTitle().contains('Timesheets')
        timeLogingPage.getCalendarVisible().should('be.visible')
        timeLogingPage.getCalendarToday().contains(new Date().getDate());
        timeLogingPage.getTileForm().should('be.visible')
        timeLogingPage.getInfoTitle().contains('Jevgenija Malomuž');
        timeLogingPage.getNavigationTabCount().should('have.length', 6);
        timeLogingPage.getActiveTab().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');

    })
    it('Go to Tasks Page', function () {
       tasksPage.tasksButton().click();
       tasksPage.createTaskButton().click();
       tasksPage.createTaskName().type(taskName)
       tasksPage.fillDescriptionField().type('Automation Testing')
       tasksPage.yesBillToClient().click()
       tasksPage.saveNewTask().click()
       tasksPage.tasksButton().click();
       tasksPage.filterTask().type(taskName).click()
       tasksPage.checkIfNewTaskIsCreated(taskName).contains(taskName)


    })


})