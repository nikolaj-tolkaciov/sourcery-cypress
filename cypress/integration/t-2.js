import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import PageComponents from '../objects/pageComponents';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const pageComponents = new PageComponents();

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
            pageComponents.getUrl().should('include', '/time-logging');
            
            pageComponents.getPageTitle().contains('Timesheets')
            pageComponents.getCalendar().should('be.visible')
            timeLoggingPage.getTileForm().should('be.visible')
            pageComponents.getLoggedInUser().contains('Jelena Cernyšova');
            pageComponents.getNavigationTabsList().should('have.length', role.tabs)
            pageComponents.getNavigationTabsList().contains('Time Logging').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
        })
    })
})