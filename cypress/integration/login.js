import LoginPage from '../Objects/loginPage'
import TimeLogging from '../Objects/timeLogging'
import CreatingTask from '../Objects/creatingTask'
const loginPage = new LoginPage();
const timeLogging = new TimeLogging();
const creatingTask = new CreatingTask();
const userName = 'Ieva Stakneviciute';

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
               
        loginPage.visit();
        loginPage.getValidationError().should('not.visible');
        loginPage.submitLogin().click();
        loginPage.getValidationError().should('be.visible');
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole('User').click();
        loginPage.submitLogin().click();

        timeLogging.visitURL();
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getCalendarTody().should('be.visible');
        timeLogging.getUserTitle().contains(userName);
        timeLogging.countTabs().should('have.length', 1);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole('Team Lead').click();
        loginPage.submitLogin().click();

        timeLogging.visitURL();
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getCalendarTody().should('be.visible');
        timeLogging.getUserTitle().contains(userName);
        timeLogging.countTabs().should('have.length', 2);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Manager', function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole('Manager').click();
        loginPage.submitLogin().click();

        timeLogging.visitURL();
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getCalendarTody().should('be.visible');
        timeLogging.getUserTitle().contains(userName);
        timeLogging.countTabs().should('have.length', 5);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })

    it('Should be able to login with role Accountant', function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole('Accountant').click();
        loginPage.submitLogin().click();

        timeLogging.visitURL();
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getCalendarTody().should('be.visible')
        timeLogging.getUserTitle().contains(userName);
        timeLogging.countTabs().should('have.length', 5);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    }) 

    it('Should be able to login with role Admin', function () {

        loginPage.visit();
        loginPage.openUsersDropDown().click({force:true});
        loginPage.chooseSelectedUser(userName).click();
        loginPage.openRoleList().click({force:true});
        loginPage.getUserRole('Admin').click();
        loginPage.submitLogin().click();

        timeLogging.visitURL();
        timeLogging.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getCalendarTody().should('be.visible');
        timeLogging.getUserTitle().contains(userName);
        timeLogging.countTabs().should('have.length', 6);
        timeLogging.celendarToday().contains(new Date().getDate());
        timeLogging.selectedTimelogging().contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)');
    })
    
})
