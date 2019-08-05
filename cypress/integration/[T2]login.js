import LoginPage from '../obj/loginPage';
import TimeLoggingPage from '../obj/timeLogging/timeLoggingPage';
import Common from '../obj/common';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const common = new Common();
    
const roles = [
    { name: 'User', 'tabCount': 1 }, 
    { name: 'Team Lead', 'tabCount': 2 }, 
    { name: 'Manager', 'tabCount': 5 }, 
    { name: 'Accountant', 'tabCount': 5}, 
    { name: 'Admin', 'tabCount': 6 }
];

describe('[T2] Sourcebooks testLogIn', function() {
    it('Should display validation for empty user after attempted loggin', function() {
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible');
    })

    for (let i = 0; i < roles.length; i++) {
        it(`Should display ${roles[i].tabCount} tabs when logged in as ${roles[i].name}.`, function() {
            loginPage.testLogIn(roles[i].name);

            timeLoggingPage.checkUrl();
            common.getPageTitle().contains('Timesheets');
            timeLoggingPage.getCalendar().should('be.visible');
            timeLoggingPage.getFormTile().should('be.visible');
            common.getUserNameTitle().contains('Marius Lastauskas');
            common.getNavTabs().should('have.length', roles[i].tabCount);
            
            common.getActiveTab().contains('Time Logging');
            common.getActiveTab().should('have.css', 'color', 'rgb(64, 76, 237)');
        })
    }
})

