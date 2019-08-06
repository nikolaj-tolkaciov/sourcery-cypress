import LoginPage from '../Objects/loginPage'
import TimeLogging from '../Objects/timeLogging'
import CreatingTask from '../Objects/creatingTask'
const loginPage = new LoginPage();
const timeLogging = new TimeLogging();
const creatingTask = new CreatingTask();
const userName = 'Ieva Stakneviciute';
let taskName= Math.random().toString(36).substring(2, 15);
let randomName = 'I&S'+ taskName;
const Bill='Yes';

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
               
        loginPage.visit();
        loginPage.getValidationError().should('not.visible');
        loginPage.submitLogin().click();
        loginPage.getValidationError().should('be.visible');
    })

    let Roles = ['User','Team Lead','Manager','Accountant', 'Admin'];
    let tabNumber = [1, 2, 5, 5, 6];
    for (let i=0; i<Roles.length; i++){

    
    it('Should be able to login with role '+ Roles[i] , function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole(Roles[i]).click();
        loginPage.submitLogin().click();

        timeLogging.visitURL();
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getCalendarTody().should('be.visible');
        timeLogging.getUserTitle().contains(userName);
        timeLogging.countTabs().should('have.length', tabNumber[i]);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
    }
    //Homework
    it('Should be able to login with role Admin and enter task', function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole('Admin').click();
        loginPage.submitLogin().click();

        creatingTask.visitTasks().click();
        creatingTask.pressCreatTask().click();
        creatingTask.typeName(randomName);
        creatingTask.typeDescription().type('tir lim pam pam');
        creatingTask.clickDropDown();        
        creatingTask.chooseYes(Bill).click({force:true});
        creatingTask.getRate().clear();
        creatingTask.getRate().type('8.40');
        creatingTask.getSave().click();
        creatingTask.checkURL();
        creatingTask.visitTasks().click();
        creatingTask.getTaskNameField().type(randomName);
        creatingTask.checkTaskName().should('contain',randomName);;
    })
})
