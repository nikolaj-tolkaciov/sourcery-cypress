import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();

describe('Sourcebooks login with my user and different roles', function() {

    const Roles =
    [
        {
            name: "User",
            tabs: '1'
        },
        {
            name: "Team Lead",
            tabs: '2'
        },
        {
            name: "Manager",
            tabs: '5'
        },
        {
            name: "Accountant",
            tabs: '5'
        },
        {
            name: "Admin",
            tabs: '6'
        }
    ];
    
    Roles.forEach((role) => {
        it(`Verify ${role.name} role can log in and should see appropriate tabs`, function() {
            loginPage.visit();        
            loginPage.loginWithUserAndRole("Jelena Černyšova", role.name)
            cy.url().should('include', '/time-logging');
            
            timeLoggingPage.getPageTitle().contains('Timesheets')
            timeLoggingPage.getCalendar().should('be.visible')
            timeLoggingPage.getTileForm().should('be.visible')
            timeLoggingPage.getLoggedInUser().contains('Jelena Cernyšova');
            timeLoggingPage.getNavigationTabsList().should('have.length', role.tabs)
            timeLoggingPage.getNavigationTabsList().contains('Time Logging').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        })
    })
})