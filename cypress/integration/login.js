import LoginPage from '../obj/loginPage';
import ClientsPage from '../obj/clients/clientsPage';
import ClientCreatePage from '../obj/clients/clientCreatePage';
import TasksPage from '../obj/tasks/tasksPage';
import TaskCreatePage from '../obj/tasks/taskCreatePage';
import TasksEditPage from '../obj/tasks/taskEditPage';
import TaskEditPage from '../obj/tasks/taskEditPage';
import TimeLoggingPage from '../obj/timeLogging/timeLoggingPage';

const loginPage = new LoginPage();
const clientsPage = new ClientsPage();
const clientCreatePage = new ClientCreatePage();
const tasksPage = new TasksPage();
const taskCreatePage = new TaskCreatePage();
const taskEditPage = new TaskEditPage();
const timeLoggingPage = new TimeLoggingPage();
    
var roles = [
    { name: 'User', 'tabCount': 1 }, 
    { name: 'Team Lead', tabCount: 2 }, 
    { name: 'Manager', tabCount: 5 }, 
    { name: 'Accountant', tabCount: 5}, 
    { name: 'Admin', tabCount: 6 }
];

function makeId() {
    let timeStamp = new Date().getTime();
    return 'Random_Name_' + timeStamp;
}

function testLogIn(role) {
    loginPage.visit();
    loginPage.getUserDropdown().click({force:true});
    loginPage.getUserFromDropdown('Marius Lastauskas').click();
    loginPage.getRoleDropdown().click({force:true});
    loginPage.getRoleFromDropdown(role).click();
    loginPage.getSubmitButton().click();
}

describe('Sourcebook test Clients', function() {
    it('Should be available for Admin to create new client', function () {
        testLogIn('Admin');

        const organization = makeId();
        const email = makeId() + '@mail.com';
        clientsPage.visit();
        clientsPage.getCreateClientButton().click();
        clientCreatePage.getFormOrganization().type(organization);
        clientCreatePage.getFormFirstName().type(makeId());
        clientCreatePage.getFormLastName().type(makeId());
        clientCreatePage.getFormEmail().type(email);
        clientCreatePage.getFormSubmit().click();
        
        clientsPage.visit();
        clientsPage.getOrganizationFilter().type(organization);
        clientsPage.getFilteredList().should('have.length', 1);
    })
})

describe('Sourcebook test Tasks', function() {
    it('Should be able to create new task as Admin', function () {
        testLogIn('Admin');

        let taskName = makeId();

        tasksPage.visit();
        tasksPage.getCreateTaskButton().click();
        taskCreatePage.getFormName().type(taskName);
        taskCreatePage.getFormDescription().type('Automated test created task');
        taskCreatePage.getBillableDropdown().click();
        taskCreatePage.getBillableFromDropdown('Yes').click();
        taskCreatePage.getFormRate().clear();
        taskCreatePage.getFormRate().type(Math.random() * 10);
        taskCreatePage.getSubmitButton().click();

        taskEditPage.checkUrl();
        tasksPage.visit();
        tasksPage.getNameFilter().type(taskName);
        tasksPage.getFilteredList().should('have.length', 1);
    })
})

describe('Sourcebooks testLogIn', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    for (let i = 0; i < roles.length; i++) {
        it('Should display ' + roles[i].tabCount + ' tabs when logged in as ' + roles[i].name + '.', function () {
            testLogIn(roles[i].name);

            timeLoggingPage.checkUrl();
            timeLoggingPage.getPageTitle().contains('Timesheets')
            timeLoggingPage.getCalendar().should('be.visible')
            timeLoggingPage.getFormTitle().should('be.visible')
            timeLoggingPage.getUserNameTitle().contains('Marius Lastauskas');
            timeLoggingPage.getNavTabs().should('have.length', roles[i].tabCount);
            
            timeLoggingPage.getActiveTab().contains('Time Logging');
            timeLoggingPage.getActiveTab().should('have.css', 'color', 'rgb(64, 76, 237)');
        })
    }
})

describe('Sourcebooks test Time Logging', function() {
    it('Should be displaying todays date in Time Logging page', function () {
        const today = new Date();
        const date = today.getDate();

        timeLoggingPage.getCalendarToday().contains(date);
    })
})